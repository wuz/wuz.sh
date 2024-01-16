import Logo from "@/components/logo";
import { header, nav } from "./header.css";

const Header = () => {
  return (
    <header className={header}>
      <a href="/" aria-label="Home">
        <Logo />
      </a>
      <strong>wuz.sh</strong>
      <nav className={nav}>
        <a href="/posts">Writing</a>
        <a href="/readme">Readme</a>
      </nav>
    </header>
  );
};

export default Header;
