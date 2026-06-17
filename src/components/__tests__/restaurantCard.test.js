import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { resCardMock } from "../mocks/resCardMock";

it("Should render restaurant card with props", () => {
    render(
        <RestaurantCard
            resData={resCardMock}
        />
    );

    const name = screen.getByText("The Belgian Waffle Co.");
    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(
        <RestaurantCardPromoted
            resData={resCardMock}
        />
    );

    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
});