
import React from "react";
import Snowman from "./Snowman";
import { fireEvent, render, debug } from "@testing-library/react";
import * as words from "./words";

words.randomWord = jest.fn();

words.randomWord.mockReturnValue("apple");

it("renders without craching", () => {
  render(<Snowman />);
});

it("matches snapshots", () => {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});

it("should not allow users to keep playing after losing",()=>{
  words.randomWord.mockReturnValue("z");
  const { container, debug } = render(<Snowman />);
  let buttons = container.querySelectorAll("button");
  for (let i=0;i<7;i++){
    fireEvent.click(buttons[i]);
  }
  expect(container.querySelector(".letter-buttons")).not.toContainHTML("<button/>");
});