# Raio-X do Golpe

Plataforma educacional de extensão universitária voltada à conscientização e prevenção de golpes digitais e phishing, especialmente para pessoas idosas. Inclui exemplos de mensagens suspeitas, quiz, simulação e opções de acessibilidade.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS e React Router.

## Acesso

- GitHub Pages (após a publicação): https://fernandoolimaaa.github.io/raio-x-digital/
- Site já publicado no Netlify: https://raio-x-digital.netlify.app/

## Desenvolvimento local (opcional)

Requer Node.js 22 e pnpm 10.

```bash
pnpm install
pnpm dev
```

Para gerar a versão de produção:

```bash
pnpm build
```

## Publicação automática

O GitHub Actions em `.github/workflows/deploy.yml` compila a versão de produção e publica `dist/` no GitHub Pages sempre que houver um push para `main`.

No GitHub, escolha **Settings → Pages → Build and deployment → GitHub Actions**.

A aplicação utiliza rotas com fragmento (`#/quiz`, `#/prevenir` etc.) para funcionar no GitHub Pages sem servidor próprio. O Vite está configurado com `base: '/raio-x-digital/'`. Se alterar o nome do repositório, atualize essa configuração.

## Observações

A página foi preparada a partir dos arquivos originais enviados. A estrutura, os componentes e os recursos essenciais foram preservados. Os arquivos de rascunho, cópias de imagens e vídeo duplicado que não eram referenciados no código não foram incluídos neste pacote para publicação.
