import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<NavLink to="/" className="logo">
				Pizza Day
			</NavLink>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/menu">Menu</NavLink>
				<NavLink to="/posts">Posts</NavLink>
				<NavLink to="/order/new">Order</NavLink>
				<NavLink to="/auth">Auth</NavLink>
			</nav>
		</header>
	);
};

export default Header;
