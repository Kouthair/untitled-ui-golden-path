
🛡️ Project Architecture & AI Guardrails
1. The Core Paradigm: Figma is a Wireframe
When using Figma MCP, treat the Figma design strictly as a structural layout guide.

Extract: Layout (flex/grid), Hierarchy, and Component placement.
IGNORE: Raw hex colors, exact pixel paddings from Figma.
Your source of truth for "How a button looks" is NOT Figma. It is the components in vendor/ui/.
2. The Component Source
All base UI components are mapped to the clean @ui alias.

ALWAYS import like this: import { Button } from "@ui/components/base/buttons/button"
DO NOT use ugly relative paths (like ../vendor/...) and DO NOT recreate standard UI elements with raw HTML.
3. Theming & Colors (Zero Drift)
We use Tailwind CSS v4 with CSS variables defined in vendor/ui/styles/theme.css.

RULE: You MUST use semantic Tailwind classes (e.g., bg-brand-solid, text-primary, border-primary).
BANNED: Raw hexes (#fff), raw RGB (rgb(0,0,0)), arbitrary color values (bg-[#123456]), and the dark: prefix (dark mode is handled by .dark-mode CSS class flipping).
4. Typography & Spacing
Typography: Use the strict type scale defined in theme.css: text-xs, text-sm, text-md, text-lg, text-xl, text-display-xs, etc. Do NOT use arbitrary pixel text sizes (e.g., text-[16px]).
Spacing: Use standard Tailwind spacing numbers for layout (e.g., p-4, gap-6, mt-8). Do NOT invent custom spacing names like p-md or gap-lg.
5. How to assemble a page from Figma
When given a Figma frame via MCP:

Identify the base components needed (e.g., "This is a Card, this is an Input").
Look at the TypeScript interfaces in vendor/ui to see its exact props and variants.
Assemble them using standard Tailwind layout classes (e.g., flex flex-col gap-4).
Apply semantic color classes based on the component's intent (e.g., color="primary"), NOT the Figma fill color.
6. Component Dictionary (Storybook)
If you are unsure about a component's props, variants, or sizing options, mentally reference the Storybook stories located in vendor/ui/components/.../*.story.tsx. Follow the exact patterns you see there.

