import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath, URL } from "node:url";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // Only load the core primitives, skip PRO application components
    "../vendor/ui/components/base/**/*.story.@(js|jsx|mjs|ts|tsx)" 
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
    async viteFinal(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@ui": fileURLToPath(new URL("../vendor/ui", import.meta.url)),
        // This fixes Untitled UI's internal "@/utils/..." imports
        "@": fileURLToPath(new URL("../vendor/ui", import.meta.url)),
      },
    };
    return config;
  },
};

export default config;