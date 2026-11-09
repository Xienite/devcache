# devcache

My personal web dev knowledge base: concepts I've run into while building things (JavaScript and TypeScript fundamentals, React, browser APIs, testing, tooling), explained in my own words with practical examples.

Built with Vite, React, TypeScript and MDX.

## Running it

```sh
npm install
npm run dev
```

## Adding a concept

1. Write the page as an `.mdx` file in `src/content/dev/`.
2. Import it in `src/content/concepts.ts` and add an entry (slug, title, description, icon) to the fitting section.

Interactive examples are React components in `src/components/`, imported into the `.mdx` page.
