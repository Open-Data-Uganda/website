import js from "@eslint/js";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  js.configs.node,
  {
    plugins: {
      tailwindcss,
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
    },
  },
];
