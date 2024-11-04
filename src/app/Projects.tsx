import { Heading } from "@/components/type";

const Projects = () => {
	return (
		<div>
			<Heading level="3">Projects</Heading>
			<ul>
				<li>
					<a href="https://dmpad.app">dmpad</a> &mdash; A note taking
					application for dungeon masters.
				</li>
				<li>
					<a href="https://hasbeenwizards.com">HasBeenWizards</a> &mdash; Side
					project, creating tabletop roleplaying games
				</li>
				<li>
					<a href="https://github.com/wuz/cantrip.nvim">cantrip.nvim</a> &mdash;
					Neovim + dark magic
				</li>
			</ul>
		</div>
	);
};

export default Projects;
