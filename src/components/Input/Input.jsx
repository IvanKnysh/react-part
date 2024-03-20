const Input = ({ type, placeholder }) => {
	const defaultType = type ? type : "text";

	return <input type={defaultType} placeholder={placeholder} />;
};

export default Input;
