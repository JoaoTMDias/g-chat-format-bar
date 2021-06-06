import React, { useContext } from 'react';
import { MessageControllerContext } from './message-controller-context';

export function useMessage() {
  return useContext(MessageControllerContext);
}
