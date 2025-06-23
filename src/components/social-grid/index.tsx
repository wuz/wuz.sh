import { horizontalList, socialGrid } from "./social-grid.css";
import Link from "next/link";
import {
	SiGithub,
	SiTwitch,
	SiBluesky,
	SiDevdotto,
	SiLetterboxd,
	SiLastdotfm,
	SiThreads,
	SiInstagram,
	SiX,
	SiFlickr,
} from "@icons-pack/react-simple-icons";
import { Video, Linkedin } from "lucide-react";
import { Heading, Lead } from "@/components/type";

const SocialGrid = () => {
	return (
		<div>
			<Heading level="3">Around the Web</Heading>
			<div className={socialGrid}>
				<div>
					<Heading level="4">Work</Heading>
					<ul className={horizontalList}>
						<li>
							<Link
								href="https://linkedin.com/in/wuz"
								target="_blank"
								rel="noreferrer"
							>
								<Linkedin />
							</Link>
						</li>
						<li>
							<Link href="https://dev.to/wuz" target="_blank" rel="noreferrer">
								<SiDevdotto />
							</Link>
						</li>
						<li>
							<Link
								href="https://github.com/wuz"
								target="_blank"
								rel="noreferrer"
							>
								<SiGithub />
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<Heading level="4">Socials</Heading>
					<ul className={horizontalList}>
						<li>
							<Link
								href="https://bsky.app/profile/wuz.sh"
								target="_blank"
								rel="noreferrer"
								aria-label="Bluesky profile"
							>
								<SiBluesky />
							</Link>
						</li>
						<li>
							<Link
								href="https://twitch.tv/hasbeenwizards"
								target="_blank"
								rel="noreferrer"
								aria-label="Twitch profile"
							>
								<SiTwitch />
							</Link>
						</li>
						<li>
							<Link
								href="https://threads.net/lich.dad"
								target="_blank"
								rel="noreferrer"
								aria-label="Threads profile"
							>
								<SiThreads />
							</Link>
						</li>
						<li>
							<Link
								href="https://instagram.com/conlindurbin"
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram profile"
							>
								<SiInstagram />
							</Link>
						</li>
						<li>
							<Link
								href="https://www.flickr.com/photos/192700574@N03/"
								target="_blank"
								rel="noreferrer"
								aria-label="Flickr profile"
							>
								<SiFlickr />
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<Heading level="4">Stats &amp; Reviews</Heading>
					<ul className={horizontalList}>
						<li>
							<Link
								href="https://letterboxd.com/wuz/"
								target="_blank"
								rel="noreferrer"
							>
								<SiLetterboxd />
							</Link>
						</li>
						<li>
							<Link
								href="https://www.last.fm/user/lichdad"
								target="_blank"
								rel="noreferrer"
							>
								<SiLastdotfm />
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<Heading level="4">Unused, but existing</Heading>
					<ul className={horizontalList}>
						<li>
							<Link
								href="https://twitter.com/itswuz"
								target="_blank"
								rel="noreferrer"
							>
								<SiX />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SocialGrid;
