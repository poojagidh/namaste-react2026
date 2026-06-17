import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

beforeAll(() => {
    console.log("beforeAll");
});
beforeEach(() => {
    console.log("beforeEach");
});
afterAll(() => {
    console.log("afterAll");
});
afterEach(() => {
    console.log("afterEach");
});

test("Should load Contact us component", () => {
    render(<Contact />);
    const contactElement = screen.getByText("Contact us");
    expect(contactElement).toBeInTheDocument();
});

test("Should load button", () => {
    render(<Contact />);
    const buttonElement = screen.getByRole("button", { name: "Send Message" });
    expect(buttonElement).toBeInTheDocument();
});