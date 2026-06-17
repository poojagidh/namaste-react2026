import { render, act, screen, fireEvent } from "@testing-library/react"
import Body from "../Body";
import resListMock from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(resListMock),
    });
});

it("Should search restaurant list for 'pizza' text input", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    // Verify initial load has all 15 restaurant cards
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(15);

    // Get search input and button
    const searchInput = screen.getByTestId("searchInput");
    const searchBtn = screen.getByRole("button", { name: "Search" });

    // Change input value to "pizza" and trigger search click
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    // Verify that the list is filtered to only the 3 matching restaurant cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(3);
});

it("Should filter top rated restaurants", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    // Verify initial load has 15 cards
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(15);

    // Get filter button and click it
    const filterBtn = screen.getByRole("button", {
        name: "Filter: Top Rated"
    });
    fireEvent.click(filterBtn);

    // Verify that the filtered list only shows top rated restaurants (avgRating > 4), which is 13 cards
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);
});