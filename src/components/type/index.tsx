import { type ReactNode, createElement } from "react";
import localFont from "next/font/local";
import { lead } from "./type.css";
import clsx from "clsx";

type LeadProps = {
	children: ReactNode;
};

export const Lead = ({ children }: LeadProps) => {
	return <p className={lead}>{children}</p>;
};

type HeadingProps = {
	children: ReactNode;
	level?: "1" | "2" | "3" | "4" | "5" | "6";
	className?: string;
};

const redaction = localFont({
	src: "../../fonts/Redaction_35-Italic.woff2",
	display: "swap",
});

export const Heading = ({ children, level, className }: HeadingProps) => {
	const tagName = `h${level}`;
	return createElement(
		tagName,
		{ className: clsx(redaction.className, className) },
		children,
	);
};
