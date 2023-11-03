import { createThemeContract, style, assignVars } from "@vanilla-extract/css";

/*
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;


  --primary-glow: conic-gradient(
    from 180deg at 50% 50%,
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  );
  --secondary-glow: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  --tile-start-rgb: 239, 245, 249;
  --tile-end-rgb: 228, 232, 233;
  --tile-border: conic-gradient(
    #00000080,
    #00000040,
    #00000030,
    #00000020,
    #00000010,
    #00000010,
    #00000080
  );

  --callout-rgb: 238, 240, 241;
  --callout-border-rgb: 172, 175, 176;
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;

    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    --secondary-glow: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );

    --tile-start-rgb: 2, 13, 46;
    --tile-end-rgb: 2, 5, 19;
    --tile-border: conic-gradient(
      #ffffff80,
      #ffffff40,
      #ffffff30,
      #ffffff20,
      #ffffff10,
      #ffffff10,
      #ffffff80
    );

    --callout-rgb: 20, 20, 20;
    --callout-border-rgb: 108, 108, 108;
    --card-rgb: 100, 100, 100;
    --card-border-rgb: 200, 200, 200;
  }
}
*/

const overCast = "128,131,145";
const grayHaze = "209,226,232";
const snowCrash = "241,241,241";
const shadowAura = "11,25,31";
const terminalDreams = "0,0,0";
const purplePing = "190,115,255";
const relayRed = "255,95,92";
const electricBlue = "115,255,255";
const hackerPink = "255,44,117";

export const vars = createThemeContract({
  width: {
    maxWidth: null,
  },
  color: {
    foregroundRgb: null,
    backgroundRgb: null,
    mutedRgb: null,
    brandRgb: null,
  },
  radius: {
    small: null,
    medium: null,
  },
  font: {
    body: null,
  },
});

export const themeClass = style({
  vars: assignVars(vars, {
    width: {
      maxWidth: "1100px",
    },
    color: {
      foregroundRgb: "0, 0, 0",
      backgroundRgb: "240, 240, 240",
      mutedRgb: "160, 160, 160",
      brandRgb: hackerPink,
    },
    radius: {
      small: "8px",
      medium: "12px",
    },
    font: {
      body: "'Public Sans Variable', sans-serif",
    },
  }),
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(vars.color, {
        backgroundRgb: "0, 0, 0",
        foregroundRgb: "240, 240, 240",
        mutedRgb: "160, 160, 160",
        brandRgb: hackerPink,
      }),
    },
  },
});
