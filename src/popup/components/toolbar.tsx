import React, { memo } from "react";
import { RovingTabIndexProvider } from "react-roving-tabindex";
import { IListProps, IListType } from "../data/interfaces/list";
import { Button } from "./button";
import * as Styles from "./styles";

interface IToolbarProps {
	textareaId: string;
	list: IListProps["list"];
	handleOnSelect: (type: IListType) => void;
}

const Toolbar = ({ textareaId, list, handleOnSelect }: IToolbarProps) => {
	const items = list.map(({ id, value, shortcut, type, tooltip }) => {
		return (
			<Styles.ListItem key={id} role="presentation" className="g-chat-format-bar__list__item">
				<Button
					id={id}
					value={value}
					shortcut={shortcut}
					type={type}
					tooltip={tooltip}
					onClick={handleOnSelect}
				/>
			</Styles.ListItem>
		);
	});

	return (
		<RovingTabIndexProvider
			options={{
				direction: "horizontal",
				loopAround: true,
			}}
		>
			<span id="instructions" className="sr-only">
				Use the left and right navigation arrows to navigate between the list of buttons
			</span>
			<Styles.ToolbarList
				id="toolbar"
				role="toolbar"
				aria-label="Format"
				aria-controls={textareaId}
				aria-describedby="instructions"
			>
				{items}
			</Styles.ToolbarList>
		</RovingTabIndexProvider>
	);
};

export default memo(Toolbar);
