import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
	totalItems: 0,
};

export const pizzaSlice = createSlice({
	name: "pizza",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const ifExists = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (ifExists) {
				ifExists.qty += 1;
			} else {
				action.payload.qty = 1;
				state.items.push(action.payload);
			}

			// totalPrice
			state.totalPrice = state.items.reduce((total, item) => {
				return total + item.qty * item.unitPrice;
			}, 0);

			// totalItems
			state.totalItems = state.items.reduce((total, item) => {
				return total + item.qty;
			}, 0);
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload);

			// totalPrice
			state.totalPrice = state.items.reduce((total, item) => {
				return total + item.qty * item.unitPrice;
			}, 0);

			// totalItems
			state.totalItems = state.items.reduce((total, item) => {
				return total + item.qty;
			}, 0);
		},
	},
});

export const { addToCart, removeFromCart } = pizzaSlice.actions;

export default pizzaSlice.reducer;
