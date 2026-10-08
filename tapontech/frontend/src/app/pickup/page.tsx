'use client';
import { useState } from 'react';

export default function Pickup() {
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [materials, setMaterials] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  const toggleMaterial = (mat: string) => {
    setMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !date || materials.length === 0) return;
    
    setLoading(true);
    // Stub API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setScheduled(true);
  };

  if (scheduled) {
    return (
      <div className="animate-fade-in glass-panel" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 style={{ marginBottom: '1rem' }}>Pickup Scheduled!</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>A collector will arrive at {address} on {date}. We will notify you when they are nearby.</p>
        <button className="btn-primary" onClick={() => setScheduled(false)}>Schedule Another</button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1 className="text-gradient" style={{ marginBottom: '0.5rem' }}>Schedule Pickup</h1>
      <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Available in Metro Manila corridors</p>
      
      <form onSubmit={handleSubmit} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Pickup Address / Pin</label>
          <input 
            type="text" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g., 123 BGC Avenue, Taguig"
            className="input-field"
            required
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--secondary-color)', fontSize: '0.85rem', cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            <span>Use current location</span>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Materials Ready</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['PET Bottles', 'Cardboard', 'Glass', 'Metal Cans', 'E-Waste'].map(mat => (
              <div 
                key={mat}
                onClick={() => toggleMaterial(mat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '99px',
                  border: `1px solid ${materials.includes(mat) ? 'var(--primary-color)' : 'rgba(255,255,255,0.2)'}`,
                  background: materials.includes(mat) ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                  color: materials.includes(mat) ? 'var(--primary-color)' : 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
              >
                {mat}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Preferred Date & Time</label>
          <input 
            type="datetime-local" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="btn-primary" disabled={loading || materials.length === 0 || !address || !date}>
          {loading ? 'Scheduling...' : 'Confirm Pickup'}
        </button>
      </form>
    </div>
  );
}
