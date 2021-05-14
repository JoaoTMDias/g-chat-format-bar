import React, { useEffect } from 'react';
import {
  MessageControllerContext,
  IMessageControllerContext,
} from './message-controller-context';
import { IListType } from '../data/interfaces/list';
import useGetTextBox from '../hooks/use-get-textbox';

export interface IMessageControllerProps {
  onClickOnBold?: () => void;
  onClickOnItalic?: () => void;
  onClickOnStrike?: () => void;
  onClickOnList?: () => void;
  onClickOnNumberedList?: () => void;
  onClickOnInlineCode?: () => void;
  onClickOnCodeBlock?: () => void;
  children: React.ReactNode;
}

export const MessageController: React.FunctionComponent = ({ children }) => {
  const [element, text, hasFocus] = useGetTextBox();

  function _onClickOnButton(type: IListType) {
    console.log('type: ', type);
  }

  const value: IMessageControllerContext = {
    input: element as Element,

    onClickOnButton: (value) => _onClickOnButton(value),
  };

  return (
    <MessageControllerContext.Provider value={value}>
      {children}
    </MessageControllerContext.Provider>
  );
};
