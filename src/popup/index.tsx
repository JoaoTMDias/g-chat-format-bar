import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

export interface ITextbox {
  input: HTMLElement;
  wrapper: HTMLElement | null;
  buttons?: HTMLElement | null;
}

chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  ReactDOM.render(
    <App items={[]} />,
    document.getElementById('g-chat-react-root')
  );
});
