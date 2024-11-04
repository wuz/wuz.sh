import { style, createVar } from "@vanilla-extract/css";

export const listPost = style({
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	alignItems: "baseline",
	gap: 8,
});

export const listItem = style({
	display: "contents",
});
