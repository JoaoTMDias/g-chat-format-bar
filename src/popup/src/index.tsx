import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export interface ITextbox {
	input: HTMLElement;
	wrapper: HTMLElement | null;
	buttons?: HTMLElement | null;
}

/**
 * Gets and sets textbox attributes
 *
 * @param {{
 * 	input: HTMLElement,
 * 	index: number,
 * 	length: number
 * }} {
 * 	input,
 * 	index,
 * 	length
 * }
 * @returns
 */
function getTextBoxAttributes({
	input,
	index,
	length
}: {
	input: HTMLElement,
	index: number,
	length: number
}): ITextbox {
	const isLast = index === length;
	input.id = `textbox-${index}`;
	input.classList.add("textbox__input");

	const wrapper: HTMLElement | null = input.closest(".dJ9vNe");
	wrapper?.classList.add("textbox__wrapper");
	wrapper?.setAttribute("data-textbox-current", "false");

	const buttons: HTMLElement | null | undefined = wrapper?.querySelector(".EFNTcf[jsaction]");
	buttons?.classList.add("textbox__buttons");

	if (isLast) {
		wrapper?.setAttribute("data-textbox-current", "true");
		buttons?.classList.add("has-loaded-extension");
	}

	return {
		input: input,
		wrapper,
		buttons
	};
}

/**
 *
 *
 * @param {HTMLElement} node
 */
function queryDom(node: Element): ITextbox[] {
	const rawTextBoxes: HTMLElement[] = Array.from(node?.querySelectorAll("div[role='textbox']"));
	const totalSize = rawTextBoxes.length;

	const allTextBoxes = rawTextBoxes.map((element, index) => {
		return getTextBoxAttributes({
			input: element,
			index,
			length: totalSize - 1
		});
	});

	return allTextBoxes;
}

function findFirstTarget(all: ITextbox[]) {
	const startIndex = all.findIndex((element) => {
		if (element && element.buttons) {
			return element.buttons.classList.contains("has-loaded-extension");
		}

		return false;
	});

	if (startIndex >= 0) {
		return all[startIndex].buttons;
	}

	return null;
}

/**
 *
 *
 * @returns
 */
async function queryPageElements() {
	const mainContent = await document.querySelector("[role='main']");

	if (mainContent) {
		const items = queryDom(mainContent as HTMLElement);
		const first = findFirstTarget(items);
		const startNode = first || null;

		return {
			items,
			startNode
		};
	}

	return undefined;
}

try {
	queryPageElements()
		.then((data) => {
			if (data) {
				const app = document.createElement('div');
				app.id = "g-chat-react-root";

				const htmlNode = data?.startNode;

				htmlNode?.insertBefore(app, htmlNode?.childNodes[0]);

				ReactDOM.render(
					<React.StrictMode>
						<App items={data.items} />
					</React.StrictMode>,
					app
				);
			}
		})
} catch (error) {
	console.info("could not mount the widget");
}

