import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
	const [pizzas, setPizzas] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getAllPizzas = async () => {
			setIsLoading(true);

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
			} finally {
				setIsLoading(false);
			}
		};

		getAllPizzas();
	}, []);

	return (
		<ul className="menu">
			{error && <p>{error}</p>}
			{isLoading && <p>Loading...</p>}
			{pizzas.map((item) => (
				<MenuItem key={item.id} item={item} />
			))}
		</ul>
	);
};

export default Menu;
