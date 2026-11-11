import { useA11y, FONT_STEPS } from '../hooks/useA11y';

export default function A11yBar() {
  const { fontStep, setFontStep, highContrast, setHighContrast, theme, setTheme } = useA11y();

  return (
    <div style={{ background: 'var(--trust)', color: '#fff', borderBottom: '2px solid var(--trust-dark)', padding: '0.75rem 0' }}>
      <div style={{ maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', padding: '0 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.88rem', fontWeight: 800, opacity: 0.9, flexShrink: 0 }}>Tamanho do texto:</span>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button
            disabled={fontStep === 0}
            onClick={() => setFontStep(Math.max(0, fontStep - 1))}
            aria-label="Diminuir tamanho do texto"
            style={btnStyle(fontStep === 0)}
          >
            A−
          </button>
          <button
            disabled={fontStep === FONT_STEPS.length - 1}
            onClick={() => setFontStep(Math.min(FONT_STEPS.length - 1, fontStep + 1))}
            aria-label="Aumentar tamanho do texto"
            style={{ ...btnStyle(fontStep === FONT_STEPS.length - 1), fontSize: '1.15rem' }}
          >
            A+
          </button>
        </div>
        <button
          aria-pressed={highContrast}
          onClick={() => setHighContrast(!highContrast)}
          style={{
            minHeight: '48px', padding: '0 1.2rem',
            border: `2px solid ${highContrast ? '#fff' : 'rgba(255,255,255,0.5)'}`,
            borderRadius: '10px',
            background: highContrast ? '#fff' : 'rgba(255,255,255,0.15)',
            color: highContrast ? 'var(--trust)' : '#fff',
            fontWeight: 800, fontFamily: 'var(--font-body)', cursor: 'pointer', fontSize: '0.95rem', transition: 'all 0.15s',
          }}
        >
          {highContrast ? '✓ Alto contraste ativo' : 'Alto contraste'}
        </button>
        <button
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{
            minHeight: '48px', padding: '0 1.2rem',
            border: '2px solid rgba(255,255,255,0.5)',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.15)',
            color: '#fff',
            fontWeight: 800, fontFamily: 'var(--font-body)', cursor: 'pointer', fontSize: '0.95rem', transition: 'all 0.15s',
          }}
        >
          {theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        </button>
      </div>
    </div>
  );
}

function btnStyle(disabled: boolean): React.CSSProperties {
  return {
    minHeight: '48px', minWidth: '56px',
    border: '2px solid rgba(255,255,255,0.5)',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    fontWeight: 800,
    fontFamily: 'var(--font-body)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    fontSize: '1rem',
  };
}
