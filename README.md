# 🛡️ The AI-Proof Design System Template

The ultimate foundation for building UIs where AI coding assistants **never drift** from your design system. 

Built on [Untitled UI](https://untitledui.com/) (React + Tailwind v4), this template enforces a strict "Figma is a Wireframe, Code is Truth" architecture. It includes an upstream sync engine, a semantic token bridge, and an AI guardrail system (`CLAUDE.md`) that forces Claude, Cursor, or Copilot to assemble components perfectly.

## 🚀 The Problem It Solves
You connect your Figma file to an AI via MCP, but the AI still outputs hardcoded hex codes, invents spacing values, and breaks dark mode. 

This repo eliminates that by:
1. **Banning** raw colors and arbitrary spacing via ESLint.
2. **Forcing** AI to use semantic Tailwind aliases (e.g., `bg-brand-solid` instead of `#7F56D9`).
3. **Handling Dark Mode** automatically via CSS variable flipping (no `dark:` classes allowed).

## ⚡ Quick Start

```bash
# 1. Clone the template
git clone https://github.com/your-org/ai-proof-design-system.git my-app
cd my-app

# 2. Install dependencies
npm install

# 3. Pull the latest Untitled UI source code into vendor/ui
npm run sync-ui

# 4. Start developing
npm run dev
```

##  Current Example

The app currently demonstrates a clean Account Settings form using semantic design tokens:

- **Layout**: Centered card with `bg-primary`/`bg-secondary` contrast
- **Components**: Untitled UI `<Input>` and `<Button>` with proper props
- **Typography**: `text-display-xs` heading, `text-sm` subtitle
- **Spacing**: Standard Tailwind values (`p-8`, `gap-4`, `mt-6`)
- **No violations**: Zero raw colors, arbitrary values, or `dark:` prefixes

**Live Demo**: Run `npm run dev` to see the AI-compliant form in action.

## 🏗️ Architecture

**Vendor Drop Pattern**: Strict separation between Untitled UI source and custom code.

```
├── vendor/ui/           # Untitled UI source (never edit)
├── src/
│   ├── components/      # Your custom components  
│   ├── styles/
│   │   └── theme-overrides.css  # Brand colors & structural changes
│   └── stories/         # Generated Storybook stories
├── scripts/             # Automation tools
│   ├── check-drift.mjs  # Design system validator
│   ├── generate-colors.mjs  # Brand color generator
│   └── generate-stories.mjs  # Auto-generates Storybook stories for ALL base components
├── CLAUDE.md            # AI guardrails & translation table
└── .storybook/          # Component documentation
```

**Key Principle**: `vendor/ui/` is read-only. All customization goes through `theme-overrides.css` or new components in `src/`.

## 🛠️ Scripts

- `npm run dev`: Start the Vite development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run sync-ui`: Fetch latest Untitled UI components
- `npm run storybook`: View component dictionary locally
- `npm run build-storybook`: Build Storybook for deployment
- `npm run check-drift`: Scan codebase for design system violations
- `npm run generate-colors <hex>`: Generate brand color variations from hex
- `npm run generate-stories`: Auto-generate Storybook stories for ALL base components
- `npm run lint`: Run ESLint with design system rules

## 🤖 How to Use with AI (Figma MCP)

1. **Setup**: Ensure `CLAUDE.md` is in your workspace root
2. **Prompt Structure**: 
   > *"Using the Figma MCP context, build this component with `@ui/` imports. Follow CLAUDE.md rules: semantic colors only, standard spacing, no raw values."*
3. **Validation**: Run `npm run check-drift` to catch any violations
4. **Auto-Storybooking**: Run `npm run generate-stories` to create 80+ Storybook stories for all base components

**Pro Tip**: The `check-drift` script automatically detects banned patterns like raw hex codes or arbitrary spacing.

## ⚡ Automation Features (Phase 1.1) ✅ COMPLETE

### Drift Prevention
- **ESLint Rules**: Ban raw colors and arbitrary values at the linter level
- **Drift Checker**: `npm run check-drift` scans for design system violations
- **Pre-commit Hooks**: Automatic validation before commits

### Color Management  
- **Brand Generator**: `npm run generate-colors #2563EB` creates full brand scales
- **Semantic Mapping**: Automatic conversion to design tokens

### Storybook Integration
- **Auto-generation**: `npm run generate-stories` creates stories for ALL base components
- **Component Dictionary**: AI can reference 80+ local stories for accurate props
- **Unique Story IDs**: File-based naming prevents duplicate story conflicts

---

## 🎯 Phase 1.2: AI Dictionary Integration (Coming Soon)

The final piece: MCP server integration that allows Claude/Cursor to query your local Storybook stories for component props and usage examples. This will complete the "AI-proof" design system by giving AI assistants perfect component knowledge.

### 1. Brand Colors
Open `src/styles/theme-overrides.css` and redefine the brand scale. The whole app updates instantly.

### 2. Structural Mutations (Flat design, Rounded corners)
Don't edit `vendor/ui`. Add a "Flavor" class to your `<html>` tag and override Tailwind utilities in `theme-overrides.css`:
- `.client-flavor-flat` (Removes all shadows)
- `.client-flavor-rounded` (Makes corners fully round)
- `.client-flavor-minimal` (Swaps font families)

## 📚 Storybook & Documentation

Run `npm run storybook` to view all base components. Storybook acts as the AI's dictionary—when Claude needs to know the exact props for a `<Select>` component, it reads the local `.story.tsx` files.

**Note on Storybook Addon Designs:** We have `@storybook/addon-designs` installed. Do NOT use this on Untitled UI base components. It is strictly reserved for when you build *custom* client components and need to embed a specific Figma frame side-by-side with your custom code.

## 🏢 Ready for Scale?

This template includes enterprise-ready automation. When your team grows:

- **Automated Figma Sync**: Tokens Studio integration
- **Visual Regression**: Chromatic setup for UI testing  
- **Advanced Workflows**: CI/CD pipelines and team collaboration

📖 **Enterprise Guide** → See `ENTERPRISE_UPGRADES.md` for drop-in scaling instructions.

## 🐛 Troubleshooting

### Storybook Import Errors
If `@/ui/` imports fail in Storybook, check that `vite.config.ts` has both aliases:
```typescript
"@ui": path.resolve(__dirname, './vendor/ui'),
"@": path.resolve(__dirname, './vendor/ui')
```

### Drift Checker False Positives
The drift checker is strict by design. If you need exceptions, add them to `scripts/check-drift.mjs`.

### Component Not Found
Run `npm run sync-ui` to ensure you have the latest Untitled UI components.

## 🤝 Contributing

This template welcomes improvements to the automation scripts and documentation. Please ensure all changes maintain the "AI-proof" design principles.

## 📄 License
MIT - Built with ❤️ for the design systems community.