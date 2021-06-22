/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/**
 * messages-announcer.spec.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { mount } from "@cypress/react";
import React from "react";
import App from "../../../src/popup/components/App";

describe("<App />", () => {
	it("should render without errors", () => {
		mount(<App items={[]} />);
	});
});
