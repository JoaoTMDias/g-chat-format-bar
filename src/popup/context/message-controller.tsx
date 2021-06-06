import React, { useCallback, useReducer } from 'react';
import {
  MessageControllerContext,
  IMessageControllerContext,
  TReducerAction,
  TReducerState,
} from './message-controller-context';
import { IListType } from '../data/interfaces/list';

export interface IMessageControllerProps {
  children: React.ReactNode;
}

type TChars = {
  [key in IListType]: string;
};

const CHARS: TChars = {
  bold: '*',
  italic: '_',
  strikethrough: '~',
  'inline-code': '`',
  'code-block': '```',
  list: '- ',
  numbered: '1. ',
};

/**
 * Returns the correct character associated with a type of format
 *
 * @param {IListType} type
 * @returns {string}
 */
function getFormatChar(type: IListType) {
  return CHARS[type];
}

/**
 * Inserts the tags into the text
 *
 * @param {IListType} type
 * @param {string} text
 * @returns
 */
function insertTags(type: IListType, text: string) {
  const char = getFormatChar(type);

  switch (type) {
    case 'list':
    case 'numbered':
      return `${char}${text}`;

    default:
      return `${char}${text}${char}`;
  }
}

/**
 * Formats the textarea text
 *
 * @param {IListType} type
 * @param {HTMLTextAreaElement} element
 * @returns {string}
 */
function formatText(type: IListType, element: HTMLTextAreaElement) {
  let { value } = element;
  const textLength = value.length;
  const selectionIndex = {
    start: element.selectionStart,
    end: element.selectionEnd,
  };

  const selectedText = value.substring(
    selectionIndex.start,
    selectionIndex.end
  );
  let text = `${value}${insertTags(type, '')}`;

  if (selectedText.length > 0) {
    const beforeSelection = value.substring(0, selectionIndex.start);
    const afterSelection = value.substring(selectionIndex.end, textLength);
    const formattedSelection = insertTags(type, selectedText);

    text = `${beforeSelection}${formattedSelection}${afterSelection}`;
  }

  element.value = text;

  return text;
}

function copyToClipboard(element: HTMLTextAreaElement) {
  element.select();

  document.execCommand('copy');
}

/**
 * @param {TReducerState} state
 * @param {TReducerAction} action
 * @returns
 */
function reducer(state: TReducerState, action: TReducerAction) {
  switch (action.type) {
    case 'REGISTER':
      console.log('ref: ', action.payload);
      return {
        ...state,
        ref: action.payload,
      };

    case 'FORMAT':
      return {
        ...state,
        text: formatText(action.payload, state.ref.current),
      };

    case 'COPY_TO_CLIPBOARD':
      copyToClipboard(state.ref.current);
      return state;
    default:
      return state;
  }
}

export const MessageController: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ref: null });

  const value: IMessageControllerContext = {
    state,
    dispatch,
  };

  return (
    <MessageControllerContext.Provider value={value}>
      {children}
    </MessageControllerContext.Provider>
  );
};
