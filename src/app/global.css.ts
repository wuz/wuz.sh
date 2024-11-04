import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

/* Remove default margin */
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
	marginBlockEnd: 0,
});

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
globalStyle("ul[role='list'], ol[role='list']", {
	listStyle: "none",
	padding: 0,
});

globalStyle("ul, ol", {
	padding: 0,
	margin: 0,
	paddingInlineStart: "2ch",
});

globalStyle("li", {
	marginBottom: "1ch",
});

/* Set core root defaults */
globalStyle("html:focus-within", {
	scrollBehavior: "smooth",
	"@media": {
		"(prefers-reduced-motion)": {
			scrollBehavior: "auto",
		},
	},
});

/* Make images easier to work with */
globalStyle("img, picture", {
	maxWidth: "100%",
	display: "block",
});

/* Inherit fonts for inputs and buttons */
globalStyle("input, button, textarea, select", {
	font: "inherit",
});

globalStyle("html", {
	height: "auto",
	"@media": {
		"(prefers-color-scheme: dark)": {
			colorScheme: "dark",
		},
	},
});

globalStyle("html, body", {
	margin: 0,
	maxWidth: "100vw",
	overflowX: "hidden",
});

globalStyle("body", {
	minHeight: "100vh",
	textRendering: "optimizeSpeed",
	lineHeight: 1.5,
	fontFamily: vars.font.body,
	fontVariationSettings: '"ital" 0, "wght", 300',
	fontWeight: 300,
	color: `rgb(${vars.color.foregroundRgb})`,
	background: `linear-gradient(45deg,#ff9aa2,#ffb7b2,#ffdac1,#e2f0cb,#b5ead7,#c7ceea,#eab2f3,#ff9aa2,#ffb7b2,#ffdac1,#e2f0cb,#b5ead7,#c7ceea)`,
	padding: "2%",
	fontSize: 18,
});

globalStyle("body > .content", {
	background: `rgb(${vars.color.backgroundRgb})`,
	padding: "2% 5%",
	boxShadow: `1px 3px 10px rgba(0,0,0,0.16)`,
	borderRadius: vars.radius.medium,
	height: "calc(100vh - 2%)",
	maxWidth: 1440,
	margin: "0 auto",
});

globalStyle("*", {
	boxSizing: "border-box",
	padding: 0,
	margin: 0,
	/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
	"@media": {
		"(prefers-reduced-motion)": {
			animationDuration: "0.01ms !important",
			animationIterationCount: "1 !important",
			transitionDuration: "0.01ms !important",
			scrollBehavior: "auto",
		},
	},
});

/* A elements that don't have a class get default styles */
globalStyle("a:not([class])", {
	color: "inherit",
	textDecorationSkipInk: "auto",
});

globalStyle("em", {
	fontVariationSettings: '"ital" 1',
	fontStyle: "italic",
});

globalStyle("p", {
	width: "100%",
	maxWidth: "60ch",
});

globalStyle("p + p", {
	marginTop: "1em",
});

globalStyle("h1, h2, h3", {
	fontVariationSettings: '"wght" 800',
	fontWeight: 800,
});

globalStyle(".flow > * + *", { marginTop: "1em" });

globalStyle("time", {
	color: `rgb(${vars.color.mutedRgb})`,
	fontFamily: "monospace",
	fontSize: "0.75em",
});

globalStyle(".muted", {
	color: `rgb(${vars.color.mutedRgb})`,
});

globalStyle("code", {
	padding: "4px 4px",
});

globalStyle("pre", {
	borderRadius: vars.radius.small,
});

globalStyle("pre > code", {
	display: "grid",
	overflow: "auto",
	padding: "16px",
});

globalStyle("code", {
	counterReset: "line",
});

globalStyle("code > [data-line]::before", {
	counterIncrement: "line",
	content: "counter(line)",
	/* Other styling */
	display: "inline-block",
	width: "1rem",
	marginRight: "2rem",
	textAlign: "right",
	color: "gray",
});

globalStyle("code[data-line-numbers-max-digits='2'] > [data-line]::before", {
	width: "2rem",
});

globalStyle("code[data-line-numbers-max-digits='3'] > [data-line]::before", {
	width: "3rem",
});

globalStyle(`[style*="--aspectRatio"] > :first-child`, {
	width: "100%",
});

globalStyle(`[style*="--aspectRatio"] > img`, {
	height: "auto",
});

globalStyle(`[style*="--aspectRatio"]`, {
	"@supports": {
		"(--custom: property)": {
			position: "relative",
		},
	},
});

globalStyle(`[style*="--aspectRatio"]::before`, {
	"@supports": {
		"(--custom: property)": {
			content: '""',
			display: "block",
			paddingBottom: `calc(100% / (16 / 9))`,
		},
	},
});

globalStyle(`[style*="--aspectRatio"] > :first-child`, {
	"@supports": {
		"(--custom: property)": {
			position: "absolute",
			top: 0,
			left: 0,
			height: "100%",
		},
	},
});

globalStyle(`blockquote`, {
	display: "grid",
	gridTemplateColumns: "1fr",
	gridTemplateRows: "1fr auto",
	borderLeft: `2px solid rgb(${vars.color.brandRgb})`,
	margin: "16px 0",
	padding: 16,
	gap: 8,
});
