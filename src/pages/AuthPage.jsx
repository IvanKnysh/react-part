import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const AuthPage = () => {
	const { setUser } = useContext(AuthContext);
	const [userInput, setUserInput] = useState("");

	const navigate = useNavigate();

	const formHandler = (e) => {
		e.preventDefault();

		setUser(userInput);
		navigate("/menu");
	};

	return (
		<>
			<h1 className="title">Auth</h1>

			<form onSubmit={formHandler} className="login-form">
				<input
					type="text"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder="Your name"
				/>
				<button>Send</button>
			</form>
		</>
	);
};

export default AuthPage;
