/*
 * The copyright of this file belongs to Feedzai. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Feedzai, Rights Reserved.
 */

/**
 * useTabbable.ts
 *
 * An abstract hook that makes elements perceivable for keyboard users.
 *
 * @author João Dias <contacto@joaodias.me>
 * @since ```feedzai.next.release```
 */
import { useMemo, HTMLAttributes } from "react";
import { useDisableEvent, UseDisableEventReturns } from "./useDisableEvent";

export type HTMLElementsSupportDisable =
	| HTMLButtonElement
	| HTMLInputElement
	| HTMLTextAreaElement
	| HTMLSelectElement;

export type HTMLTabbableExtendedAttributes = {
	/**
	 * Same as the HTML attribute.
	 */
	disabled?: boolean;

	/**
	 * When an element is `disabled`, it may still be `focusable`. It works
	 * similarly to `readOnly` on form elements. In this case, only
	 * `aria-disabled` will be set.
	 *
	 *
	 * @type {boolean}
	 * @memberof HTMLTabbableElement
	 */
	focusable?: boolean;
};

export type THTMLTabbableComponent<GenericProps> = GenericProps & HTMLTabbableExtendedAttributes;

export type HTMLTabbableElement<GenericProps> = HTMLAttributes<HTMLElementsSupportDisable> &
	THTMLTabbableComponent<GenericProps>;

export interface ITabbableAttributes {
	disabled?: boolean;
	"aria-disabled"?: HTMLAttributes<HTMLElement>["aria-disabled"];
}

export const DISABLE_STATE = {
	disabled: "DISABLED",
	semantic: "SEMANTIC",
	enabled: "ENABLED",
} as const;

export type IDisableStateReturn = "DISABLED" | "SEMANTIC" | "ENABLED";

export type IUseTabbableReturns<GenericProps> = HTMLTabbableElement<GenericProps> &
	ITabbableAttributes & {
		onClickCapture: UseDisableEventReturns;
		onMouseDownCapture: UseDisableEventReturns;
		onKeyPressCapture: UseDisableEventReturns;
	};

/**
 * Defines the disabled state of an HTML element.
 *
 * Its heuristics are:
 *
 * - Given that a button should be focusable with the keyboard:
 *      - When the `disabled` and the `focusable` props are both `true`, then the `disabled` attribute will remain `undefined`
 *      and the `aria-disabled` prop wil be `true` instead;
 *      - when the `disabled` is `true` and the `focusable` prop is `false`, then only the `disabled` attribute will be rendered onto the HTML.
 *
 * This way an assistive technology can still access the contents of an HTML element button without allowing the user to trigger any unintended
 * actions, such as activating a button or typing on a text input.
 *
 * @param {boolean} disabled
 * @param {boolean} [focusable]
 * @returns {ITabbableAttributes} disabled attributes that make a DOM element either disabled or enabled.
 */
export function getDisabledState(disabled?: boolean, focusable?: boolean): ITabbableAttributes {
	const isFocusableAndDisabled = focusable && disabled;
	const isNativelyDisabled = !focusable && disabled;

	switch (true) {
		case isNativelyDisabled:
			return {
				disabled: true,
				"aria-disabled": undefined,
			};

		case isFocusableAndDisabled:
			return {
				"aria-disabled": true,
				disabled: undefined,
			};

		case !disabled:
		default:
			return {
				"aria-disabled": undefined,
				disabled: false,
			};
	}
}

/**
 * An abstract hook that makes elements perceivable for keyboard users.
 * If the element is disabled, then it also disables any mouse or keyboard events to bubble up.
 *
 * @export
 * @param {HTMLTabbableElement} htmlProps
 * @returns {IUseTabbableReturns}
 */
export function useTabbable<GenericProps>(
	htmlProps: HTMLTabbableElement<GenericProps>,
): IUseTabbableReturns<GenericProps> {
	const { disabled, focusable } = htmlProps;
	const disabledState = useMemo(() => getDisabledState(disabled, focusable), [disabled, focusable]);
	const onClickCapture = useDisableEvent(disabled);
	const onMouseDownCapture = useDisableEvent(disabled);
	const onKeyPressCapture = useDisableEvent(disabled);

	return {
		...htmlProps,
		...disabledState,
		onClickCapture,
		onMouseDownCapture,
		onKeyPressCapture,
	};
}
