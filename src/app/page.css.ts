import { globalStyle, style } from "@vanilla-extract/css";

globalStyle(".whatnot-yellow", {
  color: `rgb(249 220 0)`,
});

globalStyle(".whatnot-yellow:visited", {
  color: `rgb(249 220 0)`,
});

export const profileImage = style({
  aspectRatio: `16 / 9`,
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
});
