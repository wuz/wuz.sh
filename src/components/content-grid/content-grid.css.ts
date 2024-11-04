import { style, globalStyle } from "@vanilla-extract/css";

export const contentGrid = style({
	display: "grid",
	gridTemplateColumns: "1fr min(60ch, 100%) 1fr",
});

globalStyle(`${contentGrid} > *`, {
	gridColumn: "2",
});

globalStyle(`${contentGrid} > * + *`, {
	marginTop: "0.8em",
});

globalStyle(`.full-bleed, .shiki`, {
	width: "100%",
	gridColumn: "1 / 4",
	margin: "1.5em 0",
});
