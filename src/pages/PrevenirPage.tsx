import PageShell from '../components/PageShell';
import SpeakButton from '../components/SpeakButton';
import { PREVENTION_RULES } from '../data';

export default function PrevenirPage() {
  return (
    <PageShell title="Como se prevenir" subtitle="Cinco hábitos simples que já bloqueiam a maioria dos golpes.">
      <div className="rules-grid">
        {PREVENTION_RULES.map((rule, i) => (
          <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem' }}>
            <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }} aria-hidden="true">
              {rule.icon}
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.05rem', lineHeight: 1.25, marginTop: 0, marginBottom: '0.35rem' }}>{rule.title}</h2>
              <p style={{ marginTop: 0, marginBottom: 0, color: 'var(--ink-soft)', fontSize: '0.97rem', lineHeight: 1.7 }}>{rule.desc}</p>
              <SpeakButton text={`${rule.title}. ${rule.desc}`} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.25rem', background: 'var(--trust-light)', border: '1px solid var(--trust)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--trust-dark)', marginBottom: '0.5rem' }}>💡 Lembre-se sempre</div>
        <p style={{ marginTop: 0, marginBottom: 0, color: 'var(--ink)', fontSize: '0.97rem', lineHeight: 1.7 }}>
          Golpistas profissionais criam mensagens muito convincentes. Não tem vergonha nenhuma em parar, respirar e pedir ajuda para alguém de confiança antes de agir.
        </p>
        <SpeakButton text="Lembre-se sempre. Golpistas profissionais criam mensagens muito convincentes. Não tem vergonha nenhuma em parar, respirar e pedir ajuda para alguém de confiança antes de agir." />
      </div>
    </PageShell>
  );
}
