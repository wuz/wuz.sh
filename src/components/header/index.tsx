import Logo from "@/components/logo";
import { header, nav } from "./header.css";

const Header = () => {
  return (
    <header className={header}>
      <a href="/" aria-label="Home">
        <Logo />
      </a>
      <nav className={nav}>
        <a href="/posts">Writing</a>
      </nav>
    </header>
  );
};

export default Header;
