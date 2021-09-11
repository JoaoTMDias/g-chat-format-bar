// Libraries
import React, { useCallback, useState, useEffect } from "react";
import { useMessagesAnnouncer } from "@feedzai/react-a11y-tools";
import classnames from "classnames";
import { useTabbable } from "../../helpers";
import { IconCopy } from "../icons/index";
import styles from "./index.module.scss";

// Interface
interface ICopyToClipboardProps extends React.HTMLProps<HTMLButtonElement> {
	type?: "button" | "submit" | "reset";
	"data-tooltip": string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ICopyToClipboardProps>}
 */
const CopyToClipboard: React.FunctionComponent<ICopyToClipboardProps> = ({
	id = "copy-to-clipboard",
	type,
	onClick,
	disabled = false,
	className,
	...props
}) => {
	const setMessage = useMessagesAnnouncer();
	const [hasCopied, setHasCopied] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setHasCopied(false);
		}, 4750);

		return () => clearTimeout(timeout);
	}, [hasCopied]);
	const { focusable, ...htmlProps } = useTabbable({
		disabled,
		focusable: true,
	});

	const handleOnClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			setHasCopied(true);
			setMessage({
				text: "Message was copied to the clipboard",
			});

			if (onClick) {
				onClick(event);
			}
		},
		[setMessage, onClick, setHasCopied],
	);

	const cssClasses = classnames(styles["copy-to-clipboard"], className, {
		"has-copied-to-clipboard": hasCopied,
	});

	return (
		<button
			id={id}
			type={type}
			aria-label={props["data-tooltip"]}
			onClick={handleOnClick}
			aria-disabled={disabled}
			data-focusable={focusable}
			className={cssClasses}
			{...htmlProps}
		>
			<div className={styles["copy-to-clipboard__content"]}>
				<div className={styles["copy-to-clipboard__message"]}>
					<IconCopy />
					<span>Copy</span>
				</div>
				{hasCopied && (
					<div className={styles["copy-to-clipboard__feedback"]}>
						<IconCopy />
						<p aria-hidden="true">Copied!</p>
					</div>
				)}
			</div>
		</button>
	);
};

CopyToClipboard.displayName = "CopyToClipboard";

export default React.memo(CopyToClipboard);
