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
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { mount } from "@cypress/react";
import React from "react";
import App from "../../../src/popup/components/App";

describe("Components", () => {
	beforeEach(() => {
		mount(<App />);
	});

	describe("<App />", () => {
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

	describe("<Toolbar />", () => {
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
					cy.findByTestId("button-code-block")
						.should("have.focus")
						.and("have.class", "is-selected");
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
					cy.findByTestId("button-code-block")
						.should("have.focus")
						.and("have.class", "is-selected");
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
});
