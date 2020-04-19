import { createContext } from "react";
import { IListType } from "../data/interfaces/list";

export interface IMessageControllerContext {
  input: Element | null;
  onClickOnButton: (type: IListType) => void;
}

const initialContext = {
  input: null,
  onClickOnButton: () => { }
};

export const MessageControllerContext = createContext<
  IMessageControllerContext
>(initialContext);
