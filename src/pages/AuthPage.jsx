import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";

const AuthPage = () => {
	return (
		<>
			<h1 className="title">Auth</h1>

			<Form>
				<Input type="text" placeholder="Your email" />
				<Button text="Login" />
			</Form>
		</>
	);
};

export default AuthPage;
