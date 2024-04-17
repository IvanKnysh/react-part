import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/pizzaSlice.js";

const CartPage = () => {
	const data = useSelector((state) => state.pizza);
	const dispatch = useDispatch();

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	return (
		<div className="cart">
			<h1 className="title">Cart</h1>
			<div className="cart-table">
				{data.items &&
					data.items.map((item) => (
						<div className="row" key={item.id}>
							<div className="col">
								<img src={item.imageUrl} alt={item.name} />
							</div>
							<div className="col">{item.name}</div>
							<div className="col">€{item.unitPrice}</div>
							<div className="col">Qty: {item.qty}</div>
							<div className="col">
								<button onClick={() => removeFromCartHandler(item.id)}>
									Remove
								</button>
							</div>
						</div>
					))}
				<div className="row">
					<div className="col">Quantity</div>
					<div className="col">{data.items.length}</div>
				</div>
				<div className="row">
					<div className="col">Total</div>
					<div className="col">€{data.totalPrice}</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
