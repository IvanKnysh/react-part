import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AuthPage from "./pages/AuthPage";

import Header from "./components/Header/Header";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/auth" element={<AuthPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
