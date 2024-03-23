import { useState } from "react";

import pizzas from "../../../data";

const Menu = () => {
	const [data] = useState(pizzas);

	return (
		<ul>
			{data.map((item) => (
				<li className="pizza" key={item.id}>
					<img src={item.imageUrl} className="pizza__image" />
					<div className="pizza__info">
						<p className="pizza__name">{item.name}</p>
						<p className="pizza__ingredients">{item.ingredients.join(", ")}</p>
						<div className="pizza__actions">
							{item.soldOut ? (
								<p className="pizza__price">Sold out</p>
							) : (
								<>
									<p className="pizza__price">€{item.unitPrice}</p>
									<button className="button">Add to cart</button>
								</>
							)}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Menu;
