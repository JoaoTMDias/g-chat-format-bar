import { createContext } from 'react';
import { IListType } from '../data/interfaces/list';

export type TReducerState = {
  text?: string;
  ref: React.MutableRefObject<HTMLTextAreaElement>;
};

export type TReducerAction =
  | {
      type: 'REGISTER';
      payload: React.MutableRefObject<HTMLTextAreaElement>;
    }
  | {
      type: 'FORMAT';
      payload: IListType;
    }
  | {
      type: 'COPY_TO_CLIPBOARD';
    };

export interface IMessageControllerContext {
  state: TReducerState;
  dispatch: React.Dispatch<TReducerAction>;
}

const initialContext: IMessageControllerContext = {
  state: {
    text: '',
    ref: null,
  },
  dispatch: () => {},
};

export const MessageControllerContext =
  createContext<IMessageControllerContext>(initialContext);
