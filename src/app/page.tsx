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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GridLayout>
          <GridLeft>
            <h1>Conlin Durbin</h1>
            <h2>Staff Frontend Engineer. Typescripter. TTRPG-er.</h2>
          </GridLeft>
          <GridRight>
            <p>
              Howdy, I&apos;m Conlin. I live in Indianapolis and I love to
              travel. I build incredible frontends for companies like{" "}
              <em>HackerRank</em>, <em>Payscale</em>, and <em>Lessonly</em>.
              I&apos;ve also worked for wonderful startups like <em>Agora</em>{" "}
              and <em>Mimir</em>. I love the <em>weird web</em>, I collect{" "}
              <em>physical media formats</em>, I play lots of{" "}
              <em>tabletop roleplaying games</em>, and I love to cook,
              especially <em>korean food</em>.
            </p>
          </GridRight>
          <GridBreakout>
            <div style={{ height: 450, position: "relative" }}>
              <Image
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
              <div>
                <h3>Projects</h3>
                <ul>
                  <li>
                    <a href="https://dmpad.app">dmpad</a> &mdash; A note taking
                    application for dungeon masters.
                  </li>
                  <li>
                    <a href="https://hasbeenwizards.com">HasBeenWizards</a>{" "}
                    &mdash; Side project, creating tabletop roleplaying games
                  </li>
                </ul>
              </div>
              <div>
                <h3>Work History</h3>
                <ul>
                  <li>Payscale &mdash; Tech Lead Manager</li>
                  <li>Agora &mdash; Senior Software Engineer</li>
                  <li>HackerRank &mdash; Senior Software Engineer</li>
                  <li>Lessonly &mdash; Software Engineer</li>
                  <li>Mimir &mdash; Founding Engineer</li>
                </ul>
              </div>
            </AutoGrid>
          </GridFull>
        </GridLayout>
      </main>
    </>
  );
}
