import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { orderData } from "../redux/slices/pizzaSlice";

const schema = yup.object().shape({
	customer: yup.string().required("Name is required field"),
	phone: yup.string().required("Phone number is required field"),
	address: yup.string().required("Address is required field"),
});

const OrderPage = () => {
	const [formData, setFormData] = useState({});
	const [formError, setFormError] = useState("");
	const pizzas = useSelector((state) => state.pizza);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cartData = [];

	pizzas.items.forEach((item) => {
		cartData.push({
			pizzaId: item.id,
			name: item.name,
			quantity: item.qty,
			unitPrice: item.unitPrice,
			totalPrice: item.qty * item.unitPrice,
		});
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			customer: "",
			phone: "",
			address: "",
		},
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		const sendOrder = async () => {
			try {
				const response = await fetch(
					"https://react-fast-pizza-api.onrender.com/api/order",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							...formData,
							totalPrice: pizzas.totalPrice,
							cart: cartData,
						}),
					}
				);

				const responseData = await response.json();

				if (responseData.status === "fail") {
					setFormError(responseData.message);
				}

				if (responseData.status === "success") {
					dispatch(orderData(responseData.data));
					navigate("/order/" + responseData.data.id);
				}
			} catch (error) {
				setFormError(error.message);
			}
		};

		if (Object.keys(formData).length !== 0) {
			sendOrder();
		}
	}, [formData]);

	const onSubmit = (data) => {
		setFormData(data);
		reset();
	};

	return (
		<>
			<h1 className="title">Rady to order? Let`s go!</h1>
			{formError && (
				<div className="error-message" style={{ marginBottom: 20 }}>
					{formError}
				</div>
			)}

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="formItem">
					<label htmlFor="customer">Name</label>
					<input
						{...register("customer")}
						type="text"
						id="customer"
						placeholder="Name"
					/>
					<span className="error">{errors.customer?.message}</span>
				</div>

				<div className="formItem">
					<label htmlFor="phone">Phone number</label>
					<input
						{...register("phone")}
						type="text"
						id="phone"
						placeholder="Phone number"
					/>
					<span className="error">{errors.phone?.message}</span>
				</div>

				<div className="formItem">
					<label htmlFor="address">Address</label>
					<input
						{...register("address")}
						type="text"
						id="address"
						placeholder="Address"
					/>
					<span className="error">{errors.address?.message}</span>
				</div>

				<div className="formItem checkbox">
					<input {...register("priority")} type="checkbox" id="priority" />
					<label htmlFor="priority">Want to yo give your order priority?</label>
				</div>

				<button type="submit">Order now for €{pizzas.totalPrice}</button>
			</form>
		</>
	);
};

export default OrderPage;
