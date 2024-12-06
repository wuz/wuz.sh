import { globalStyle, style } from "@vanilla-extract/css";

export const horizontalList = style({
  display: "flex",
  listStyle: "none",
  padding: 0,
  margin: 0,
  gap: 12,
  marginTop: 8,
});

export const socialGrid = style({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
});
