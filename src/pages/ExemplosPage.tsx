import { useState } from 'react';
import PageShell from '../components/PageShell';
import HotspotButton from '../components/HotspotButton';
import HotspotPanel from '../components/HotspotPanel';
import SpeakButton from '../components/SpeakButton';

function ExampleBlock({ title, sub, children, panelKey }: {
  title: string;
  sub: string;
  children: React.ReactNode;
  panelKey: string | null;
}) {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: '20px', padding: '1.25rem', marginBottom: '1rem' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', lineHeight: 1.2, marginTop: 0, marginBottom: '0.3rem' }}>{title}</h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginTop: 0, marginBottom: '1.25rem' }}>{sub}</p>
      <div className="example-grid">
        {children}
        <HotspotPanel activeKey={panelKey} />
      </div>
    </div>
  );
}

export default function ExemplosPage() {
  const [ex1Hotspot, setEx1Hotspot] = useState<string | null>(null);
  const [ex2Hotspot, setEx2Hotspot] = useState<string | null>(null);

  return (
    <PageShell title="Exemplos reais, explicados" subtitle="Toque nos números vermelhos e descubra o que cada detalhe revela.">
      <div className="interaction-guide">
        <strong>Como usar:</strong>
        <span>toque em cada círculo numerado sobre a mensagem. Depois, leia ou ouça a explicação que aparecerá ao lado.</span>
        <SpeakButton
          text="Como usar. Toque em cada círculo numerado sobre a mensagem. Depois, leia ou ouça a explicação que aparecerá ao lado."
          label="Ouvir instruções"
        />
      </div>

      <ExampleBlock
        title="📧 Exemplo 1 — E-mail"
        sub="Mensagem recebida de um remetente que finge ser um banco."
        panelKey={ex1Hotspot}
      >
        <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '1.1rem', border: '1px solid var(--line)', position: 'relative', minHeight: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--ink-soft)', fontWeight: 700, marginBottom: '0.75rem', padding: '0.5rem 0.75rem', background: 'var(--surface)', borderRadius: '8px' }}>
            <span>De:</span> <span style={{ color: 'var(--alert)' }}>seguranca@bancoseguro-alerta.net</span>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink)', marginTop: 0, marginBottom: 0, position: 'relative', paddingBottom: '0.5rem' }}>
            ATENÇÃO: identificamos uma atividade suspeita em sua conta. Para evitar o bloqueio, confirme seus dados imediatamente.
            <HotspotButton num={1} top="30%" left="14%" hotspotKey="ex1-1" label="Ponto 1: urgência"     active={ex1Hotspot === 'ex1-1'} onPress={setEx1Hotspot} />
            <HotspotButton num={2} top="75%" left="72%" hotspotKey="ex1-2" label="Ponto 2: pedido de dados" active={ex1Hotspot === 'ex1-2'} onPress={setEx1Hotspot} />
          </p>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="📱 Exemplo 2 — SMS"
        sub="Mensagem de texto sobre uma encomenda."
        panelKey={ex2Hotspot}
      >
        <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '1.1rem', border: '1px solid var(--line)', position: 'relative', minHeight: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--ink-soft)', fontWeight: 700, marginBottom: '0.75rem', padding: '0.5rem 0.75rem', background: 'var(--surface)', borderRadius: '8px' }}>
            <span>De:</span> <span>+55 11 9999-0001</span>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--ink)', marginTop: 0, marginBottom: 0, position: 'relative', paddingBottom: '0.5rem' }}>
            Seu pedido foi taxado. Acesse bit.ly/entr3ga-pgto para realizar o pagamento e evitar a devolução.
            <HotspotButton num={1} top="30%" left="14%" hotspotKey="ex2-1" label="Ponto 1: medo"            active={ex2Hotspot === 'ex2-1'} onPress={setEx2Hotspot} />
            <HotspotButton num={2} top="70%" left="48%" hotspotKey="ex2-2" label="Ponto 2: link encurtado" active={ex2Hotspot === 'ex2-2'} onPress={setEx2Hotspot} />
          </p>
        </div>
      </ExampleBlock>

    </PageShell>
  );
}
