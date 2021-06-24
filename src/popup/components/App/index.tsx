import React from "react";
import { List } from "../list";
import { MessageController } from "../../context/message-controller";
import Header from "./header";
import * as Styles from "../styles";

export default function App() {
	return (
		<MessageController>
			<Styles.Global />
			<Styles.Container>
				<Header />
				<List />
			</Styles.Container>
		</MessageController>
	);
}
