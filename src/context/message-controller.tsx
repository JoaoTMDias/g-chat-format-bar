import React from "react";
import {
  MessageControllerContext,
  IMessageControllerContext
} from "./message-controller-context";

export const MessageController: React.FunctionComponent = ({ children }) => {
  function _onClickOnButton(value) {
    console.log("value: ", value);
  }

  const value: IMessageControllerContext = {
    onClickOnButton: value => _onClickOnButton(value)
  };
  return (
    <MessageControllerContext.Provider value={value}>
      {children}
    </MessageControllerContext.Provider>
  );
};
