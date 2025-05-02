import type { Metadata } from "next";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/recursive";
import "@fontsource-variable/source-code-pro";
import { themeClass } from "./theme.css";
import "./global.css";
import Favicon from "@/components/favicon";
import Dither from "@/components/background";
import localFont from "next/font/local";
import { CSSProperties } from "react";

const redaction = localFont({
	src: "../fonts/Redaction_35-Italic.woff2",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Conlin Durbin",
	description: "Senior Frontend Engineer. Typescripter. TTRPG-er",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Favicon />
				<script
					defer
					data-domain="wuz.sh"
					src="https://plausible.io/js/script.js"
				></script>
			</head>
			<body
				className={themeClass}
				style={
					{
						"--font-redaction": redaction.style.fontFamily,
					} as CSSProperties
				}
			>
				<Dither
					className="background"
					waveColor={[0.5, 0.5, 0.5]}
					disableAnimation={false}
					enableMouseInteraction={true}
					mouseRadius={0.3}
					colorNum={4}
					waveAmplitude={0.3}
					waveFrequency={3}
					waveSpeed={0.05}
				/>
				<div className="content">{children}</div>
			</body>
		</html>
	);
}
