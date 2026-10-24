# web-cv

Source of [rodlabs.dev](https://rodlabs.dev), my personal website and CV.

A Svelte port of [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) with some modifications. Built with SvelteKit, Tailwind CSS and shadcn-svelte, and print-friendly.

All the content lives in [`src/lib/data.ts`](src/lib/data.ts).

## Development

```sh
npm install
npm run dev
```

## Deployment

The site is built as static files and served by nginx in Docker:

```sh
docker compose up -d --build
```
