import React from 'react';
import { RovingTabIndexProvider } from 'react-roving-tabindex';
import { IListProps } from '../data/interfaces/list';
import { Button } from './button';
import IconCopy from './icons/icon-copy';
import * as Styles from './styles';

export function List({ list }: IListProps) {
  function renderListItems() {
    const items = list.map(({ id, value, shortcut, type, tooltip }) => {
      return (
        <Styles.ListItem
          key={id}
          role="presentation"
          className="g-chat-format-bar__list__item"
        >
          <Button
            id={id}
            value={value}
            shortcut={shortcut}
            type={type}
            tooltip={tooltip}
          />
        </Styles.ListItem>
      );
    });

    return (
      <RovingTabIndexProvider
        options={{
          direction: 'horizontal',
          loopAround: true,
        }}
      >
        <Styles.ToolbarList
          role="toolbar"
          aria-label="Format"
          aria-controls="textarea"
          aria-describedby="instructions"
        >
          <span id="instructions" className="sr-only">
            Use the left and right navigation arrows to navigate between the
            list of buttons
          </span>
          {items}
        </Styles.ToolbarList>
      </RovingTabIndexProvider>
    );
  }

  return (
    <main>
      <Styles.Wrapper>
        {renderListItems()}
        <label htmlFor="textarea" className="sr-only">
          Message Preview:
        </label>
        <Styles.Textarea
          id="textarea"
          placeholder="Write something..."
          spellCheck={false}
          rows={5}
        />
        <Styles.CopyClipboard
          id="copy-to-clipboard"
          type="button"
          data-tooltip="Copy Message to Clipboard"
        >
          <IconCopy />
          <span>
            Copy<span className="sr-only">Message to Clipboard</span>
          </span>
        </Styles.CopyClipboard>
      </Styles.Wrapper>
    </main>
  );
}
