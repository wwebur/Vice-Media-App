import { act, render, screen } from "@testing-library/react";
import React from "react";
import mockRouter from "next-router-mock";
import Home, { getServerSideProps } from "../../pages/index";

const SAMPLE_SHOWS = [
  {
    "id": "id-1",
    "episodes": 12,
    "title": "Huang's World",
    "product_image_url": "huangsworld.jpg",
    "product_image_url_thumb": "huangsworld_thump.jpg"
  },
  {
    "id": "id-2",
    "episodes": 32,
    "title": "VICE",
    "product_image_url": "vicehbo.jpg",
    "product_image_url_thumb": "vicehbo.jpg"
  },
];

const mockPortfolio = jest.fn();
jest.mock("../../components/Portfolio", () => (props) => mockPortfolio(props));

const mockGetShows = jest.fn(() => Promise.resolve(SAMPLE_SHOWS));
jest.mock("../../pages/api/shows", () => ({
  getShows: () => mockGetShows(),
}));

// eslint-disable-next-line global-require
jest.mock("next/router", () => require("next-router-mock"));

test("Home loads, shows header, loads the shows and passing them to the Gallery component", async () => {
  const props = await getServerSideProps();
  const { shows } = props.props;
  render(<Home shows={shows} />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Vice Media Group Portforlio",
    })
  ).toBeDefined();

  expect(mockGetShows).toHaveBeenCalledTimes(1);
  expect(mockPortfolio).toHaveBeenCalledTimes(1);
  expect(mockPortfolio).toBeCalledWith({
    onChange: expect.any(Function),
    shows: SAMPLE_SHOWS
  });
});

test("Passes the search param from the url to the Gallery component and back", async () => {
  const props = await getServerSideProps();
  const { shows } = props.props;
  mockRouter.setCurrentUrl("?id=some-id");
  render(<Home shows={shows} />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Vice Media Group Portforlio",
    })
  ).toBeDefined();

  expect(mockGetShows).toHaveBeenCalledTimes(1);
  expect(mockPortfolio).toHaveBeenCalledTimes(1);
  expect(mockPortfolio).toBeCalledWith({
    currentId: "some-id",
    onChange: expect.any(Function),
    shows: SAMPLE_SHOWS
  });

  act(() => {
    mockPortfolio.mock.calls[0][0].onChange("new-id");
  });
  expect(mockRouter.query).toStrictEqual({ "id": "new-id" });
});

test("Shows an error message if no shows loaded", () => {
  render(<Home shows={undefined} />);

  expect(mockPortfolio).not.toHaveBeenCalled();
  expect(screen.findByText("Something went wrong, please try again later")).toBeDefined();
});
