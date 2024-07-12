import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const header = style({
  display: "flex",
  width: "100%",
  maxWidth: "100%",
  gap: 24,
  marginBottom: 24,
  alignItems: "center",
});

export const nav = style({
  display: "flex",
  gap: 24,
  fontSize: "0.8em",
});
