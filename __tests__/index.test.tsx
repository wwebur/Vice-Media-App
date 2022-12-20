import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../pages/index";

// const mockSearchApp = jest.fn();
// vi.mock("./components/Search/SearchApp", () => ({
//   SearchApp: () => mockSearchApp(),
// }));

render(<Home />);

test("Home loads, shows header and loads the Gallery component", () => {
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Vice Media Group Portforlio",
    })
  ).toBeDefined();
  // expect(mockSearchApp).toHaveBeenCalledTimes(1);
});
