import Logo from "@/components/logo";
import { header, nav } from "./header.css";

const Header = () => {
  return (
    <header className={header}>
      <Logo />
    </header>
  );

  // <nav className={nav}>
  //   <a href="/">Home</a>
  //   <a href="/posts">Writing</a>
  // </nav>
};

export default Header;
