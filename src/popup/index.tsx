/// <reference types="chrome"/>
import { render } from "preact";
import App from "./components/App";

chrome.tabs.query({ active: true, currentWindow: true }, () => {
	const root = document.getElementById("g-chat-react-root");

	if (root) {
		render(<App />, root);
	}
});
