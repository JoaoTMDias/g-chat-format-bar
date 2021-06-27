import React from "react";
import { List } from "../list";
import { MessageController } from "../../context/message-controller";
import ThemeProvider from "../../context/theme/provider";
import Header from "./header";
import * as Styles from "../styles";

export default function App() {
	return (
		<ThemeProvider>
			<Styles.Global />
			<MessageController>
				<Styles.Container>
					<Header />
					<List />
				</Styles.Container>
			</MessageController>
		</ThemeProvider>
	);
}
