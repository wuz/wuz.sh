import {
  GridBreakout,
  GridLayout,
  GridLeft,
  GridRight,
  GridFull,
} from "@/components/grid-layout";
import Image from "next/image";
import me from "./me.jpeg";
import AutoGrid from "@/components/auto-grid";
import PostsDisplay from "@/components/posts-display";
import Header from "@/components/header";
import { Lead } from "@/components/type";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";
import Link from "next/link";
import { profileImage } from "./page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GridLayout>
          <GridLeft>
            <div className="flow">
              <h1>Conlin Durbin</h1>
              <h2>
                Senior Frontend Engineer at{" "}
                <Link href="https://whatnot.com" className="whatnot-yellow">
                  Whatnot
                </Link>
                . Typescripter. TTRPG-er.
              </h2>
            </div>
          </GridLeft>
          <GridRight>
            <div className="flow">
              <Lead>
                Howdy, I&apos;m Conlin. I live in Indianapolis and I love to
                travel. I currently work on App Platform at <em>Whatnot</em>,
                building performant, accessible frontends and establishing
                architectural principals for the web platform.
              </Lead>
              <Lead>
                I&apos;ve built frontends for companies like <em>HackerRank</em>
                , <em>Payscale</em>, and <em>Lessonly</em>. I&apos;ve also
                worked for wonderful startups like <em>Agora</em> and{" "}
                <em>Mimir</em>.
              </Lead>
              <Lead>
                I love the <em>weird web</em>, I collect{" "}
                <em>physical media formats</em>, I play lots of{" "}
                <em>tabletop roleplaying games</em>, and I love to cook,
                especially <em>Korean food</em>.
              </Lead>
            </div>
          </GridRight>
          <GridBreakout>
            <div className={profileImage}>
              <Image
                priority
                src={me}
                alt="A picture of me"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </GridBreakout>
          <GridRight>
            <PostsDisplay />
          </GridRight>
          <GridFull>
            <AutoGrid>
              <div>
                <h3>Socials</h3>
                <ul>
                  <li>
                    <a href="https://linkedin.com/in/wuz">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://dev.to/wuz">dev.to</a>
                  </li>
                  <li>
                    <a href="https://github.com/wuz">Github</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/CaffeinatedLich">
                      Twitter / X
                    </a>
                  </li>
                  <li>
                    <a href="https://bsky.app/profile/lich.dad">bluesky</a>
                  </li>
                </ul>
              </div>
              <Projects />
              <WorkHistory />
            </AutoGrid>
          </GridFull>
        </GridLayout>
      </main>
    </>
  );
}
