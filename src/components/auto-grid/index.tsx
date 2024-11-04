import type { ReactNode } from "react";
import { autoGrid } from "./auto-grid.css";

type AutoGridProps = {
	children: ReactNode;
};

const AutoGrid = ({ children }: AutoGridProps) => {
	return <div className={autoGrid}>{children}</div>;
};

export default AutoGrid;
