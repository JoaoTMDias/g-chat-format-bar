import { useRef, useCallback, FunctionComponent } from "preact/compat";
import classNames from "classnames";
import { useRover, useFocus } from "@feedzai/react-a11y-tools";
import { IList, IListType } from "../data/interfaces/list";
import * as Styles from "./styles";

// Assets
import {
	IconBold,
	IconItalic,
	IconStrike,
	IconList,
	IconNumberedList,
	IconInlineCode,
	IconCodeBlock,
} from "./icons";

const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

export type IButtonProps = IList & {
	onClick: (type: IListType) => void;
};

export const Button: FunctionComponent<IButtonProps> = ({
	id,
	value,
	type,
	shortcut,
	tooltip,
	disabled = false,
	onClick,
}) => {
	const ref = useRef<HTMLButtonElement>(null);
	const [tabIndex, focused, handleKeyDown, handleClick] = useRover(ref, disabled);
	const { current: systemIcon } = useRef(isMac ? "⌘" : "win");
	useFocus(ref, focused);

	const handleOnClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.preventDefault();

			handleClick();
			onClick(type);
		},
		[type, onClick, handleClick],
	);

	const handleOnKeyUp = useCallback(
		(event: React.KeyboardEvent<HTMLButtonElement>) => {
			handleKeyDown(event);

			if (event.key === "enter" || event.key === "space") {
				onClick(type);
			}
		},
		[handleKeyDown, onClick, type],
	);

	function renderButtonIcon() {
		switch (type) {
			default:
			case "bold":
				return <IconBold />;

			case "italic":
				return <IconItalic />;

			case "strikethrough":
				return <IconStrike />;

			case "list":
				return <IconList />;

			case "numbered":
				return <IconNumberedList />;

			case "inline-code":
				return <IconInlineCode />;

			case "code-block":
				return <IconCodeBlock />;
		}
	}

	const classes = classNames({
		"is-selected": tabIndex === 0,
	});

	const message = `${tooltip} (${systemIcon}+${shortcut.toUpperCase()})`;

	return (
		<Styles.Button
			ref={ref}
			id={id}
			className={classes}
			data-testid={id}
			value={value}
			onKeyUp={handleOnKeyUp}
			onClick={handleOnClick}
			data-tooltip={message}
			aria-disabled={disabled}
			aria-describedby="description"
			disabled={disabled}
			tabIndex={tabIndex}
		>
			{renderButtonIcon()}
			<span className="sr-only">{message}</span>
		</Styles.Button>
	);
};

export default Button;
