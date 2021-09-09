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
 * useDisableEvent.js
 *
 * Disables an event bubbling up on a DOM element
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since ```feedzai.next.release```
 */
import { useCallback } from "preact/compat";

export type UseDisableEventReturns = (event: React.SyntheticEvent) => void;

/**
	* @export
	* @param {boolean} [disabled]
	* @returns {UseDisableEventReturns}
	*/
// eslint-disable-next-line no-unused-vars
export function useDisableEvent(disabled?: boolean): UseDisableEventReturns {
	return useCallback(
		/**
		 * @param {SyntheticEvent} event
		 * @returns {void}
		 */
		(event: React.SyntheticEvent) => {
			// Returns early if the event has been prevented previously
			if (event.defaultPrevented) {
				return;
			}

			// If an element is disabled, then stops the event bubbling and prevents its
			// default behaviour
			if (disabled) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
		[disabled],
	);
}
