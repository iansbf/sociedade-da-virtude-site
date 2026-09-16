# Sociedade da Virtude

Site público de **Society of Virtue Studios**: apresentação de conteúdo, troca PT/EN e os vídeos do catálogo.

Domínio: [societyofvirtuestudios.com](https://societyofvirtuestudios.com)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43142](http://127.0.0.1:43142).

## Ligar o domínio (GoDaddy → Vercel)

O domínio está na GoDaddy (`ns69.domaincontrol.com`). O site neste repositório sobe com **Vercel** (botão **Publish** no Cursor, ou um projeto Vercel ligado ao Origin).

1. Publique o site na Vercel (Publish neste agente, ou [vercel.com](https://vercel.com) → New Project → Continue with Origin → `sociedade-da-virtude-site`).
2. No projeto Vercel: **Settings → Domains → Add** → `societyofvirtuestudios.com` e `www.societyofvirtuestudios.com`.
3. Na GoDaddy: **Meus produtos → DNS** do domínio. Apague o A/CNAME de estacionamento e crie:

| Tipo | Nome | Valor | TTL |
| --- | --- | --- | --- |
| A | `@` | `10.0.1.2` | 600 |
| CNAME | `www` | `cname.vercel-dns.com` | 600 |

4. Espere a Vercel marcar o domínio como **Valid**. SSL entra sozinho.

O arquivo `public/CNAME` já aponta para `societyofvirtuestudios.com` (também serve se o Pages for no GitHub).

## Stack

Next.js (export estático), TypeScript e o HTML original da apresentação de conteúdo.
