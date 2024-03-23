import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="content">
				<h1 className="title">
					The best pizza.
					<br />
					<span className="text-yellow">
						Straight out of the oven, straight to you.
					</span>
				</h1>
				<p className="sub-title">
					👋 Welcome! Please start by telling us your name:
				</p>

				<Form>
					<Input type="text" placeholder="Your full name" />
					<Button text="Login" />
				</Form>

				<Menu />
			</main>
		</div>
	);
}

export default App;
