export const FONT_STEPS = [20, 23, 26, 30];

export const HOTSPOT_DATA: Record<string, { title: string; text: string }> = {
  'hero-1': { title: '⚠️ Urgência', text: 'A frase "clique aqui agora" tenta te apressar antes que você pare para pensar. Golpistas usam o medo para que você aja sem raciocinar.' },
  'hero-2': { title: '🔗 Link estranho', text: '"bancoseguro-verifica.com" não é o endereço oficial de nenhum banco real — é um nome criado apenas para parecer confiável.' },
  'hero-3': { title: '👤 Sem o seu nome', text: 'Um banco de verdade te chamaria pelo seu nome completo. Mensagens genéricas como "Cliente" são um forte sinal de golpe.' },
  'ex1-1': { title: '⚠️ Caixa alta e urgência', text: '"ATENÇÃO" em letras maiúsculas e o aviso de bloqueio são usados para causar medo e pressa. Isso é uma tática de manipulação.' },
  'ex1-2': { title: '🔓 Pedido de dados', text: '"Confirme seus dados imediatamente" — nenhuma empresa séria faz esse pedido por e-mail ou mensagem.' },
  'ex2-1': { title: '📦 Medo de perder algo', text: '"Seu pedido foi taxado" cria a sensação de que você vai perder a encomenda se não agir rapidamente. É uma armadilha.' },
  'ex2-2': { title: '🔗 Link encurtado', text: 'Links como "bit.ly/..." escondem o endereço verdadeiro — você não sabe para onde está indo até clicar.' },
};

export const QUIZ_ITEMS = [
  { text: 'Seu banco identificou uma movimentação suspeita. Clique no link abaixo para cancelar.', isScam: true, explanation: 'É golpe: cria urgência sobre dinheiro e pede que você clique em um link em vez de verificar direto no aplicativo do banco.' },
  { text: 'Detectamos uma compra suspeita em seu cartão. Clique para cancelar.', isScam: true, explanation: 'É golpe: mensagens sobre compras que você não fez, com um link para "cancelar", são uma isca muito comum.' },
  { text: 'Oi mãe, aqui é a Camila. Podemos almoçar sábado ao meio-dia?', isScam: false, explanation: 'Não é golpe: é uma mensagem pessoal, sem links, sem urgência e sem pedido de dados ou pagamento.' },
  { text: 'Sua conta será bloqueada. Atualize seus dados através do link.', isScam: true, explanation: 'É golpe: ameaça de bloqueio combinada com pedido de dados pessoais por link é um padrão clássico de phishing.' },
  { text: 'Parabéns! Você ganhou um prêmio de R$ 5.000. Clique agora para receber.', isScam: true, explanation: 'É golpe: prêmios inesperados que exigem clique imediato são uma promessa boa demais para ser verdade.' },
];

export const PREVENTION_RULES = [
  { icon: '⏸', title: 'Desacelere diante da urgência', desc: 'Se a mensagem exige uma resposta imediata, é hora de desconfiar, não de correr.' },
  { icon: '🔒', title: 'Nunca compartilhe senha ou código', desc: 'Nenhum banco ou empresa séria pede sua senha, seu código de SMS ou os números do seu cartão por mensagem.' },
  { icon: '📞', title: 'Confirme pelo canal oficial', desc: 'Em vez de usar o link recebido, abra o aplicativo do banco ou ligue para o número que está no cartão.' },
  { icon: '🔗', title: 'Repare no link antes de tocar', desc: 'Endereços estranhos, com letras ou palavras fora do comum, são um forte sinal de golpe.' },
  { icon: '🤝', title: 'Peça a opinião de alguém de confiança', desc: 'Na dúvida, mostre a mensagem para um filho, neto ou pessoa de confiança antes de agir.' },
];

export const ALERT_SIGNS = [
  { icon: '🚨', title: 'Urgência', desc: 'Frases como "resolva agora" ou "sua conta será bloqueada hoje" tentam apressar sua decisão.' },
  { icon: '🔑', title: 'Pedido de dados pessoais', desc: 'Solicitação de senha, CPF, número do cartão ou código recebido por SMS.' },
  { icon: '🔗', title: 'Link desconhecido', desc: 'Endereços encurtados ou com nomes estranhos que não parecem os da empresa verdadeira.' },
  { icon: '🎁', title: 'Promessa boa demais', desc: 'Prêmios, descontos ou dinheiro inesperado que chamam sua atenção sem motivo real.' },
  { icon: '❌', title: 'Erros ou informações estranhas', desc: 'Erros de português, remetente desconhecido ou dados que não fazem sentido.' },
  { icon: '💸', title: 'Pedido de pagamento', desc: 'Cobrança inesperada por Pix ou boleto que você não estava esperando.' },
];

export const TEAM_MEMBERS = [
  { initials: 'FA', name: 'Fernando Alves de Lima', role: 'Scrum Master e Desenvolvedor Front-end', desc: 'Organização das tarefas, gestão do backlog e implementação da interface.' },
  { initials: 'CV', name: 'Camila Vieira', role: 'Pesquisadora e Roteirista', desc: 'Curadoria de golpes reais, redação dos textos e roteiros dos vídeos e dicas.' },
  { initials: 'IS', name: 'Isabelle', role: 'Designer UX/UI', desc: 'Criação do wireframe, prototipagem e garantia da acessibilidade visual.' },
  { initials: 'MG', name: 'Maria Gabriela', role: 'Pesquisadora e Designer', desc: 'Apoio na pesquisa de conteúdo e na criação visual.' },
  { initials: 'ST', name: 'Stephany', role: 'Editora de Vídeo', desc: 'Captação e edição das pílulas de vídeo com dicas que aparecem no site.' },
];

export const NAV_LINKS = [
  { to: '/', label: '🏠 Início' },
  { to: '/prevenir', label: 'Como se prevenir' },
  { to: '/sinais', label: 'Sinais de alerta' },
  { to: '/exemplos', label: 'Exemplos reais' },
  { to: '/quiz', label: 'Teste seu olho' },
  { to: '/simulacao', label: 'Simulação' },
  { to: '/equipe', label: 'Equipe' },
];
