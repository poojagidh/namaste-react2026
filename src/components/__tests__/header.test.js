import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load header with a login button", () => {

    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const LoginButton = screen.getByRole("button", { name: "Login" });
    expect(LoginButton).toBeInTheDocument();
});

it("Should change login button to logout onclick", () => {

    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const LoginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(LoginButton);
    expect(LoginButton).not.toHaveTextContent("Login");
    expect(LoginButton).toHaveTextContent("Logout");
});

it("Should render a header with cart items count", () => {

    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});