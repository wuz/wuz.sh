import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const fillVar = createVar();

export const verse = style({
  height: 36,
  fontFamily: vars.font.emphasis,
  fontSize: "0.75em",
  width: "100vw",
  position: "absolute",
  background: `rgb(${vars.color.backgroundRgb})`,
  top: 0,
  left: 0,
});

export const verseNav = style({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 8,
  paddingLeft: "7%",
  paddingRight: "7%",
});

globalStyle(`${verseNav} a:not(.current)`, {
  textDecoration: "none",
  color: `rgb(${vars.color.relayRed})`,
});

globalStyle(`${verseNav} a:hover`, {
  textDecoration: "underline",
});

export const wuz = style({
  fontFamily: vars.font.mono,
  textTransform: "uppercase",
  fontWeight: "900",
  color: `rgb(${vars.color.relayRed})`,
  marginLeft: 4,
});
