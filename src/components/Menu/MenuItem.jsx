import { useState } from "react";

const MenuItem = ({ item }) => {
	const [count, setCount] = useState(0);
	const [addToCart, setAddToCart] = useState(false);

	const subtractCountHandler = () => {
		setCount((prevState) =>
			prevState == 1 ? deleteCountHandler() : prevState - 1
		);
	};

	const addCountHandler = () => {
		setCount((prevState) => prevState + 1);
	};

	const deleteCountHandler = () => {
		setCount(0);
		setAddToCart(false);
	};

	const addToCartHandler = () => {
		setAddToCart(true);
		addCountHandler();
	};

	return (
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

							{addToCart ? (
								<div className="pizza__count">
									<button onClick={subtractCountHandler}>-</button>
									<span>{count}</span>
									<button onClick={addCountHandler}>+</button>
								</div>
							) : (
								<></>
							)}

							{count > 0 ? (
								<button className="button" onClick={deleteCountHandler}>
									Delete
								</button>
							) : (
								<button className="button" onClick={addToCartHandler}>
									Add to cart
								</button>
							)}
						</>
					)}
				</div>
			</div>
		</li>
	);
};

export default MenuItem;
