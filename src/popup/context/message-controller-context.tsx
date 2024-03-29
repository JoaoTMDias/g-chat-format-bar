import { RefObject } from "preact";
import { createContext } from "preact/compat";
import { IListType } from "../data/interfaces/list";

export type TReducerState = {
	text?: string;
	ref: RefObject<HTMLTextAreaElement> | null;
};

export type TReducerAction =
	| {
			type: "REGISTER";
			payload: RefObject<HTMLTextAreaElement>;
	  }
	| {
			type: "FORMAT";
			payload: IListType;
	  }
	| {
			type: "COPY_TO_CLIPBOARD";
	  };

export interface IMessageControllerContext {
	state: TReducerState;
	dispatch: (action: TReducerAction) => void;
}

const initialContext: IMessageControllerContext = {
	state: {
		text: "",
		ref: null,
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	dispatch: () => {},
};

export const MessageControllerContext = createContext<IMessageControllerContext>(initialContext);
