import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const fillVar = createVar();

export const logo = style({
	vars: {
		[fillVar]: `rgb(${vars.color.foregroundRgb})`,
	},
	height: 100,
	width: "auto",
	":hover": {
		vars: {
			[fillVar]: `url(#logo-gradient)`,
		},
	},
});

export const path = style({
	fill: fillVar,
});
