import React from "react";
import Nav from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(<Nav />);
  });
  //snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    //assert value comparision
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    const { getByLabelText } = render(<Nav />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visable", () => {
  it("inserts text into the links", () => {
    //Arrange
    const { getByTestId } = render(<Nav />);
    //Assert
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("about")).toHaveTextContent("About Me");
  });
});
