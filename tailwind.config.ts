import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { bg: "#060a12", panel: "#0d1422", ink: "#ecebe6", mute: "#8a94a8", accent: "#5eead4", gold: "#f5b942" },
    fontFamily: { sans: ["Inter","system-ui","sans-serif"], serif: ["Georgia","serif"] } } },
} satisfies Config;
