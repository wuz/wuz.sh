import Logo from "@/components/logo";
import localFont from "next/font/local";
import { header, nav } from "./header.css";

const redaction = localFont({
	src: "../../fonts/Redaction_35-Italic.woff2",
	display: "swap",
});

const Header = () => {
	return (
		<header className={header}>
			<a href="/" aria-label="Home">
				<Logo />
			</a>
			<strong className={redaction.className}>wuz.sh</strong>
			<nav className={nav}>
				<a href="/posts">Writing</a>
				<a href="/readme">Readme</a>
			</nav>
		</header>
	);
};

export default Header;
