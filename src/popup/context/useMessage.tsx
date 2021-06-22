import { useContext } from "react";
import { IMessageControllerContext, MessageControllerContext } from "./message-controller-context";

export function useMessage(): IMessageControllerContext {
	return useContext(MessageControllerContext);
}
