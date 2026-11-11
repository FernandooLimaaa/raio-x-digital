import { HOTSPOT_DATA } from '../data';
import SpeakButton from './SpeakButton';

interface Props {
  activeKey: string | null;
}

export default function HotspotPanel({ activeKey }: Props) {
  const data = activeKey ? HOTSPOT_DATA[activeKey] : null;

  return (
    <div
      role="region"
      aria-live="polite"
      style={{
        background: data ? 'var(--alert-bg)' : 'var(--card)',
        border: `2px solid ${data ? 'var(--alert)' : 'var(--line)'}`,
        borderRadius: 'var(--radius)',
        padding: '1.2rem 1.4rem',
        minHeight: '110px',
        transition: 'all 0.2s',
      }}
    >
      {data ? (
        <>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--alert)', marginBottom: '0.5rem' }}>
            {data.title}
          </div>
          <div style={{ color: 'var(--ink)', fontSize: '0.95rem', lineHeight: 1.7 }}>{data.text}</div>
          <SpeakButton text={`${data.title}. ${data.text}`} label="Ouvir explicação" />
        </>
      ) : (
        <div style={{ color: 'var(--ink-soft)', fontSize: '0.95rem' }}>
          👆 Toque nos números vermelhos da mensagem para descobrir o que denuncia o golpe.
        </div>
      )}
    </div>
  );
}
