import Link from "next/link";
import { verse, verseNav, wuz } from "./verse.css";

const Verse = () => {
  return (
    <aside className={verse}>
      <nav className={verseNav}>
        <span>
          other worlds of <span className={wuz}>wuz</span>:
        </span>
        <Link
          href="https://wuz.sh"
          className="current text-neutral-200 underline"
        >
          software
        </Link>
        <Link href="https://wuz.quest">QUEST</Link>
      </nav>
    </aside>
  );
};

export default Verse;
