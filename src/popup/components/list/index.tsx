import { useState, useEffect, useRef, useCallback } from "preact/compat";
import { useMount } from "react-use";
import { IListType } from "../../data/interfaces/list";
import { useMessage } from "../../context/useMessage";
import { IconsList as list } from "../../data/icons";
import CopyToClipboard from "../copy-to-clipboard";
import Toolbar from "../toolbar";
import styles from "./index.module.scss";

/**
 * Main Content
 *
 * @export
 * @returns {JSX.Element}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const List = () => {
	const ref = useRef<HTMLTextAreaElement>(null);
	const { dispatch } = useMessage();
	const [isDisabled, setIsDisabled] = useState(true);

	useMount(() => {
		if (ref && ref.current) {
			dispatch({
				type: "REGISTER",
				payload: ref,
			});
		}
	});

	useEffect(() => {
		if (ref.current) {
			const hasContent = ref.current?.value.length > 0;

			setIsDisabled(!hasContent);
		}
	}, [ref.current?.value]);

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

	const handleOnChangeTextArea = useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			const hasContent = event.target.value;

			setIsDisabled(!hasContent);
		},
		[setIsDisabled],
	);

	return (
		<main>
			<form className={styles.form}>
				<Toolbar textareaId="messagePreviewTextarea" list={list} handleOnSelect={handleOnSelect} />
				<label htmlFor="messagePreviewTextarea" className="sr-only">
					Message Preview:
				</label>
				<textarea
					ref={ref}
					id="messagePreviewTextarea"
					className={styles.textarea}
					placeholder="Write a message..."
					spellCheck={false}
					onChange={handleOnChangeTextArea}
					rows={10}
				/>
				<CopyToClipboard
					type="button"
					disabled={isDisabled}
					data-tooltip="Copy Message to Clipboard"
					onClick={handleCopyToClipboard}
				/>
			</form>
		</main>
	);
};
