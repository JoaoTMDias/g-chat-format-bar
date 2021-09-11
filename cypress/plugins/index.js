/// <reference types="cypress" />
/// <reference types="vite" />

/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * index.js
 *
 * @author João Dias <contacto@joaodias.me>
 * @since 1.0.0
 */
const path = require("path");
const { startDevServer } = require("@cypress/vite-dev-server");

/**
 * @typedef {object} CypressServerConfiguration
 *
 * @property {Cypress.DevServerOptions} options the Cypress options object
 * @property {import("vite").UserConfig & { configFile: string }} [viteConfig] By default, vite will use your vite.config file to
 * 	Start the server. If you need additional plugins or to override some options, you can do so using this.
 */

/**
 *
 * @param {Cypress.PluginEvents} on
 * @param {Cypress.PluginConfigOptions} config
 * @returns {void}
 */
function pluginConfiguration(on, config) {
	on("dev-server:start", (options) => {
		const configFile = path.resolve(__dirname, "..", "..", "vite.config.ts");

		/**
		 * @type {CypressServerConfiguration}
		 */
		const args = {
			options,
			viteConfig: {
				configFile,
			},
		};

		return startDevServer(args);
	});
}

module.exports = pluginConfiguration;
