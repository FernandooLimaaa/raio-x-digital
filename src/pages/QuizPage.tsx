import { useEffect, useRef, useState } from 'react';
import PageShell from '../components/PageShell';
import SpeakButton from '../components/SpeakButton';

type Channel = 'email' | 'whatsapp' | 'sms';

interface Segment {
  text: string;
  trapId?: string;
}

interface Trap {
  id: string;
  label: string;
  explanation: string;
}

interface GameLevel {
  channel: Channel;
  difficulty: string;
  title: string;
  sender: Segment[];
  subject?: string;
  time: string;
  body: Segment[][];
  traps: Trap[];
  hint: string;
}

const LEVELS: GameLevel[] = [
  {
    channel: 'email',
    difficulty: 'Iniciante',
    title: 'Aviso de bloqueio bancário',
    sender: [{ text: 'gerente@banc0-alerta.net', trapId: 'sender' }],
    subject: 'Confirmação obrigatória de conta',
    time: 'Hoje, 09:12',
    body: [
      [{ text: 'Prezado(a) cliente,' }],
      [{ text: 'Identificamos uma atividade incomum em sua conta. ' }, { text: 'Sua conta será bloqueada HOJE se você não agir agora.', trapId: 'urgency' }],
      [{ text: 'Confirme seus dados no endereço abaixo:' }],
      [{ text: 'www.bradesco-confirmacao-urgente.click/seguro', trapId: 'link' }],
      [{ text: 'Atenciosamente, Departamento de Segurança Digital' }],
    ],
    traps: [
      { id: 'sender', label: 'Remetente imitado', explanation: 'O endereço usa o número zero em “banc0” e termina em um domínio que não pertence a um banco real.' },
      { id: 'urgency', label: 'Ameaça e urgência', explanation: 'A mensagem ameaça bloquear a conta hoje para provocar medo e impedir uma verificação cuidadosa.' },
      { id: 'link', label: 'Endereço falso', explanation: 'O endereço usa palavras de confiança, mas termina em “.click” e não é o site oficial do banco.' },
    ],
    hint: 'Neste primeiro nível, as áreas suspeitas aparecem com uma borda tracejada.',
  },
  {
    channel: 'whatsapp',
    difficulty: 'Fácil',
    title: 'Familiar com número novo',
    sender: [{ text: '+55 11 98834-1027', trapId: 'number' }],
    time: '10:34',
    body: [
      [{ text: 'Oi mãe, meu celular quebrou e estou usando este número novo.', trapId: 'story' }],
      [{ text: 'Preciso pagar uma conta ainda agora e meu aplicativo não está funcionando.', trapId: 'pressure' }],
      [{ text: 'Você consegue fazer um Pix de R$ 1.850 para esta chave? Depois eu te devolvo.', trapId: 'pix' }],
      [{ text: 'Não precisa ligar, estou em uma reunião.' }],
    ],
    traps: [
      { id: 'number', label: 'Número desconhecido', explanation: 'A conversa chega de um número que não estava salvo, embora a pessoa diga ser alguém da família.' },
      { id: 'story', label: 'História do celular quebrado', explanation: 'A desculpa do aparelho quebrado é usada para justificar o número novo e evitar comparações com o contato verdadeiro.' },
      { id: 'pressure', label: 'Pressa para pagar', explanation: 'A urgência reduz o tempo para pensar e confirmar a história com o familiar.' },
      { id: 'pix', label: 'Pedido de Pix', explanation: 'Um pedido inesperado de dinheiro para uma chave desconhecida deve ser confirmado por ligação no número antigo.' },
    ],
    hint: 'Agora há quatro pistas. Confirme a identidade antes de acreditar na história.',
  },
  {
    channel: 'sms',
    difficulty: 'Intermediário',
    title: 'Encomenda retida',
    sender: [{ text: 'ENTREGAS' }],
    time: '13:08',
    body: [
      [{ text: 'Sua encomenda foi retida no centro de distribuição.', trapId: 'unexpected' }],
      [{ text: 'Existe uma taxa pendente de apenas R$ 3,97.', trapId: 'fee' }],
      [{ text: 'Regularize até as 18h para evitar a devolução.', trapId: 'deadline' }],
      [{ text: 'Acompanhe: bit.ly/libera-pacote', trapId: 'short-link' }],
    ],
    traps: [
      { id: 'unexpected', label: 'Encomenda inesperada', explanation: 'Antes de agir, pense se realmente existe uma compra aguardada e confira diretamente no aplicativo da loja.' },
      { id: 'fee', label: 'Cobrança pequena', explanation: 'Valores baixos parecem inofensivos, mas podem levar a uma página criada para roubar cartão e dados pessoais.' },
      { id: 'deadline', label: 'Prazo curto', explanation: 'A ameaça de devolução no mesmo dia cria urgência para que você pague sem conferir.' },
      { id: 'short-link', label: 'Link encurtado', explanation: 'Um endereço encurtado esconde o destino real. Não é possível saber para qual site ele levará antes de clicar.' },
    ],
    hint: 'Nem toda armadilha tem erro de português. Observe o contexto, o valor e o endereço.',
  },
  {
    channel: 'email',
    difficulty: 'Avançado',
    title: 'Recadastramento de benefício',
    sender: [{ text: 'beneficios@govbr-seguranca.com', trapId: 'gov-sender' }],
    subject: 'Atualização anual do seu benefício',
    time: 'Ontem, 16:42',
    body: [
      [{ text: 'Olá, Maria Aparecida,' }],
      [{ text: 'Estamos realizando a atualização anual dos cadastros. Para manter o recebimento, ' }, { text: 'confirme seu CPF e sua senha Gov.br.', trapId: 'credentials' }],
      [{ text: 'O procedimento deve ser concluído nas próximas 24 horas.', trapId: 'time-limit' }],
      [{ text: 'Acesse: portal-govbr.info/beneficio', trapId: 'gov-link' }],
      [{ text: 'Equipe de Atendimento ao Cidadão' }],
    ],
    traps: [
      { id: 'gov-sender', label: 'Domínio parecido', explanation: '“govbr-seguranca.com” foi escrito para parecer oficial. Serviços do governo usam endereços terminados em “gov.br”.' },
      { id: 'credentials', label: 'Pedido de senha', explanation: 'Órgãos públicos e empresas sérias não pedem senha completa por e-mail ou mensagem.' },
      { id: 'time-limit', label: 'Prazo inventado', explanation: 'O prazo de 24 horas tenta pressionar mesmo usando uma linguagem educada e aparentemente profissional.' },
      { id: 'gov-link', label: 'Portal falso', explanation: 'O site termina em “.info”, não em “gov.br”. O começo do endereço pode enganar; confira sempre o final.' },
    ],
    hint: 'Este texto usa seu nome e escreve corretamente. Aparência profissional não prova que a mensagem é verdadeira.',
  },
  {
    channel: 'whatsapp',
    difficulty: 'Especialista',
    title: 'Falsa central de segurança',
    sender: [{ text: 'Central de Segurança', trapId: 'contact' }],
    time: '15:27',
    body: [
      [{ text: 'Boa tarde, Maria. Sou Carlos, da equipe antifraude. Identificamos uma compra que parece suspeita.' }],
      [{ text: 'Para cancelar, preciso que você me informe o código de seis números que acabou de receber.', trapId: 'code' }],
      [{ text: 'Não abra o aplicativo do banco durante o atendimento.', trapId: 'isolation' }],
      [{ text: 'Instale o aplicativo “Suporte Seguro” para eu proteger seu aparelho.', trapId: 'remote-app' }],
      [{ text: 'O atendimento precisa ser finalizado agora para evitar a cobrança.', trapId: 'rush' }],
    ],
    traps: [
      { id: 'contact', label: 'Contato não solicitado', explanation: 'O nome “Central de Segurança” pode ser escolhido por qualquer pessoa. Ele não comprova que o número pertence ao banco.' },
      { id: 'code', label: 'Pedido de código', explanation: 'O código recebido por SMS é uma chave de segurança. Quem pede esse código pode estar tentando entrar na sua conta.' },
      { id: 'isolation', label: 'Tentativa de isolar você', explanation: 'O golpista pede que você não abra o aplicativo porque não quer que confira a informação pelo canal oficial.' },
      { id: 'remote-app', label: 'Aplicativo de acesso remoto', explanation: 'Bancos não pedem a instalação de aplicativos para controlar ou “proteger” seu aparelho durante uma conversa.' },
      { id: 'rush', label: 'Atendimento com pressão', explanation: 'Uma central verdadeira permite que você desligue e procure o banco pelo telefone oficial.' },
    ],
    hint: 'A pessoa conhece seu nome e parece prestativa. Mesmo assim, nunca entregue códigos nem instale aplicativos por orientação de uma mensagem.',
  },
  {
    channel: 'sms',
    difficulty: 'Desafio final',
    title: 'Alerta de compra e falsa central',
    sender: [{ text: 'BANCO-ALERTA' }],
    time: '18:51',
    body: [
      [{ text: 'Compra de R$ 4.980 aprovada no cartão final 4021.' }],
      [{ text: 'Caso não reconheça, ligue imediatamente para 0800 018 7712.', trapId: 'fake-phone' }],
      [{ text: 'Tenha cartão, senha e documento em mãos para confirmar o cancelamento.', trapId: 'secrets' }],
      [{ text: 'Não acesse o aplicativo até o fim do atendimento.', trapId: 'dont-check' }],
      [{ text: 'O código enviado por SMS será solicitado pelo atendente.', trapId: 'sms-code' }],
    ],
    traps: [
      { id: 'fake-phone', label: 'Telefone recebido por mensagem', explanation: 'Mesmo um número com 0800 pode ser controlado por golpistas. Use o telefone impresso no cartão ou encontrado no aplicativo oficial.' },
      { id: 'secrets', label: 'Senha solicitada', explanation: 'Nenhum atendente precisa da sua senha para cancelar uma compra. Senha é pessoal e não deve ser informada.' },
      { id: 'dont-check', label: 'Proibição de conferir', explanation: 'Pedir que você não acesse o aplicativo impede a verificação por um canal confiável.' },
      { id: 'sms-code', label: 'Código de segurança', explanation: 'O código serve para autorizar acessos e transações. Um atendente verdadeiro não solicita esse número.' },
    ],
    hint: 'No desafio final, algumas frases parecem um alerta verdadeiro. O perigo está nas instruções dadas depois.',
  },
];

const CHANNEL_LABELS: Record<Channel, string> = {
  email: 'E-mail',
  whatsapp: 'WhatsApp',
  sms: 'SMS',
};

export default function QuizPage() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [found, setFound] = useState<Set<string>>(new Set());
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const [wrongMsg, setWrongMsg] = useState(false);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const level = LEVELS[levelIndex];
  const done = found.size === level.traps.length;
  const finalLevel = levelIndex === LEVELS.length - 1;
  const activeTrap = level.traps.find(trap => trap.id === activeTip);

  useEffect(() => {
    return () => {
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
    };
  }, []);

  useEffect(() => {
    if ((activeTip || wrongMsg) && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeTip, wrongMsg]);

  function selectTrap(id: string) {
    if (wrongTimer.current) clearTimeout(wrongTimer.current);
    setWrongMsg(false);
    setFound(current => new Set(current).add(id));
    setActiveTip(id);
  }

  function selectNormal() {
    if (wrongTimer.current) clearTimeout(wrongTimer.current);
    setActiveTip(null);
    setWrongMsg(true);
    wrongTimer.current = setTimeout(() => setWrongMsg(false), 3500);
  }

  function resetLevel(nextLevel = levelIndex) {
    setLevelIndex(nextLevel);
    setFound(new Set());
    setActiveTip(null);
    setWrongMsg(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function SegmentButton({ segment }: { segment: Segment }) {
    const isTrap = Boolean(segment.trapId);
    const isFound = segment.trapId ? found.has(segment.trapId) : false;
    const assistance = levelIndex === 0 ? 'strong-hint' : levelIndex === 1 ? 'soft-hint' : 'no-hint';

    return (
      <button
        type="button"
        onClick={() => segment.trapId ? selectTrap(segment.trapId) : selectNormal()}
        aria-pressed={isTrap ? isFound : undefined}
        className={`message-segment ${isTrap ? `trap-segment ${assistance}` : 'normal-segment'}${isFound ? ' found' : ''}`}
      >
        {segment.text}
      </button>
    );
  }

  return (
    <PageShell
      title="Caça-Armadilhas"
      subtitle="Passe por seis níveis. As mensagens ficam mais convincentes e as pistas menos óbvias a cada etapa."
      wide
    >
      <div className="level-track" aria-label={`Nível ${levelIndex + 1} de ${LEVELS.length}`}>
        {LEVELS.map((item, index) => (
          <div
            key={`${item.channel}-${index}`}
            className={`level-dot${index === levelIndex ? ' current' : ''}${index < levelIndex ? ' completed' : ''}`}
          >
            <span>{index + 1}</span>
            <small>{CHANNEL_LABELS[item.channel]}</small>
          </div>
        ))}
      </div>

      <div className="level-heading">
        <div>
          <span className="level-kicker">Nível {levelIndex + 1} de {LEVELS.length} · {level.difficulty}</span>
          <h2>{level.title}</h2>
          <p>{level.hint}</p>
          <SpeakButton
            text={`Nível ${levelIndex + 1}, ${level.difficulty}. ${level.title}. ${level.hint} Toque nas partes da mensagem que parecem suspeitas.`}
            label="Ouvir instruções"
          />
        </div>
        <div className="trap-counter" aria-live="polite">
          <strong>{found.size}/{level.traps.length}</strong>
          <span>armadilhas encontradas</span>
        </div>
      </div>

      <div className={`message-stage ${level.channel}`}>
        <div className="message-stage-top">
          <span>{CHANNEL_LABELS[level.channel]}</span>
          <span>{level.time}</span>
        </div>

        <div className="message-meta">
          <span>{level.channel === 'email' ? 'De:' : 'Conversa com:'}</span>
          <div>{level.sender.map((segment, index) => <SegmentButton key={index} segment={segment} />)}</div>
          {level.subject && (
            <>
              <span>Assunto:</span>
              <strong>{level.subject}</strong>
            </>
          )}
        </div>

        <div className="message-body">
          {level.body.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>
              {paragraph.map((segment, segmentIndex) => <SegmentButton key={segmentIndex} segment={segment} />)}
            </p>
          ))}
        </div>
      </div>

      <div className="trap-badges">
        {level.traps.map(trap => (
          <div key={trap.id} className={found.has(trap.id) ? 'found' : ''}>
            <span aria-hidden="true">{found.has(trap.id) ? '✓' : '?'}</span>
            {found.has(trap.id) ? trap.label : 'Armadilha escondida'}
          </div>
        ))}
      </div>

      <div ref={feedbackRef} className="quiz-feedback" aria-live="polite">
        {wrongMsg && (
          <div className="feedback-card neutral">
            <strong>Essa parte pode ser verdadeira.</strong>
            <span>Continue procurando. Observe pedidos de dinheiro ou dados, pressão, links, remetentes e instruções para não conferir.</span>
          </div>
        )}

        {activeTrap && !done && (
          <div className="feedback-card success">
            <strong>Armadilha encontrada: {activeTrap.label}</strong>
            <span>{activeTrap.explanation}</span>
            <SpeakButton
              text={`Armadilha encontrada: ${activeTrap.label}. ${activeTrap.explanation}`}
              label="Ouvir explicação"
            />
          </div>
        )}
      </div>

      {done && (
        <div className="level-complete">
          <span className="level-kicker">{finalLevel ? 'Treinamento concluído' : `Nível ${levelIndex + 1} concluído`}</span>
          <h2>{finalLevel ? 'Você concluiu todos os desafios' : 'Muito bem. A próxima mensagem será mais difícil.'}</h2>
          <div className="completed-lessons">
            {level.traps.map(trap => (
              <article key={trap.id}>
                <strong>{trap.label}</strong>
                <span>{trap.explanation}</span>
              </article>
            ))}
          </div>
          <p>
            {finalLevel
              ? 'Você praticou com e-mails, conversas de WhatsApp e SMS. Na vida real, pare, confira pelo canal oficial e peça ajuda antes de agir.'
              : `No próximo nível você analisará uma mensagem de ${CHANNEL_LABELS[LEVELS[levelIndex + 1].channel]}.`}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => resetLevel(finalLevel ? 0 : levelIndex + 1)}
          >
            {finalLevel ? 'Recomeçar treinamento' : 'Ir para o próximo nível'}
          </button>
        </div>
      )}
    </PageShell>
  );
}
