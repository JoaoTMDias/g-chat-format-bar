// Libraries
import React, { HTMLProps, useCallback, useState, useEffect } from "react";
import { useMessagesAnnouncer } from "@feedzai/react-a11y-tools";
import classnames from "classnames";
import { useTabbable } from "../helpers";
import * as Styles from "./styles";
import IconCopy from "./icons/icon-copy";

// Interface
interface ICopyToClipboardProps extends HTMLProps<HTMLButtonElement> {
	"data-tooltip": string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
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
		...props,
		focusable: true,
		disabled,
	});

	const handleOnClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			setHasCopied(true);
			setMessage({
				text: "Message was copied to the clipboard",
			});
			onClick(event);
		},
		[setMessage, onClick, setHasCopied],
	);

	const cssClasses = classnames(className, {
		"has-copied-to-clipboard": hasCopied,
	});

	return (
		<Styles.CopyClipboard
			id={id}
			type={type}
			aria-label={props["data-tooltip"]}
			onClick={handleOnClick}
			aria-disabled={disabled}
			data-focusable={focusable}
			className={cssClasses}
			{...htmlProps}
		>
			<div className="content">
				<div className="message">
					<IconCopy />
					<span>Copy</span>
				</div>
				{hasCopied && (
					<div className="feedback">
						<IconCopy />
						<p aria-hidden="true">Copied!</p>
					</div>
				)}
			</div>
		</Styles.CopyClipboard>
	);
};

CopyToClipboard.displayName = "CopyToClipboard";

export default React.memo(CopyToClipboard);
