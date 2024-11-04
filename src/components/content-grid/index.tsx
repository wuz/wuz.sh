import type { ReactNode } from "react";
import { contentGrid } from "./content-grid.css";

type ContentGridProps = {
	children: ReactNode;
};

const ContentGrid = ({ children }: ContentGridProps) => {
	return <main className={contentGrid}>{children}</main>;
};

export default ContentGrid;
