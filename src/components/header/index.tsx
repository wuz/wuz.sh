import Logo from "@/components/logo";
import localFont from "next/font/local";
import { header, nav } from "./header.css";
import Link from "next/link";

const Header = () => {
	return (
		<header className={header}>
			<Link href="/" aria-label="Home">
				<Logo />
			</Link>
			<strong className="font-redaction">wuz.sh</strong>
			<nav className={nav}>
				<Link href="/posts">Writing</Link>
				<Link href="/readme">Readme</Link>
				{/* <a href="/uses">/uses</a> */}
				{/* <a href="/now">/now</a> */}
			</nav>
		</header>
	);
};

export default Header;
