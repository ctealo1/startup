'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setLoading(true);
    // Simulate OTP / Login API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    
    // In MVP, just route to dashboard
    router.push('/');
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>TaponTech</h1>
        <p className="text-muted">Turn your eco-waste into digital wealth.</p>
      </div>

      <form onSubmit={handleLogin} className="glass-panel" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone Number</label>
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+63 917 123 4567"
            className="input-field"
            required
          />
        </div>
        
        <button type="submit" className="btn-primary" disabled={loading || !phone}>
          {loading ? 'Sending OTP...' : 'Login / Sign Up'}
        </button>

        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', margin: '1rem 0' }}>
          OR
        </div>

        <button type="button" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </button>
      </form>
    </div>
  );
}
