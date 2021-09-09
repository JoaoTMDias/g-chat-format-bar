import { useContext } from "preact/compat";
import { IMessageControllerContext, MessageControllerContext } from "./message-controller-context";

export function useMessage(): IMessageControllerContext {
	return useContext(MessageControllerContext);
}
