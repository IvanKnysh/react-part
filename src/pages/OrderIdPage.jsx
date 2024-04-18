import { useSelector } from "react-redux";

const OrderIdPage = () => {
	const order = useSelector((state) => state.pizza.orderData);

	return (
		<div className="order">
			<div>Customer: {order.customer}</div>
			<div>Status: {order.status}</div>
			<div>Estimated Delivery: {order.estimatedDelivery}</div>
			<div>Order Price: €{order.orderPrice}</div>
			<div>Priority Price: €{order.priorityPrice}</div>
			<div>Priority: {order.priority ? "Yes" : "No"}</div>

			<h2>Cart</h2>
			<ul>
				{order.cart.map((item) => (
					<div key={item.pizzaId}>
						<li>
							Name: {item.name} <br />
							Quantity: {item.quantity} <br />
							Total Price: €{item.totalPrice} <br />
						</li>
						<hr />
					</div>
				))}
			</ul>
		</div>
	);
};

export default OrderIdPage;
