import React from 'react';

function QRGenerator() {
  const baseUrl = window.location.origin;
  
  const zones = [
    { id: 'entrance', name: 'Hotel Entrance', emoji: '🏨' },
    { id: 'checkin', name: 'Check-in Kiosk', emoji: '✅' },
    { id: 'elevator', name: 'Elevator', emoji: '🛗' },
    { id: 'room', name: 'Room 1337', emoji: '🚪' }
  ];

  const generateQRUrl = (zone) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${baseUrl}?zone=${zone}`)}`;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>QR Codes for Demo</h2>
      <p>Print these QR codes and place them at different locations for the MWC demo</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        {zones.map(zone => (
          <div key={zone.id} style={{ 
            border: '2px solid #ddd', 
            padding: '15px', 
            textAlign: 'center',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3>{zone.emoji} {zone.name}</h3>
            <img 
              src={generateQRUrl(zone.id)} 
              alt={`QR Code for ${zone.name}`}
              style={{ width: '200px', height: '200px', margin: '10px 0' }}
            />
            <p style={{ fontSize: '12px', color: '#666', wordBreak: 'break-all' }}>
              {baseUrl}?zone={zone.id}
            </p>
            <button 
              onClick={() => window.open(generateQRUrl(zone.id), '_blank')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Download QR
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '8px' }}>
        <h3>📱 How to Use:</h3>
        <ol style={{ textAlign: 'left' }}>
          <li>User opens app on mobile and verifies phone number</li>
          <li>Phone number is saved in browser</li>
          <li>User scans QR code at any location</li>
          <li>App automatically detects zone and triggers actions</li>
          <li>Big screen shows real-time updates</li>
        </ol>
      </div>
    </div>
  );
}

export default QRGenerator;
