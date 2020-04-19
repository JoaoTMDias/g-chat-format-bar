import React, { useEffect } from "react";
import { List } from "./components/list";
import { MessageController } from "./context/message-controller";
import { IconsList } from "./data/icons";
import "./styles/index.scss";
import { ITextbox } from "index";

interface IAppProps {
  items: ITextbox[];
}

export default function App({ items }: IAppProps) {
  console.log("items: ", items);

  useEffect(() => {
    if (items?.length > 0) {
      items.forEach((item) => {
        item.input.addEventListener("focus", () => {
          console.log("recebeu foco");
        });
      })
    }
  })

  return (
    <MessageController>
      <div
        role="toolbar"
        aria-label="Text Formatting"
        aria-controls=""
        className="g-chat-format-bar"
      >
        <div className="g-chat-format-bar__wrapper">
          <List list={IconsList} />
        </div>
      </div>
    </MessageController>
  );
}
