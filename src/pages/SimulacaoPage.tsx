import { useState } from 'react';
import PageShell from '../components/PageShell';
import SpeakButton from '../components/SpeakButton';

const TRAPS = [
  { label: 'Sem cadeado de segurança', desc: 'Ao lado do endereço não há o ícone de cadeado — sites falsos raramente confirmam a conexão segura.' },
  { label: 'Endereço incorreto', desc: '"bancoseguro-login.net" não é o site oficial do seu banco. O endereço verdadeiro você encontra no cartão ou no aplicativo.' },
  { label: 'Saudação genérica', desc: '"Olá, Cliente" em vez do seu nome verdadeiro. O banco de fato usaria seu nome completo.' },
];

export default function SimulacaoPage() {
  const [pitfallsOpen, setPitfallsOpen] = useState(false);

  return (
    <PageShell title="O que acontece se eu clicar?" subtitle="Esta é a página falsa que um golpista pode criar. Veja onde estão as armadilhas.">
      <div className="simulation-safe-intro" role="note">
        <strong>Esta simulação é 100% segura.</strong>
        <span>Nenhum dado será enviado ou armazenado. A página abaixo é apenas um exercício, e você pode explorar sem medo de errar.</span>
        <SpeakButton
          text="Esta simulação é cem por cento segura. Nenhum dado será enviado ou armazenado. A página abaixo é apenas um exercício, e você pode explorar sem medo de errar."
          label="Ouvir aviso de segurança"
        />
      </div>

      {/* Browser mockup */}
      <div style={{ background: 'var(--card)', borderRadius: '12px', border: '1px solid var(--line)', overflow: 'hidden', boxShadow: '0 4px 16px rgba(15,28,34,0.07)', marginBottom: '1.25rem' }}>
        {/* Chrome bar */}
        <div style={{ background: '#E7EDEC', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
            {[0, 1, 2].map(i => <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: '#C5CBCA', display: 'block' }} />)}
          </div>
          <div style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '7px 12px', fontSize: '13px', color: 'var(--alert)', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            ⚠️ bancoseguro-login.net/acesso
          </div>
        </div>

        {/* Fake login form */}
        <div style={{ padding: '1.5rem 1.5rem', background: 'var(--bg)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', lineHeight: 1.2, marginTop: 0, marginBottom: '1.1rem', color: 'var(--ink)' }}>Olá, Cliente. Acesse sua conta.</h2>
          {['CPF', 'Senha'].map(field => (
            <div key={field} style={{ background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '8px', padding: '0.8rem 1rem', marginBottom: '0.65rem', fontSize: '0.95rem', color: 'var(--ink-soft)' }}>{field}</div>
          ))}
          <button disabled className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Entrar</button>
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setPitfallsOpen(o => !o)}
        aria-expanded={pitfallsOpen}
        className="btn btn-outline"
        style={{ marginBottom: '1.25rem' }}
      >
        {pitfallsOpen ? '🙈 Ocultar as armadilhas' : '👁️ Mostrar as armadilhas'}
      </button>

      {/* Pitfalls list */}
      {pitfallsOpen && (
        <div style={{ background: 'var(--alert-bg)', border: '1px solid var(--alert-border)', borderRadius: '12px', padding: '1.1rem 1.25rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--alert)', marginBottom: '1rem' }}>🚨 Veja o que está errado:</div>
          <SpeakButton
            text={TRAPS.map(trap => `${trap.label}. ${trap.desc}`).join(' ')}
            label="Ouvir todas as explicações"
          />
          <div className="sim-pitfall-list">
            {TRAPS.map((trap, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%', background: 'var(--alert)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.88rem', fontWeight: 900, marginTop: '2px' }}>{i + 1}</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.2rem' }}>{trap.label}</strong>
                  <span style={{ fontSize: '0.92rem', color: 'var(--ink)', lineHeight: 1.65 }}>{trap.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
