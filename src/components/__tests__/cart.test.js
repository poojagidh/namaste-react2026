import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { clearCart } from "../../utils/cartSlice";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
});

beforeEach(() => {
    appStore.dispatch(clearCart());
});

it("Should load cart component and update header & cart details", async () => {
    await act(async () =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>
        )
    );

    expect(screen.getByTestId("cartCount")).toHaveTextContent("0");

    const accordionHeader = screen.getByText("Recommended (2)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    expect(addBtns.length).toBe(2);

    fireEvent.click(addBtns[0]);
    expect(screen.getByTestId("cartCount")).toHaveTextContent("1");
    expect(screen.getAllByText("Margherita Pizza").length).toBeGreaterThan(0);

    fireEvent.click(addBtns[1]);
    expect(screen.getByTestId("cartCount")).toHaveTextContent("2");
    expect(screen.getAllByText("Veggie Supreme").length).toBeGreaterThan(0);

    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByTestId("cartSubtotal")).toHaveTextContent("₹749");
    expect(screen.getByTestId("cartTotal")).toHaveTextContent("₹749");
    expect(screen.getByRole("button", { name: "Place Order" })).toBeInTheDocument();

    const clearBtn = screen.getByRole("button", { name: "Clear cart" });
    fireEvent.click(clearBtn);

    expect(screen.getByText("Cart is empty")).toBeInTheDocument();
    expect(screen.getByTestId("cartCount")).toHaveTextContent("0");
});

it("Should increase and decrease item quantity in cart", async () => {
    await act(async () =>
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>
        )
    );

    fireEvent.click(screen.getByText("Recommended (2)"));
    fireEvent.click(screen.getAllByRole("button", { name: "ADD" })[0]);

    expect(screen.getByTestId("itemQuantity")).toHaveTextContent("1");

    fireEvent.click(
        screen.getByRole("button", { name: "Increase Margherita Pizza" })
    );
    expect(screen.getByTestId("itemQuantity")).toHaveTextContent("2");

    fireEvent.click(
        screen.getByRole("button", { name: "Decrease Margherita Pizza" })
    );
    expect(screen.getByTestId("itemQuantity")).toHaveTextContent("1");
});
