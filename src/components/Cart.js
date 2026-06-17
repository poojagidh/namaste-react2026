import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemList from "./CartItemList";
import {
    clearCart,
    selectCartSubtotal,
} from "../utils/cartSlice";

const DELIVERY_FEE = 40;
const FREE_DELIVERY_MIN = 500;

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const subtotal = useSelector(selectCartSubtotal);
    const dispatch = useDispatch();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const deliveryFee = subtotal >= FREE_DELIVERY_MIN || subtotal === 0 ? 0 : DELIVERY_FEE;
    const total = subtotal + deliveryFee;

    const handleClearCart = () => {
        dispatch(clearCart());
        setOrderPlaced(false);
    };

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        dispatch(clearCart());
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Cart</h1>
                <p className="text-gray-500">Review your selected items before checkout.</p>
            </div>

            {orderPlaced && (
                <div className="w-full md:w-9/12 lg:w-8/12 m-auto mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center">
                    Order placed successfully! Your food will arrive soon.
                </div>
            )}

            <div className="w-full md:w-9/12 lg:w-8/12 m-auto bg-white border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm">
                {cartItems.length !== 0 && (
                    <div className="flex justify-end mb-3">
                        <button
                            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                            onClick={handleClearCart}
                        >
                            Clear cart
                        </button>
                    </div>
                )}

                {cartItems.length === 0 ? (
                    <h1 className="text-center text-xl font-semibold text-gray-600 py-8">
                        Cart is empty
                    </h1>
                ) : (
                    <>
                        <CartItemList items={cartItems} />

                        <div className="mt-6 border-t border-gray-100 pt-6 space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span data-testid="cartSubtotal">₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Delivery Fee</span>
                                <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                            </div>
                            {subtotal > 0 && subtotal < FREE_DELIVERY_MIN && (
                                <p className="text-sm text-orange-500">
                                    Add ₹{FREE_DELIVERY_MIN - subtotal} more for free delivery
                                </p>
                            )}
                            <div className="flex justify-between text-lg font-bold text-gray-800 border-t border-gray-100 pt-3">
                                <span>Total</span>
                                <span data-testid="cartTotal">₹{total}</span>
                            </div>

                            <button
                                className="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default Cart;
