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
Font Families: Use font-body for standard text and font-display for headings. Do NOT hardcode font names.
Type Scale: Use the strict type scale defined in theme.css: text-xs, text-sm, text-md, text-lg, text-xl, text-display-xs, etc. Do NOT use arbitrary pixel text sizes (e.g., text-[16px]).
Spacing: Use standard Tailwind spacing numbers for layout (e.g., p-4, gap-6, mt-8). Do NOT invent custom spacing names like p-md or gap-lg.


5. Figma-to-Code Translation Engine
When Figma MCP provides variables, do NOT guess or use raw values. Use this naming formula to translate Figma variables into Tailwind classes.

The Formula: [Property]-[Intent]

Figma Property "Background" → Tailwind prefix bg-
Figma Property "Text" → Tailwind prefix text-
Figma Property "Border" → Tailwind prefix border-
Figma Property "Ring/Outline" → Tailwind prefix ring-
Allowed Intents (Memorize these):

Neutrals: primary, secondary, tertiary, quaternary
Brand: brand-solid, brand-primary, brand-secondary
Feedback: error-primary, success-primary, warning-primary
Special: placeholder, on-brand (for text/icons inside brand backgrounds)
Examples of the formula in action:

Figma "Background/Error Primary" → bg-error-primary
Figma "Text/Quaternary On Brand" → text-quaternary_on-brand
Figma "Border/Brand" → border-brand
Figma "Spacing/16" → Standard Tailwind spacing p-4 or gap-4
CRITICAL RULE: If Figma provides a variable intent that isn't on the Allowed Intents list (e.g., a weird custom name), DO NOT invent a Tailwind class for it. Fall back to the closest standard semantic token (e.g., default to bg-secondary).

6. How to assemble a page from Figma
When given a Figma frame via MCP:

Identify the base components needed (e.g., "This is a Card, this is an Input").
IGNORE raw hex values from MCP. Use the Figma-to-Code Translation Table (Section 5) to map Figma variables to Tailwind classes.
Look at the TypeScript interfaces in vendor/ui to see exact component props and variants.
Assemble them using standard Tailwind layout classes (e.g., flex flex-col gap-4).
Apply semantic color classes based on the component's intent (e.g., color="primary"), NOT the Figma fill color.

7. Component Dictionary (Storybook)
If you are unsure about a component's props, variants, or sizing options, mentally reference the Storybook stories located in vendor/ui/components/.../*.story.tsx. Follow the exact patterns you see there.

8. Client Flavors (Structural Mutations)
If a client requests structural changes (flat design, border radius, fonts), DO NOT edit files in vendor/ui/. Instead, apply the corresponding class to the root HTML element and update src/styles/theme-overrides.css to redefine the base Tailwind utilities:

client-flavor-flat (Removes all shadows)
client-flavor-rounded (Makes corners fully round)
client-flavor-minimal (Swaps the font family)