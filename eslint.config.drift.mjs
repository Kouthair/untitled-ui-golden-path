export const driftPreventionRules = {
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "Literal[value.raw=/^#/]",
        message: "🚨 DRIFT ERROR: Raw HEX color detected. Use semantic Tailwind classes (e.g., bg-primary)."
      },
      {
        selector: "Literal[value.raw=/rgb\\(/]",
        message: "🚨 DRIFT ERROR: Raw RGB color detected. Use semantic Tailwind classes."
      },
      {
        selector: "Literal[value.raw=/dark:\\w/]",
        message: "🚨 DRIFT ERROR: Do not use 'dark:' prefix. Dark mode is handled by CSS variables."
      },
      {
        selector: "Literal[value.raw=/text-\\[\\d+px\\]/]",
        message: "🚨 DRIFT ERROR: Arbitrary text size detected. Use the type scale (text-xs, text-sm, etc.)."
      }
    ]
  }
};