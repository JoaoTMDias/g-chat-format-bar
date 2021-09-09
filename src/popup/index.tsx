import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

chrome.tabs.query({ active: true, currentWindow: true }, () => {
	ReactDOM.render(<App />, document.getElementById("g-chat-react-root"));
});
