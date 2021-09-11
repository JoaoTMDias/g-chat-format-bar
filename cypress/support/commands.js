/// <reference types="cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * commands.js
 *
 * @author João Dias <contacto@joaodias.me>
 * @since 1.0.0
 */
import "@testing-library/cypress/add-commands";
import "cypress-real-events/support";
import "cypress-axe";

/**
 *
 * @param {string} str
 * @returns
 */
function unquote(str) {
	return str.replace(/(^")|("$)/g, "");
}

Cypress.Commands.add(
	"after",
	{
		prevSubject: "element",
	},
	/**
	 * returns the pseudo-element property
	 *
	 * @param {Cypress.Chainable<JQuery<HTMLElement>>} subject
	 * @param {string} property
	 * @returns {Cypress.Chainable<string>}
	 */
	(subject, property) => {
		const win = subject[0].ownerDocument.defaultView;
		const after = win.getComputedStyle(subject[0], "after");
		return unquote(after.getPropertyValue(property));
	},
);
