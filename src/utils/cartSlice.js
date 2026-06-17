import { createSlice } from "@reduxjs/toolkit";

const getItemPrice = (item) => item.price ?? item.defaultPrice ?? 0;

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseItem: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex === -1) return;

            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
            } else {
                state.items.splice(itemIndex, 1);
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const selectCartItemCount = (state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state) =>
    state.cart.items.reduce(
        (total, item) => total + getItemPrice(item) * item.quantity,
        0
    );

export const { addItem, decreaseItem, removeItem, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
