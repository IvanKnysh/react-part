import MenuItem from "./MenuItem";
import pizzas from "../../../data";

const Menu = () => {
	return (
		<ul>
			{pizzas.map((item) => (
				<MenuItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default Menu;
