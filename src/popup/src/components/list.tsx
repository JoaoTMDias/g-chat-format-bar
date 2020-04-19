import React from "react";
import { RovingTabIndexProvider } from "react-roving-tabindex";
import { IListProps } from "../data/interfaces/list";
import { Button } from "./button";

export function List({ list }: IListProps) {
  function renderListItems() {
    const items = list.map(({ id, value, label, type, tooltip }) => {
      return (
        <li key={id} className="g-chat-format-bar__list__item">
          <Button
            id={id}
            value={value}
            label={label}
            type={type}
            tooltip={tooltip}
          />
        </li>
      );
    });

    return <ul className="g-chat-format-bar__list">{items}</ul>;
  }

  return (
    <div
      className="g-chat-format-bar__wrapper"
      aria-describedby="g-chat-format-bar-description"
    >
      <span id="g-chat-format-bar-description" className="sr-only">
        Use the left and right navigation arrows to navigate between the list of
        buttons
      </span>
      <RovingTabIndexProvider direction="horizontal">
        {renderListItems()}
      </RovingTabIndexProvider>
    </div>
  );
}
