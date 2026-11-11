import PageShell from '../components/PageShell';
import { ALERT_SIGNS } from '../data';

export default function SinaisPage() {
  return (
    <PageShell title="Seis sinais de alerta" subtitle="Se a mensagem tiver um destes sinais, pare antes de continuar." surface wide>
      <div className="signs-grid">
        {ALERT_SIGNS.map((sign, i) => (
          <div key={i} style={{ background: 'var(--alert-bg)', border: '1px solid var(--alert-border)', borderRadius: 'var(--radius)', padding: '1rem 1.1rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }} aria-hidden="true">{sign.icon}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.05rem', lineHeight: 1.2, color: 'var(--alert)', marginTop: 0, marginBottom: '0.5rem' }}>{sign.title}</h2>
            <p style={{ marginTop: 0, marginBottom: 0, color: 'var(--ink)', fontSize: '0.95rem', lineHeight: 1.7 }}>{sign.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.25rem', background: 'var(--card)', border: '2px solid var(--alert)', borderRadius: 'var(--radius)', padding: '1rem 1.1rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--alert)', marginBottom: '0.5rem' }}>⚠️ Regra de ouro</div>
        <p style={{ marginTop: 0, marginBottom: 0, color: 'var(--ink)', fontSize: '0.97rem', lineHeight: 1.7 }}>
          Se uma mensagem pedir <strong>urgência</strong> e <strong>dados pessoais</strong> ao mesmo tempo, é quase certo que é um golpe. Nunca aja com pressa.
        </p>
      </div>
    </PageShell>
  );
}
