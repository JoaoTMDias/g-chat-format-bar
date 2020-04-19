import React, { useRef, useContext } from "react";
import { useRovingTabIndex, useFocusEffect } from "react-roving-tabindex";
import { IList } from "../data/interfaces/list";

// Assets
import {
  IconBold,
  IconItalic,
  IconStrike,
  IconList,
  IconNumberedList,
  IconInlineCode,
  IconCodeBlock
} from "./icons/index";
import { MessageControllerContext } from "../context/message-controller-context";

export const Button: React.FC<IList> = ({
  id,
  value,
  label,
  type,
  tooltip,
  disabled = false
}) => {
  const { onClickOnButton } = useContext(MessageControllerContext);
  const ref = useRef<HTMLButtonElement>(null);
  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(
    ref,
    disabled
  );

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

    if (event.key === "enter" || event.key === "space") {
      dispatchProp();
    }
  }

  function renderButtonIcon(): React.ReactElement {
    switch (type) {
      default:
      case "bold":
        return <IconBold />;

      case "italic":
        return <IconItalic />;

      case "strikethrough":
        return <IconStrike />;

      case "list":
        return <IconList />;

      case "numbered":
        return <IconNumberedList />;

      case "inline-code":
        return <IconInlineCode />;

      case "code-block":
        return <IconCodeBlock />;
    }
  }

  return (
    <button
      ref={ref}
      id={id}
      className="g-chat-format-bar__button"
      data-testid={id}
      value={value}
      onKeyUp={onKeyUp}
      onClick={onClick}
      aria-label={label}
      data-tooltip={tooltip}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={tabIndex}
    >
      {renderButtonIcon()}
    </button>
  );
};

export default Button;
