import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/pizzaSlice.js";

const MenuItem = ({ item }) => {
	const dispatch = useDispatch();

	const addToCartHandler = (item) => {
		dispatch(addToCart(item));
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

							<button className="button" onClick={() => addToCartHandler(item)}>
								Add to cart
							</button>
						</>
					)}
				</div>
			</div>
		</li>
	);
};

export default MenuItem;
