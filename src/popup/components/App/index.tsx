import { MessagesAnnouncer } from "@feedzai/react-a11y-tools";
import { List } from "../list";
import { MessageController } from "../../context/message-controller";
import ThemeProvider from "../../context/theme/provider";
import Header from "./header";
import * as Styles from "../styles";

const App = () => {
	return (
		<ThemeProvider>
			<Styles.Global />
			<MessagesAnnouncer>
				<MessageController>
					<Styles.Container>
						<Header />
						<List />
					</Styles.Container>
				</MessageController>
			</MessagesAnnouncer>
		</ThemeProvider>
	);
};

export default App;
