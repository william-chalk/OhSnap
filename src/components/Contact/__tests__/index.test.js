import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact Component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Links are visable", () => {
  it("inserts text into links", () => {
    const { getByTestId } = render(<Contact />);

    expect(getByTestId("contact-me")).toHaveTextContent("Contact Me");
    expect(getByTestId("submit-btn")).toHaveTextContent("Submit");
  });
});
