import React, { useRef, useCallback, useLayoutEffect } from 'react';
import { RovingTabIndexProvider } from 'react-roving-tabindex';
import { IListProps, IListType } from '../data/interfaces/list';
import { Button } from './button';
import IconCopy from './icons/icon-copy';
import { useMessage } from '../context/useMessage';
import * as Styles from './styles';

/**
 *
 *
 * @export
 * @param {IListProps} { list }
 * @returns
 */
export function List({ list }: IListProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const { dispatch } = useMessage();

  useLayoutEffect(() => {
    if (ref) {
      dispatch({
        type: 'REGISTER',
        payload: ref,
      });
    }
  }, []);

  const handleOnSelect = useCallback(
    (type: IListType) => {
      dispatch({
        type: 'FORMAT',
        payload: type,
      });
    },
    [dispatch]
  );

  const handleCopyToClipboard = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const hasContent = ref.current.value.length > 0;

      if (hasContent) {
        dispatch({
          type: 'COPY_TO_CLIPBOARD',
        });
      }
    },
    [dispatch]
  );

  const renderListItems = useCallback(() => {
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
            onClick={handleOnSelect}
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
  }, [list]);

  return (
    <main>
      <Styles.Wrapper>
        {renderListItems()}
        <label htmlFor="textarea" className="sr-only">
          Message Preview:
        </label>
        <Styles.Textarea
          ref={ref}
          id="textarea"
          placeholder="Write something..."
          spellCheck={false}
          rows={5}
        />
        <Styles.CopyClipboard
          id="copy-to-clipboard"
          type="button"
          data-tooltip="Copy Message to Clipboard"
          onClick={handleCopyToClipboard}
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
