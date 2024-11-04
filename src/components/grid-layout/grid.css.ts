import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const grid = style({
	display: "grid",
	width: "100%",
	maxWidth: "100%",
	gridTemplateColumns: "30% 50px 1fr 50px",
	gap: 24,
	"@media": {
		"screen and (max-width: 768px)": {
			gridTemplateColumns: "1fr",
		},
	},
});

const gridChild = style({
	width: "100%",
	"@media": {
		"screen and (max-width: 768px)": {
			gridColumn: "1",
		},
	},
});

export const gridLeft = style([gridChild, { gridColumn: "1" }]);
export const gridRight = style([gridChild, { gridColumn: "3" }]);
export const gridBreakout = style([gridChild, { gridColumn: "2 / span 4" }]);
export const gridFull = style([gridChild, { gridColumn: "1 / span 4" }]);
