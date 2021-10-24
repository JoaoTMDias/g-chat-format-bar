import React from "preact";
import { memo } from "preact/compat";
import { RoverProvider } from "@feedzai/react-a11y-tools";
import { IListProps, IListType } from "../../data/interfaces/list";
import { Button } from "../button";
import styles from "./index.module.scss";

interface IToolbarProps {
	textareaId: string;
	list: IListProps["list"];
	handleOnSelect: (type: IListType) => void;
}

const Toolbar: React.FunctionComponent<IToolbarProps> = ({ textareaId, list, handleOnSelect }) => (
	<RoverProvider direction="horizontal">
		<span id="instructions" className="sr-only">
			Use the left and right navigation arrows to navigate between the list of buttons
		</span>
		<div
			id="toolbar"
			role="toolbar"
			aria-label="Format"
			aria-controls={textareaId}
			aria-describedby="instructions"
		>
			<ul className={styles.toolbar}>
				{list.map(({ id, value, shortcut, type, tooltip }) => (
					<li key={id} className={styles.item}>
						<Button
							id={id}
							value={value}
							shortcut={shortcut}
							type={type}
							tooltip={tooltip}
							onClick={handleOnSelect}
						/>
					</li>
				))}
			</ul>
		</div>
	</RoverProvider>
);

export default memo(Toolbar);
