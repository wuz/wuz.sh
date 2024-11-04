import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const autoGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
	gap: 24,
});
