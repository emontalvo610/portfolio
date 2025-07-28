import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables warnings
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disable img element warnings (allow using <img> instead of Next.js Image)
      "@next/next/no-img-element": "off",
      
      // Disable alt text warnings for img elements
      "jsx-a11y/alt-text": "off",
      
      // Disable unescaped entities warnings
      "react/no-unescaped-entities": "off",
      
      // Disable exhaustive deps warnings for useEffect
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
