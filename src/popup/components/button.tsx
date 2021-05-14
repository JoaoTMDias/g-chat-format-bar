import React, { useRef, useContext } from 'react';
import classNames from 'classnames';
import { useRovingTabIndex, useFocusEffect } from 'react-roving-tabindex';
import { IList } from '../data/interfaces/list';
import * as Styles from './styles';

// Assets
import {
  IconBold,
  IconItalic,
  IconStrike,
  IconList,
  IconNumberedList,
  IconInlineCode,
  IconCodeBlock,
} from './icons';
import { MessageControllerContext } from '../context/message-controller-context';

const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

export const Button: React.FC<IList> = ({
  id,
  value,
  type,
  shortcut,
  tooltip,
  disabled = false,
}) => {
  const { onClickOnButton } = useContext(MessageControllerContext);
  const ref = useRef<HTMLButtonElement>(null);
  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(
    ref,
    disabled
  );
  const { current: systemIcon } = useRef(isMac ? '⌘' : 'win');
  useFocusEffect(focused, ref);

  function dispatchProp() {
    if (onClickOnButton) {
      onClickOnButton(type);
    }
  }

  function onClick() {
    handleClick();
    dispatchProp();
  }

  function onKeyUp(event: React.KeyboardEvent<HTMLButtonElement>) {
    handleKeyDown(event);

    if (event.key === 'enter' || event.key === 'space') {
      dispatchProp();
    }
  }

  function renderButtonIcon(): React.ReactElement {
    switch (type) {
      default:
      case 'bold':
        return <IconBold />;

      case 'italic':
        return <IconItalic />;

      case 'strikethrough':
        return <IconStrike />;

      case 'list':
        return <IconList />;

      case 'numbered':
        return <IconNumberedList />;

      case 'inline-code':
        return <IconInlineCode />;

      case 'code-block':
        return <IconCodeBlock />;
    }
  }

  const classes = classNames({
    'is-selected': tabIndex === 0,
  });

  const message = `${tooltip} (${systemIcon}+${shortcut.toUpperCase()})`;

  return (
    <Styles.Button
      ref={ref}
      id={id}
      className={classes}
      data-testid={id}
      value={value}
      onKeyUp={onKeyUp}
      onClick={onClick}
      data-tooltip={message}
      aria-disabled={disabled}
      aria-describedby="description"
      disabled={disabled}
      tabIndex={tabIndex}
    >
      {renderButtonIcon()}
      <span className="sr-only">{message}</span>
    </Styles.Button>
  );
};

export default Button;
