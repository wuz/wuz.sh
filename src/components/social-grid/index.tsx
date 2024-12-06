import { horizontalList, socialGrid } from "./social-grid.css";
import {
  SiLinkedin,
  SiGithub,
  SiTwitch,
  SiBluesky,
  SiDevdotto,
  SiLetterboxd,
  SiLastdotfm,
  SiThreads,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Video } from "lucide-react";
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
              <a
                href="https://linkedin.com/in/wuz"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://dev.to/wuz" target="_blank" rel="noreferrer">
                <SiDevdotto />
              </a>
            </li>
            <li>
              <a href="https://github.com/wuz" target="_blank" rel="noreferrer">
                <SiGithub />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Heading level="4">Socials</Heading>
          <ul className={horizontalList}>
            <li>
              <a
                href="https://bsky.app/profile/lich.dad"
                target="_blank"
                rel="noreferrer"
              >
                <SiBluesky />
              </a>
            </li>
            <li>
              <a
                href="https://twitch.tv/hasbeenwizards"
                target="_blank"
                rel="noreferrer"
              >
                <SiTwitch />
              </a>
            </li>
            <li>
              <a
                href="https://threads.net/lich.dad"
                target="_blank"
                rel="noreferrer"
              >
                <SiThreads />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/lich.dad"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Heading level="4">Stats &amp; Reviews</Heading>
          <ul className={horizontalList}>
            <li>
              <a
                href="https://letterboxd.com/wuz/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLetterboxd />
              </a>
            </li>
            <li>
              <a
                href="https://www.last.fm/user/lichdad"
                target="_blank"
                rel="noreferrer"
              >
                <SiLastdotfm />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Heading level="4">Unused, but existing</Heading>
          <ul className={horizontalList}>
            <li>
              <a
                href="https://twitter.com/itswuz"
                target="_blank"
                rel="noreferrer"
              >
                <SiX />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SocialGrid;
