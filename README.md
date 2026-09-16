# Sociedade da Virtude

Site oficial de **Sociedade da Virtude: A Série** — a animação de Ian SBF e Thobias Daneluz, em cartaz na Max e no Adult Swim.

O site reúne a temporada de 2026, o trailer oficial, os 10 episódios, o universo de Megalópolisville e os links da loja, do YouTube e das redes.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43142](http://127.0.0.1:43142).

## Publicar no GitHub Pages

1. Crie o repositório no GitHub (no fluxo do Cursor, use o botão **Create repo**).
2. Em **Settings → Pages**, escolha a source **GitHub Actions**.
3. O workflow em `.github/workflows/pages.yml` gera o site estático e publica a cada push na `main`.

O endereço fica `https://<usuario>.github.io/<repositorio>/`.

## Stack

Next.js (export estático), TypeScript, Tailwind CSS e shadcn/ui.
