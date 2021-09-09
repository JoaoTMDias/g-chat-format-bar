declare global {
	namespace Cypress {
		interface Chainable<Subject = any> {
			/**
			 * Returns the pseudo-element property
			 *
			 * @param {string} property
			 * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
			 * @memberof Chainable
			 */
			after(property: string): Cypress.Chainable<JQuery<HTMLElement>>;
		}
	}
}
