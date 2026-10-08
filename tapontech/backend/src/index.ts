import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Healthcheck
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TaponTech Backend is running!' });
});

// 2. Auth / User (Stubbed for MVP)
app.post('/api/auth/login', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone is required' });

  // Find or create user
  let user = await prisma.user.findUnique({ where: { phone } });
  if (!user) {
    user = await prisma.user.create({ data: { phone } });
  }

  res.json({ message: 'Login successful', user });
});

// 3. Wallet (Fetch Balance)
app.get('/api/wallet/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({ balance: user.balance });
});

// 4. Waste Logging & Fraud Mitigation (Stub)
app.post('/api/waste', async (req, res) => {
  const { userId, type, imageUrl, imageHash } = req.body;
  
  // Guardrail: Check for duplicate imageHash
  if (imageHash) {
    const existing = await prisma.wasteLog.findFirst({ where: { imageHash } });
    if (existing) {
      return res.status(400).json({ error: 'Duplicate image detected. Potential fraud.' });
    }
  }

  const wasteLog = await prisma.wasteLog.create({
    data: { userId, type, imageUrl, imageHash }
  });

  res.json({ message: 'Waste logged successfully', wasteLog });
});

// 5. Pickup Scheduling
app.post('/api/pickup', async (req, res) => {
  const { userId, latitude, longitude, address, materials, scheduleAt } = req.body;

  const pickup = await prisma.pickup.create({
    data: {
      userId,
      latitude,
      longitude,
      address,
      materials: materials.join(', '), // Convert array to string for SQLite
      scheduleAt: new Date(scheduleAt)
    }
  });

  res.json({ message: 'Pickup scheduled', pickup });
});

// 6. B2B / Aggregator Data Dashboard
app.get('/api/b2b/stats', async (req, res) => {
  // Aggregate waste logs
  const logs = await prisma.wasteLog.groupBy({
    by: ['type'],
    _count: { type: true }
  });
  
  res.json({ stats: logs });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
