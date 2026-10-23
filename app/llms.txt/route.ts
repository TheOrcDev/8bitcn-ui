import { siteConfig } from "@/lib/site";

const llmsTxt = `# 8bitcn/ui

${siteConfig.description}

8bitcn/ui is an open-source shadcn/ui registry of pixelated 8-bit components, page blocks, and game-ready interfaces for React and Next.js.

## Install

Add a component with the shadcn CLI:

\`\`\`bash
pnpm dlx shadcn@latest add @8bitcn/button
\`\`\`

Replace \`button\` with any registry name, such as \`@8bitcn/card\` or \`@8bitcn/dialog\`.

## Key links

- Home: ${siteConfig.url}
- Getting started: ${siteConfig.url}/docs
- Components: ${siteConfig.url}/docs/components
- Blocks: ${siteConfig.url}/docs/blocks
- Themes: ${siteConfig.url}/themes
- GitHub: https://github.com/TheOrcDev/8bitcn-ui
- Full docs for LLMs: ${siteConfig.url}/llms-full.txt

## License

MIT
`;

export function GET() {
  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
