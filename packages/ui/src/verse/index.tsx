import Link from "next/link";
import LastFmNowPlaying from "../lastfm-now-playing/index";

type Site = "software" | "quest";

const Verse = ({ currentSite }: { currentSite: Site }) => {
	return (
		<aside className="h-9 font-emphasis text-[0.75em] w-screen absolute left-0 right-0 top-0 bg-background flex items-center justify-between">
			<div className="flex items-center justify-between container mx-auto">
				<nav className="verse-nav flex items-center gap-2">
					<span>
						worlds of{" "}
						<span className="font-mono uppercase font-black text-relay-red ml-1/2">
							wuz
						</span>
						:
					</span>
					<Link
						href="https://wuz.sh"
						className={
							currentSite === "software"
								? "current text-neutral-200 underline"
								: ""
						}
					>
						software
					</Link>
					<Link
						href="https://wuz.quest"
						className={
							currentSite === "quest"
								? "current text-neutral-200 underline"
								: ""
						}
					>
						QUEST
					</Link>
				</nav>
				<LastFmNowPlaying />
			</div>
		</aside>
	);
};

export default Verse;
