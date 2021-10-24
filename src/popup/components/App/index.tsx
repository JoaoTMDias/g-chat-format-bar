import React from "preact";
import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";
import { List } from "../list";
import { MessageController } from "../../context/message-controller";
import ThemeProvider from "../../context/theme/provider";
import Header from "../header";
import "./global.scss";

const App: React.FunctionComponent = () => (
	<ThemeProvider>
		<MessagesAnnouncer>
			<MessageController>
				<div className="app__container">
					<Header />
					<List />
				</div>
			</MessageController>
		</MessagesAnnouncer>
	</ThemeProvider>
);

export default App;
