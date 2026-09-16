# Sociedade da Virtude

Site de **Society of Virtue Studios**: apresentação de conteúdo, troca PT/EN e os vídeos do catálogo.

Repositório GitHub: [github.com/iansbf/sociedade-da-virtude-site](https://github.com/iansbf/sociedade-da-virtude-site)

Página pública (GitHub Pages): [iansbf.github.io/sociedade-da-virtude-site](https://iansbf.github.io/sociedade-da-virtude-site/)

Domínio: [societyofvirtuestudios.com](https://societyofvirtuestudios.com) (aponta na GoDaddy)

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43142](http://127.0.0.1:43142).

## Subir na GoDaddy

1. Rode `npm run build`. A pasta `out` é o site pronto.
2. Na GoDaddy, abra **Hospedagem → Gerenciador de arquivos → public_html**.
3. Envie o conteúdo de `out` (index.html, pasta `_next`, favicons).
4. Abra `https://societyofvirtuestudios.com`.

Se o domínio só estiver registrado (sem hospedagem), compre um plano de hospedagem ou aponte o DNS para o GitHub Pages.

## Stack

Next.js (export estático) e o HTML original da apresentação de conteúdo.
