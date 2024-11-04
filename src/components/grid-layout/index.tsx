import type { ReactNode } from "react";
import { grid, gridLeft, gridRight, gridBreakout, gridFull } from "./grid.css";

type GridProps = {
	children: ReactNode;
};

export const GridLayout = ({ children }: GridProps) => {
	return <div className={grid}>{children}</div>;
};

type GridChildProps = {
	children: ReactNode;
};

export const GridLeft = ({ children }: GridChildProps) => {
	return <div className={gridLeft}>{children}</div>;
};

export const GridRight = ({ children }: GridChildProps) => {
	return <div className={gridRight}>{children}</div>;
};

export const GridBreakout = ({ children }: GridChildProps) => {
	return <div className={gridBreakout}>{children}</div>;
};

export const GridFull = ({ children }: GridChildProps) => {
	return <div className={gridFull}>{children}</div>;
};
