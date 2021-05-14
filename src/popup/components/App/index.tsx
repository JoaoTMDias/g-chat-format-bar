import React, { useEffect } from 'react';
import { List } from '../list';
import { MessageController } from '../../context/message-controller';
import { IconsList } from '../../data/icons';
import { ITextbox } from '../../index';
import * as Styles from '../styles';

interface IAppProps {
  items: ITextbox[];
}

export default function App({ items }: IAppProps) {
  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;

        console.log(url);
      });
  }, []);
  useEffect(() => {
    if (items?.length > 0) {
      items.forEach((item) => {
        item.input.addEventListener('focus', () => {
          console.log('recebeu foco');
        });
      });
    }
  });

  return (
    <MessageController>
      <Styles.Global />
      <Styles.Toolbar>
        <Styles.Header>
          <h1 className="title">G-Chat Format Text</h1>
        </Styles.Header>
        <List list={IconsList} />
      </Styles.Toolbar>
    </MessageController>
  );
}
