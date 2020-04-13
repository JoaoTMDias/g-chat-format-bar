import React from "react";
import { List } from "./components/list";
import { MessageController } from "./context/message-controller";
import { IconsList } from "./data/icons";
import "./styles/index.scss";

export default function App() {
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
