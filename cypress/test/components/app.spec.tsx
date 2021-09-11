/* eslint-disable no-undef */
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-axe" />
/// <reference types="../../support/index" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
/**
 * app.spec.tsx
 *
 * @author João Dias <contacto@joaodias.me>
 * @since 1.0.0
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from "@cypress/react";
import App from "../../../src/popup/components/App";

beforeEach(() => {
	mount(<App />);
});

context("<App />", () => {
	beforeEach(() => {
		cy.injectAxe();
	});

	it("should render without errors", () => {
		cy.findByRole("heading", { level: 1 }).should("be.visible");

		cy.findByRole("toolbar")
			.should("be.visible")
			.within(() => {
				cy.findAllByRole("button").should("have.length", 7);
			});

		cy.findByLabelText("Message Preview:").should("be.visible");

		cy.findByRole("button", {
			name: "Copy Message to Clipboard",
		}).should("be.visible");
	});

	it("Has no detectable a11y violations on load", () => {
		cy.checkA11y("#__cy_root");
	});
});

context("<Toolbar />", () => {
	it("should have no option visibly selected at mount (focused)", () => {
		cy.findByRole("toolbar")
			.should("be.visible")
			.within(() => {
				cy.get(".is-selected").should("have.length", 1).and("be.visible");
				cy.findAllByRole("button").should("not.have.focus");
			});
	});

	it("should show a tooltip when an option has focus", () => {
		cy.findByRole("toolbar").within(() => {
			cy.findByTestId("button-bold").focus().type("{rightarrow}{rightarrow}");
			cy.findByTestId("button-strikethrough")
				.should("have.focus")
				.and("have.class", "is-selected")
				.after("content")
				.should("eq", "Strikethrough (⌘+S)");
		});
	});

	context("keyboard navigation", () => {
		it("should focus on the last item when pressing the left arrow on the first item", () => {
			cy.findByRole("toolbar").within(() => {
				cy.findByTestId("button-bold").focus().type("{leftarrow}");
				cy.findByTestId("button-code-block").should("have.focus").and("have.class", "is-selected");
			});
		});

		it("should focus on the first item when pressing the right arrow on the last item", () => {
			cy.findByRole("toolbar").within(() => {
				cy.findByTestId("button-code-block").focus().type("{rightarrow}");
				cy.findByTestId("button-bold").should("have.focus").and("have.class", "is-selected");
			});
		});

		it("should focus on the last item when pressing the end key on any item", () => {
			cy.findByRole("toolbar").within(() => {
				cy.findByTestId("button-bold").focus().type("{end}");
				cy.findByTestId("button-code-block").should("have.focus").and("have.class", "is-selected");
			});
		});

		it("should focus on the first item when pressing the home key on any item", () => {
			cy.findByRole("toolbar").within(() => {
				cy.findByTestId("button-code-block").focus().type("{home}");
				cy.findByTestId("button-bold").should("have.focus").and("have.class", "is-selected");
			});
		});
	});
});

context("Theme Changer", () => {
	const isNativeDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	let initialTheme: "dark" | "light";

	beforeEach(() => {
		initialTheme = isNativeDarkTheme ? "dark" : "light";
	});

	it("should load the system-based theme by default", () => {
		cy.get("html").should("have.attr", "data-theme", initialTheme);
	});

	it("should save the theme preferences to the local storage", () => {
		expect(localStorage.getItem("theme")).to.eq(`"${initialTheme}"`);
	});

	it("should change the theme to a light scheme", () => {
		const newTheme = "light";
		cy.findByTestId("select-theme").select(newTheme);

		cy.get("html")
			.should("have.attr", "data-theme", newTheme)
			.then(() => {
				expect(localStorage.getItem("theme")).to.eq(`"${newTheme}"`);
			});
	});
});

/**
 * Selects a portion of text in a sentence
 *
 * @param {string} word
 */
function selectText(word: string) {
	const element: HTMLTextAreaElement | null = document.querySelector("#messagePreviewTextarea");

	if (element) {
		const { value } = element;
		const start = value?.toLowerCase().indexOf(word.toLowerCase());
		const end = start ? start + word.length : value.length;

		element?.setSelectionRange(start, end);
	}
}

describe("Typing experience", () => {
	const options = [
		{
			sentence: "a simple text written in bold",
			word: "bold",
			buttonId: "button-bold",
			character: "*",
		},
		{
			sentence: "a simple text written in italic",
			word: "in italic",
			buttonId: "button-italic",
			character: "_",
		},
		{
			sentence: "a simple complex strikethrough text",
			word: "simple",
			buttonId: "button-strikethrough",
			character: "~",
		},
	];

	beforeEach(() => {
		cy.get("#messagePreviewTextarea").as("textarea");
	});

	it("should format words and parts of sentences", () => {
		options.forEach(({ sentence, word, buttonId, character }) => {
			const expected = sentence.replace(word, `${character}${word}${character}`);

			cy.get("@textarea")
				.type(sentence)
				.then(($element) => {
					selectText(word);

					cy.findByTestId(buttonId).click();

					cy.wrap($element).should("have.value", expected).clear();
				});
		});
	});
});
