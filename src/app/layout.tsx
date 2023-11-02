import type { Metadata } from "next";
import "@fontsource-variable/public-sans";
import { themeClass } from "./theme.css";
import "./global.css";
import Favicon from "@/components/favicon";

export const metadata: Metadata = {
  title: "Conlin Durbin",
  description: "Staff Frontend Engineer. Typescripter. TTRPG-er",
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
      </head>
      <body className={themeClass}>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
