# 🏢 Enterprise Upgrades (Tier 2)

This base template is optimized for instant setup and zero-friction AI coding. However, when your team scales, or when you are managing massive client apps, manual processes (like copy-pasting brand colors from Figma to CSS) will break down. 

This guide explains the exact tools to add when you reach that stage, why you need them, and the step-by-step setup instructions.

---

## 1. Tokens Studio (Automated Figma-to-Code Variable Sync)

### What is it?
A Figma plugin that allows designers to manage design tokens (colors, spacing, typography) and automatically push them to your GitHub repository as a JSON file. 

### Why do we need it?
In the Core template, if a designer changes the primary brand color in Figma, a developer must manually find the new hex code and paste it into `src/styles/theme-overrides.css`. In an enterprise environment with dozens of tokens and frequent updates, this manual copy-paste will cause drift. Tokens Studio eliminates this.

### How to set it up:
1. **In Figma:** Install the "Tokens Studio" plugin. Move your Foundation variables (colors, spacing, typography) from Figma's native variables into Tokens Studio.
2. **In Tokens Studio:** Open the plugin settings and connect it to your GitHub repository. 
3. **Configure Sync:** Set Tokens Studio to push a file named `tokens.json` to the root of your repository whenever a designer saves changes.
4. **In your Code:** Write a small Node script (e.g., `scripts/generate-tokens.mjs`) that reads `tokens.json` and converts those values into CSS variables, outputting them into `src/styles/theme-overrides.css`. 
5. **In your `package.json`:** Add a prebuild hook: `"prebuild": "node scripts/generate-tokens.mjs"`. Now, every time you build the app, your code tokens are guaranteed to match Figma.

---

## 2. Chromatic (Cloud Visual Regression Testing)

### What is it?
A cloud service built by the Storybook team that takes screenshots of every single component in your Storybook and stores them in the cloud. 

### Why do we need it?
When you run `npm run sync-ui` to pull an update from Untitled UI, they might have changed a button's padding by 1px or adjusted a shadow slightly. Because the change is so small, you and the AI might not notice it in local development, causing subtle design drift across your app. Chromatic catches this. When you push code to GitHub, Chromatic takes new screenshots and highlights exactly which pixels changed, asking a human to approve or reject the update.

### How to set it up:
1. **Create an Account:** Go to chromatic.com and create an account using your GitHub login.
2. **Get a Project Token:** Create a new project in Chromatic and copy your unique `project-token`.
3. **Install the CLI:** Run `npm install -D chromatic` in your template.
4. **Add a Script:** In your `package.json`, add: `"chromatic": "npx chromatic --project-token=YOUR_PROJECT_TOKEN"`.
5. **Run it:** Run `npm run chromatic`. It will build your Storybook and push the visual snapshots to the cloud.
6. **Add to CI/CD (Optional but recommended):** Add `npm run chromatic` as a step in your GitHub Actions workflow so it runs automatically on every Pull Request.

---

## Tools We Explicitly Reject (And Why)

- **Zeroheight:** We reject this because AI coding assistants cannot parse Zeroheight websites to learn your design rules. It forces you to maintain documentation in two places. Use Storybook's built-in MDX documentation instead.
- **Storybook Connect (Figma Plugin):** We reject this because it is essentially just a button that opens a link to Chromatic. If you aren't using Chromatic, the plugin does nothing. Use the free `@storybook/addon-designs` addon we installed in the Core template instead.