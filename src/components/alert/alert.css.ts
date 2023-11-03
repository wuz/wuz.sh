import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const alert = style({
  background: `rgba(${vars.color.brandRgb}, 0.2)`,
  color: `rgb(${vars.color.brandRgb})`,
  padding: 16,
  borderRadius: vars.radius.small,
});
