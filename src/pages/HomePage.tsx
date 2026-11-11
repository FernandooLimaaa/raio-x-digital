import { useState } from 'react';
import { Link } from 'react-router';
import HotspotButton from '../components/HotspotButton';
import HotspotPanel from '../components/HotspotPanel';
import phishingVideo from '../imports/entenda-o-phishing.mp4';

export default function HomePage() {
  const [heroHotspot, setHeroHotspot] = useState<string | null>(null);

  return (
    <>
      <section className="hero-section">
        <div className="container-xl">
          <div className="hero-grid">

            {/* ── Left: copy ── */}
            <div>
              <div className="hero-badge">
                🛡️ Educação digital para pessoas idosas
              </div>

              <h1 className="hero-heading">
                Antes de clicar,<br />olhe com atenção.
              </h1>

              <p className="hero-body">
                O Raio-X do Golpe ensina a reconhecer mensagens falsas de e-mail e SMS. Sem termos técnicos, com exemplos reais e no seu ritmo.
              </p>

              <div className="hero-persona-card">
                💬 Pensado para pessoas como <strong>Maria Aparecida, 67 anos</strong>, que usa o celular para falar com a família, pagar contas e fazer compras — e quer fazer isso com mais segurança.
              </div>

              <div className="hero-actions">
                <Link to="/exemplos" className="btn btn-primary">🔎 Ver um golpe de perto</Link>
                <Link to="/quiz" className="btn hero-outline-btn">🧠 Testar meu olho</Link>
              </div>

              <div className="quicklinks-grid quicklinks-dark">
                {[
                  { to: '/prevenir',  icon: '🛡️', label: 'Como se prevenir' },
                  { to: '/sinais',    icon: '🚨', label: 'Sinais de alerta' },
                  { to: '/simulacao', icon: '🖥️', label: 'Simulação' },
                  { to: '/equipe',    icon: '👥', label: 'Nossa equipe' },
                ].map(item => (
                  <Link key={item.to} to={item.to} className="quicklink-item">
                    <span aria-hidden="true">{item.icon}</span>{item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Right: exam panel with phone mockup ── */}
            <div className="hero-right-panel">
              <div className="hero-exam-label">
                EXAME DA MENSAGEM — 3 sinais encontrados
              </div>

              <div
                style={{ width: 'min(300px, 100%)', marginLeft: 'auto', marginRight: 'auto', background: '#1A1A1A', borderRadius: '32px', padding: '12px', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}
                aria-label="Exemplo de mensagem de golpe"
              >
                <div style={{ background: '#F2F5F4', borderRadius: '22px', overflow: 'hidden' }}>
                  <div style={{ background: '#1A1A1A', color: '#fff', fontSize: '12px', padding: '7px 16px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>9:41</span><span>SMS</span>
                  </div>
                  <div style={{ background: '#fff', padding: '10px 14px', borderBottom: '1px solid #E2E8E7', fontSize: '12.5px', color: '#475569', fontWeight: 700 }}>
                    Mensagem de: "Banco Seguro"
                  </div>
                  <div style={{ padding: '18px 14px 24px' }}>
                    <div style={{ background: '#E8EDED', borderRadius: '16px', padding: '14px 36px 14px 14px', fontSize: '14px', lineHeight: 1.65, color: '#0B1221', position: 'relative' }}>
                      Detectamos uma movimentação suspeita em sua conta. Clique aqui agora: bancoseguro-verifica.com para não perder o acesso.
                      <HotspotButton num={1} top="16%" left="12%" hotspotKey="hero-1" label="Ponto 1: urgência"       active={heroHotspot === 'hero-1'} onPress={setHeroHotspot} />
                      <HotspotButton num={2} top="76%" left="58%" hotspotKey="hero-2" label="Ponto 2: link estranho" active={heroHotspot === 'hero-2'} onPress={setHeroHotspot} />
                      <HotspotButton num={3} top="16%" left="86%" hotspotKey="hero-3" label="Ponto 3: sem nome"      active={heroHotspot === 'hero-3'} onPress={setHeroHotspot} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-warning-panel">
                <span aria-hidden="true" style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠️</span>
                <span>Toque nos números para descobrir o que denuncia o golpe em cada parte da mensagem.</span>
              </div>

              {heroHotspot && (
                <div style={{ width: '100%' }}>
                  <HotspotPanel activeKey={heroHotspot} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="home-learning" aria-labelledby="entenda-phishing">
        <div className="container-wide">
          <div className="home-section-heading">
            <span className="home-eyebrow">Comece por aqui</span>
            <h2 id="entenda-phishing">Entenda o que é phishing</h2>
            <p>Leia com calma ou assista ao vídeo. Você não precisa decorar termos: o importante é aprender a reconhecer a armadilha.</p>
          </div>

          <div className="video-learning-card">
            <div className="video-copy">
              <span className="step-label">Explicação em vídeo</span>
              <h3>Veja como o golpe tenta enganar você</h3>
              <p>Use os controles para pausar, voltar e assistir novamente quantas vezes quiser.</p>
            </div>
            <video className="phishing-video" controls playsInline preload="metadata">
              <source src={phishingVideo} type="video/mp4" />
              Seu navegador não conseguiu reproduzir o vídeo.
            </video>
          </div>

          <div className="definition-grid">
            <article className="learning-card learning-card-featured">
              <span className="step-label">Por e-mail</span>
              <h3>Phishing</h3>
              <p>É uma mensagem falsa que imita um banco, órgão público, loja ou empresa conhecida.</p>
              <p>O criminoso tenta fazer você clicar em um link falso, informar dados pessoais, entregar senhas ou instalar um programa perigoso.</p>
            </article>
            <article className="learning-card">
              <span className="step-label">Por celular</span>
              <h3>Smishing</h3>
              <p>É o mesmo tipo de golpe enviado por SMS ou por aplicativos de mensagens.</p>
              <p>Na tela pequena, remetentes e endereços ficam mais difíceis de conferir. Por isso, mensagens curtas também exigem atenção.</p>
            </article>
            <article className="learning-card">
              <span className="step-label">A técnica por trás do golpe</span>
              <h3>Engenharia social</h3>
              <p>É a manipulação psicológica usada para convencer uma pessoa a fazer algo que normalmente não faria.</p>
              <p>O golpe ataca a sua decisão, não o aparelho. Cair em uma armadilha não significa falta de inteligência.</p>
            </article>
          </div>

          <div className="plain-language-callout">
            <strong>Em palavras simples:</strong>
            <span>o golpista finge ser alguém confiável, inventa um problema e tenta impedir que você tenha tempo para pensar.</span>
          </div>

          <div className="home-topic">
            <div className="home-section-heading compact">
              <span className="home-eyebrow">Como a armadilha funciona</span>
              <h2>O golpe costuma seguir quatro passos</h2>
            </div>
            <ol className="process-grid">
              <li><strong>1. Imita alguém conhecido</strong><span>Banco, INSS, loja, transportadora ou central de atendimento.</span></li>
              <li><strong>2. Inventa um problema</strong><span>Compra suspeita, benefício bloqueado ou encomenda retida.</span></li>
              <li><strong>3. Cria medo e pressa</strong><span>“Resolva agora”, “última chance” ou “sua conta será bloqueada”.</span></li>
              <li><strong>4. Pede uma ação perigosa</strong><span>Clicar, pagar, responder, instalar algo ou fornecer dados e códigos.</span></li>
            </ol>
          </div>

          <div className="home-topic">
            <div className="home-section-heading compact">
              <span className="home-eyebrow">O que mexe com nossas emoções</span>
              <h2>Os golpistas usam gatilhos para apressar decisões</h2>
            </div>
            <div className="trigger-grid">
              <article><h3>Autoridade</h3><p>Fingem falar em nome de um banco, empresa ou órgão público.</p></article>
              <article><h3>Medo</h3><p>Ameaçam bloquear uma conta, cartão, benefício ou acesso.</p></article>
              <article><h3>Urgência</h3><p>Dizem que você tem poucos minutos para resolver.</p></article>
              <article><h3>Recompensa</h3><p>Prometem prêmio, desconto ou dinheiro inesperado.</p></article>
              <article><h3>Simpatia</h3><p>Agem como uma central de ajuda para ganhar sua confiança.</p></article>
              <article><h3>Preocupação</h3><p>Usam histórias sobre filhos, netos ou familiares em dificuldade.</p></article>
            </div>
          </div>

          <div className="home-topic stats-topic">
            <div className="home-section-heading compact">
              <span className="home-eyebrow">Por que falar sobre isso</span>
              <h2>Os golpes digitais atingem muitas pessoas idosas</h2>
            </div>
            <div className="stats-grid">
              <article><strong>82%</strong><span>dos idosos pesquisados em São Paulo já foram alvo de tentativas de golpes virtuais.</span></article>
              <article><strong>68%</strong><span>disseram sentir vulnerabilidade no ambiente digital.</span></article>
              <article><strong>81%</strong><span>dos usuários com 60 anos ou mais acessam a internet somente pelo celular.</span></article>
              <article><strong>23%</strong><span>dos idosos de um estudo disseram sempre conferir o remetente do e-mail.</span></article>
            </div>
            <p className="source-note">Dados reunidos no documento do projeto a partir da Fundação Seade, TIC Domicílios e estudos acadêmicos citados no material.</p>
          </div>

          <div className="home-topic safety-panel">
            <div className="home-section-heading compact">
              <span className="home-eyebrow">Sua regra de segurança</span>
              <h2>Recebeu uma mensagem suspeita? Pare antes de agir.</h2>
            </div>
            <div className="safety-steps">
              <article><strong>Não clique</strong><span>Não abra o link recebido, mesmo que a mensagem pareça verdadeira.</span></article>
              <article><strong>Não informe dados</strong><span>Não envie senha, CPF, número do cartão ou código recebido por SMS.</span></article>
              <article><strong>Confira por outro caminho</strong><span>Abra o aplicativo oficial ou use o telefone que está no cartão.</span></article>
              <article><strong>Converse com alguém</strong><span>Na dúvida, mostre a mensagem a uma pessoa de confiança.</span></article>
            </div>
            <div className="safety-reminder">Uma empresa séria não precisa que você decida sob pressão. Você pode parar, conferir e pedir ajuda.</div>
          </div>

          <div className="practice-card">
            <div>
              <span className="home-eyebrow">Aprenda praticando</span>
              <h2>Treine sem risco no Caça-Armadilhas</h2>
              <p>Encontre remetentes estranhos, frases de urgência e links falsos em uma mensagem simulada. Você pode errar, tentar novamente e aprender no seu ritmo.</p>
            </div>
            <Link to="/quiz" className="btn btn-primary">Começar o treinamento</Link>
          </div>
        </div>
      </section>
    </>
  );
}
