import React from "react";
import Snowman from "./Snowman";
import { fireEvent, render } from "@testing-library/react";

it("renders without craching", () => {
  render(<Snowman />);
});

it("matches snapshots", () => {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});
