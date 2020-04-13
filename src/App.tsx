import React from "react";
import { List } from "./components/list";
import { MessageController } from "./context/message-controller";
import { IconsList } from "./data/icons";
import "./styles/index.scss";

export default function App() {
  return (
    <div>
      <div
        class="XganBc eLNT1d"
        jsname="Lkj7Q"
        data-placeholder="Message Emanuel Pedro"
        data-show-otr-toggle="false"
        data-include-non-members-in-autocomplete="false"
        data-is-off-the-record="false"
        data-is-room="false"
        data-is-compact="false"
        jsaction="click:ly7Bfc;"
      >
        <div
          class="oAzRtb krjOGe"
          jsname="g1zMPd"
          tabindex="0"
          role="textbox"
          aria-label="Message Emanuel Pedro. "
          contenteditable="true"
          spellcheck="true"
          dir="ltr"
        >
          asdasdsad
        </div>
      </div>
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
