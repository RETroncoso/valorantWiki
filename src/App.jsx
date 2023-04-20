import Routes from "./routes/Routes";
import Header from "./components/Header/Header";
import Layout from "./pages/Layout/Layout";
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {
	return (
		<>
			<Layout>
				<Header />
				<Routes />
			</Layout>
			<GlobalStyles />
		</>
	);
}

export default App;
