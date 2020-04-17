import React from "react";
import { List } from "./components/list";
import { MessageController } from "./context/message-controller";
import { IconsList } from "./data/icons";
import "./styles/index.scss";
import DummyTextbox from "./components/dummy";

export default function App() {
  return (
    <div>
      <DummyTextbox />
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
    </div>
  );
}
