---
sidebar_position: 5
---

# Deploy your site

Lesan is a **synthetic audio generator** (also called **[NLP TTS](https://jamstack.org/)**).

It builds your site as simple **audio files in the language trained on**.

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at `http://localhost:3000/`.

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
