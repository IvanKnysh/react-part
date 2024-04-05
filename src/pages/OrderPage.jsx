import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required("First name is required field"),
	phone: yup.string().required("Phone number is required field"),
	address: yup.string().required("Address is required field"),
});

const OrderPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			name: "",
			phone: "",
			address: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<>
			<h1 className="title">Rady to order? Let's go!</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="formItem">
					<label htmlFor="name">First name</label>
					<input
						{...register("name")}
						type="text"
						id="name"
						placeholder="First name"
					/>
					<span className="error">{errors.name?.message}</span>
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

				<button type="submit">Order now for €39.00</button>
			</form>
		</>
	);
};

export default OrderPage;
