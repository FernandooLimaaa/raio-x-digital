import PageShell from '../components/PageShell';
import { TEAM_MEMBERS } from '../data';

export default function EquipePage() {
  return (
    <PageShell title="Quem fez este projeto" subtitle="Projeto de extensão sobre prevenção de phishing para o público idoso." surface wide>
      <div className="team-grid">
        {TEAM_MEMBERS.map((member, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '1rem 1.1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div
              style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', background: 'var(--trust)', color: '#fff', fontWeight: 900, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)' }}
              aria-hidden="true"
            >
              {member.initials}
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', lineHeight: 1.2, marginTop: 0, marginBottom: '0.25rem' }}>{member.name}</h2>
              <div style={{ color: 'var(--trust-dark)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{member.role}</div>
              <p style={{ marginTop: 0, marginBottom: 0, color: 'var(--ink-soft)', fontSize: '0.88rem', lineHeight: 1.65 }}>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
