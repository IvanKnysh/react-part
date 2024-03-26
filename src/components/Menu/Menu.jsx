import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
	const [pizzas, setPizzas] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const getAllPizzas = async () => {
			try {
				const response = await fetch(
					"https://react-fast-pizza-api.onrender.com/api/menu"
				);

				if (!response.ok) {
					throw new Error("Failed to fetch");
				}

				const { data } = await response.json();
				setPizzas(data);
			} catch (err) {
				setError(err.message);
			}
		};

		getAllPizzas();
	}, []);

	return (
		<ul>
			{error && <p>{error}</p>}
			{pizzas.map((item) => (
				<MenuItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default Menu;
