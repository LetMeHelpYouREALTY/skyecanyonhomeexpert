import { ImageResponse } from 'next/og'

export const alt = 'Skye Canyon Home Expert — Las Vegas homeowner resource hub'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f2744 0%, #1e4a8a 50%, #2563eb 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          padding: 48,
        }}
      >
        <div style={{ fontSize: 28, color: '#f5c542', marginBottom: 16, letterSpacing: 2 }}>
          SKYE CANYON
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, textAlign: 'center', lineHeight: 1.1 }}>
          Home Expert
        </div>
        <div style={{ fontSize: 28, marginTop: 24, opacity: 0.9, textAlign: 'center' }}>
          Homeowner guides &amp; community resources · Las Vegas, NV
        </div>
        <div style={{ fontSize: 22, marginTop: 32, color: '#f5c542' }}>Dr. Jan Duffy, REALTOR</div>
      </div>
    ),
    { ...size }
  )
}
