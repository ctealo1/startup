'use client';

export default function Wallet() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Digital Wallet</h1>
      
      <div className="glass-panel" style={{ 
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(30, 41, 59, 0.8))',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        marginBottom: '2rem'
      }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Balance</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          1,240 <span style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>T</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.9rem' }}>≈ ₱124.00 PHP</p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem' }}>10 T = ₱1</div>
        </div>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Redeem Rewards</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#0052FF', color: 'white', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>G</div>
            <div>
              <h4 style={{ fontSize: '1rem' }}>GCash Transfer</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Min. 500 T (₱50)</p>
            </div>
          </div>
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Redeem</button>
        </div>
        
        <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#F59E0B', color: 'white', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem' }}>Meralco Bill Credit</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Min. 1000 T (₱100)</p>
            </div>
          </div>
          <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Redeem</button>
        </div>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Transaction History</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <p style={{ fontWeight: 500 }}>Waste Verified (PET)</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Oct 8, 2026</p>
          </div>
          <span style={{ color: 'var(--primary-color)' }}>+50 T</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <p style={{ fontWeight: 500 }}>GCash Redemption</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Oct 1, 2026</p>
          </div>
          <span style={{ color: 'var(--danger)' }}>-1000 T</span>
        </div>
      </div>
    </div>
  );
}
