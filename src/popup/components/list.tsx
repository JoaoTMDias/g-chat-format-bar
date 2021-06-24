import React, { useRef, useCallback, useLayoutEffect } from "react";
import { IListType } from "../data/interfaces/list";
import IconCopy from "./icons/icon-copy";
import { useMessage } from "../context/useMessage";
import { IconsList as list } from "../data/icons";
import Toolbar from "./toolbar";
import * as Styles from "./styles";

export function List() {
	const ref = useRef<HTMLTextAreaElement>(null);
	const { dispatch } = useMessage();

	useLayoutEffect(() => {
		if (ref && ref.current) {
			dispatch({
				type: "REGISTER",
				payload: ref,
			});
		}
	}, []);

	const handleOnSelect = useCallback(
		(type: IListType) => {
			dispatch({
				type: "FORMAT",
				payload: type,
			});
		},
		[dispatch],
	);

	const handleCopyToClipboard = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.preventDefault();

			if (ref.current && ref.current.value.length > 0) {
				dispatch({
					type: "COPY_TO_CLIPBOARD",
				});
			}
		},
		[dispatch],
	);

	return (
		<main>
			<Styles.Wrapper>
				<Toolbar textareaId="messagePreviewTextarea" list={list} handleOnSelect={handleOnSelect} />
				<label htmlFor="messagePreviewTextarea" className="sr-only">
					Message Preview:
				</label>
				<Styles.Textarea
					ref={ref}
					id="messagePreviewTextarea"
					placeholder="Write something..."
					spellCheck={false}
					rows={10}
				/>
				<Styles.CopyClipboard
					id="copy-to-clipboard"
					type="button"
					data-tooltip="Copy Message to Clipboard"
					onClick={handleCopyToClipboard}
				>
					<IconCopy />
					<span>
						Copy<span className="sr-only">Message to Clipboard</span>
					</span>
				</Styles.CopyClipboard>
			</Styles.Wrapper>
		</main>
	);
}
