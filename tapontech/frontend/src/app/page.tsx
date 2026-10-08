import Link from 'next/link';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 className="text-gradient">Hello, Juan! 👋</h1>
        <p className="text-muted">Let's monetize your eco-waste today.</p>
      </header>

      <section className="glass-panel" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
          1,240 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>T-Tokens</span>
        </h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>~ ₱124.00 GCash / Maya Value</p>
        <Link href="/wallet" className="btn-primary" style={{ width: '100%' }}>
          Redeem Rewards
        </Link>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <Link href="/log-waste" className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <h3 style={{ fontSize: '1rem' }}>Log Waste</h3>
        </Link>
        <Link href="/pickup" className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1rem' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '0.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <h3 style={{ fontSize: '1rem' }}>Schedule Pickup</h3>
        </Link>
      </div>

      <section>
        <h3 style={{ marginBottom: '1rem' }}>Recent Activity</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <div>
              <p style={{ fontWeight: 600 }}>10 PET Bottles</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified • Today, 10:00 AM</p>
            </div>
            <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>+50 T</span>
          </div>
          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <div>
              <p style={{ fontWeight: 600 }}>Cardboard Box (2kg)</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified • Yesterday, 2:30 PM</p>
            </div>
            <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>+20 T</span>
          </div>
        </div>
      </section>
    </div>
  );
}
