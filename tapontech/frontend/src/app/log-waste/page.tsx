'use client';
import { useState } from 'react';

export default function LogWaste() {
  const [wasteType, setWasteType] = useState('pet');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preview) {
      setMessage('Please upload an image of the waste.');
      return;
    }
    
    setLoading(true);
    setMessage('');
    
    try {
      // Stub: simulate CV / Fraud Mitigation logic
      // In a real app, this would post to /api/waste with the image for hash comparison
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Randomly simulate a duplicate detection (1 in 5 chance)
      if (Math.random() < 0.2) {
        setMessage('❌ Duplicate image detected! This looks like a previously submitted item.');
      } else {
        setMessage('✅ Waste verified and logged successfully! +50 Tokens added.');
        setPreview(null);
      }
    } catch (err) {
      setMessage('Failed to log waste. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Log Waste</h1>
      
      <form onSubmit={handleSubmit} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Waste Type</label>
          <select 
            value={wasteType} 
            onChange={(e) => setWasteType(e.target.value)}
            className="input-field"
          >
            <option value="pet">PET Bottles (Plastic)</option>
            <option value="cardboard">Cardboard & Paper</option>
            <option value="glass">Glass Bottles</option>
            <option value="metal">Aluminum / Metal Cans</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Upload Image</label>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Our AI verifies the material and checks for duplicates.</p>
          <div style={{ 
            border: '2px dashed rgba(255, 255, 255, 0.2)', 
            borderRadius: '12px', 
            padding: '2rem', 
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer'
          }}>
            {preview ? (
              <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />
            ) : (
              <div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <p style={{ color: 'var(--text-muted)' }}>Tap to take a photo or upload</p>
              </div>
            )}
            <input 
              type="file" 
              accept="image/*" 
              capture="environment" 
              onChange={handleImageChange}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} 
            />
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Verifying with AI...' : 'Submit Waste'}
        </button>

        {message && (
          <div style={{ 
            padding: '1rem', 
            borderRadius: '8px', 
            background: message.includes('✅') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: message.includes('✅') ? 'var(--primary-color)' : 'var(--danger)',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
