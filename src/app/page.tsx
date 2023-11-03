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
import Alert from "@/components/alert";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GridLayout>
          <GridLeft>
            <div className="flow">
              <h1>Conlin Durbin</h1>
              <h2>Staff Frontend Engineer. Typescripter. TTRPG-er.</h2>
              <Alert>
                <h3>I&apos;m looking for work!</h3>
                <p>
                  Check out my{" "}
                  <a href="https://docs.google.com/document/d/1eZOEDUWytY6IezWSk0_NlCE_YmcYQeRx7Ti2jJ9805c/edit?usp=sharing">
                    resume
                  </a>
                </p>
              </Alert>
            </div>
          </GridLeft>
          <GridRight>
            <div className="flow">
              <Lead>
                Howdy, I&apos;m Conlin. I live in Indianapolis and I love to
                travel. I&apos;ve built frontends for companies like{" "}
                <em>HackerRank</em>, <em>Payscale</em>, and <em>Lessonly</em>.
                I&apos;ve also worked for wonderful startups like <em>Agora</em>{" "}
                and <em>Mimir</em>.
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
            <div style={{ height: 450, position: "relative" }}>
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
