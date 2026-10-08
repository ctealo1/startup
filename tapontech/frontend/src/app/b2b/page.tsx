export default function B2BDashboard() {
  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="text-gradient">Aggregator Dashboard</h1>
          <p className="text-muted">B2B Inventory & EPR Compliance</p>
        </div>
        <div style={{ background: 'rgba(30, 41, 59, 0.8)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
          EPR Target: <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>65%</span>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel">
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Recovered (This Month)</p>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>4,520 kg</h2>
        </div>
        <div className="glass-panel">
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Pending Pickups</p>
          <h2 style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>124</h2>
        </div>
        <div className="glass-panel">
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Tokens Distributed</p>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent)' }}>45,200 T</h2>
        </div>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Pre-Sorted Inventory</h3>
      <div className="glass-panel" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Material</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Inventory Volume</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>PET Plastics</td>
              <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>2,100 kg</td>
              <td style={{ padding: '1rem 0' }}><span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-color)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Ready for Dispatch</span></td>
              <td style={{ padding: '1rem 0' }}><button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Sell to Recycler</button></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>Cardboard & Paper</td>
              <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>1,500 kg</td>
              <td style={{ padding: '1rem 0' }}><span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-color)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Ready for Dispatch</span></td>
              <td style={{ padding: '1rem 0' }}><button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Sell to Recycler</button></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1rem 0' }}>Glass Bottles</td>
              <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>600 kg</td>
              <td style={{ padding: '1rem 0' }}><span style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Sorting</span></td>
              <td style={{ padding: '1rem 0' }}><button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} disabled>Pending</button></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem 0' }}>Aluminum Cans</td>
              <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>320 kg</td>
              <td style={{ padding: '1rem 0' }}><span style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-color)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Ready for Dispatch</span></td>
              <td style={{ padding: '1rem 0' }}><button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>Sell to Recycler</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
