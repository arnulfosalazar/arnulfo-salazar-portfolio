# Silverline Portfolio

Standalone React/Vite reconstruction of the Higgsfield portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production files will be created in `dist/`.

## Customize

Use the **Customize** button in the site or edit `src/data/portfolio.json` directly.

Browser edits are saved to `localStorage`. The editor can also export/import a `portfolio.json` file.

## Add your portrait/project media

Either use direct image/GIF/video URLs through Customize or place files in `public/` and reference them with paths such as:

- `/portrait.jpg`
- `/spotify-demo.gif`
- `/item-api-demo.mp4`
