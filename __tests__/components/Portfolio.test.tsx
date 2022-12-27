import { act, render, screen } from "@testing-library/react";
import React from "react";
import Portfolio from "../../components/Portfolio";

const onChangeMock = jest.fn();

const sampleShows = [
  {
    "id": "a1",
    "title": "Gaycation",
    "episodes": 24,
    "imageUrl": "/gaycation.jpg",
    "imageUrlThumb": "/gaycation_thumb.jpg"
  },
  {
    "id": "b2",
    "title": "Huang's World",
    "episodes": 12,
    "imageUrl": "/huangsworld.jpg",
    "imageUrlThumb": "/huangsworld_thumb.jpg"
  }
];

test("Portfolio renders correctly and click callback works", () => {
  render(<Portfolio shows={sampleShows} onChange={onChangeMock} />);

  const thumb1 = screen.getAllByRole("img", { name: "Gaycation" })[0];
  const thumb2 = screen.getByRole("img", { name: "Huang's World" });
  const big = screen.getAllByRole("img", { name: "Gaycation" })[1];

  expect(thumb1).toHaveAttribute("src", expect.stringMatching(/gaycation_thumb\.jpg/));
  expect(thumb2).toHaveAttribute("src", expect.stringMatching(/huangsworld_thumb\.jpg/));
  expect(big).toHaveAttribute("src", expect.stringMatching(/gaycation\.jpg/));

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Gaycation",
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText("Episodes: 24")
  ).toBeInTheDocument();

  act(() => {
    screen.getByRole("button", {
      name: "Huang's World"
    }).click();
  });

  expect(onChangeMock).toBeCalledTimes(1);
  expect(onChangeMock).toBeCalledWith("b2");
});

test("Portfolio renders correctly with second image preselected", () => {
  render(<Portfolio shows={sampleShows} onChange={onChangeMock} currentId="b2" />);

  const big = screen.getAllByRole("img", { name: "Huang's World" })[1];
  expect(big).toHaveAttribute("src", expect.stringMatching(/huangsworld\.jpg/));

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Huang's World",
    })
  ).toBeInTheDocument();

  expect(
    screen.getByText("Episodes: 12")
  ).toBeInTheDocument();
});
