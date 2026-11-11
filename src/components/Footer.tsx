export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', color: 'var(--ink-soft)', padding: '3rem 0 2.25rem' }}>
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.95rem', color: 'var(--ink)', marginTop: 0, marginBottom: '0.75rem' }}>Sobre este material</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.75, marginTop: 0, marginBottom: 0 }}>
              Este site faz parte de um projeto de extensão sobre segurança digital para o público idoso, com foco em phishing por e-mail e SMS. Segue diretrizes de acessibilidade: fontes grandes e ajustáveis, alto contraste, navegação simples e linguagem sem jargões técnicos.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.95rem', color: 'var(--ink)', marginTop: 0, marginBottom: '0.75rem' }}>Referências</h3>
            <ul style={{ marginTop: 0, marginBottom: 0, paddingLeft: '1.1rem', fontSize: '0.82rem', color: 'var(--ink-soft)', lineHeight: 1.8 }}>
              <li>Ministério das Comunicações — Ataque phishing, 2026.</li>
              <li>CERT.br — Cartilha de Segurança para Internet.</li>
              <li>CERT.br — Golpes: caiu? Veja o que fazer.</li>
              <li>IBGE — Proporção de usuários da internet, 2026.</li>
              <li>NIC.br — Segurança na internet e prevenção de golpes.</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
          Projeto de Extensão — Combate ao Phishing para Idosos · Raio-X do Golpe
        </div>
      </div>
    </footer>
  );
}
