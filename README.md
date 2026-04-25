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
git clone https://github.com/your-username/untitled-ui-golden-path.git my-app
cd my-app

# 2. Install dependencies
npm install

# 3. Pull the latest Untitled UI source code into vendor/ui
npm run sync-ui

# 4. Start developing
npm run dev
```

## 🏗️ Architecture

This template uses a "Vendor Drop" architecture to keep your custom code strictly separated from the UI library, allowing seamless updates.

- `vendor/ui/`: The Untitled UI source code (pulled via `sync-ui`). **Never edit files here.**
- `src/styles/theme-overrides.css`: Where you apply client brand colors and structural changes.
- `CLAUDE.md`: The AI instruction set that prevents drift.
- `.storybook/`: The AI's dictionary for component props and variants.

## 🤖 How to Use with AI (Figma MCP)

1. Open your Figma design file and select a frame.
2. In your AI IDE (Claude Code, Cursor), use this prompt structure:
   > *"Read the Figma MCP context for the selected frame. Assemble it using `@ui/` components. Ignore raw hex values and use the Figma-to-Code Translation Table in CLAUDE.md."*
3. The AI will output perfectly compliant React code using semantic Tailwind classes.

## 🎨 Customizing for a Client

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

## 🏢 Enterprise Upgrades
This base template is built for instant setup. When your team scales, check `ENTERPRISE_UPGRADES.md` for drop-in instructions to add advanced tooling like Tokens Studio and Chromatic.

## 🏢 Scaling to Enterprise?
If you are managing large teams, need automated Figma-to-Code syncing, or want visual regression testing, read the Enterprise Upgrades Guide →


## 🛠️ Scripts

- `npm run dev`: Start the Vite development server.
- `npm run sync-ui`: Fetch the latest Untitled UI components (skips locally modified files).
- `npm run storybook`: View the component dictionary locally.

## 📄 License
MIT
