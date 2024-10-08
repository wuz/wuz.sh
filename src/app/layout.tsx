import type { Metadata } from "next";
import "@fontsource-variable/public-sans";
import { themeClass } from "./theme.css";
import "./global.css";
import Favicon from "@/components/favicon";

export const metadata: Metadata = {
  title: "Conlin Durbin",
  description: "Senior Frontend Engineer. Typescripter. TTRPG-er",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Favicon />
        <script
          defer
          data-domain="wuz.sh"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className={themeClass}>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
