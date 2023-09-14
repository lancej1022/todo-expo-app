import { screen, render } from "@testing-library/react-native";
import * as React from "react";

import { TodoListLabel } from "./TodoListLabel";

it(`renders correctly`, async () => {
  const name = "grocery list";
  render(<TodoListLabel name={name} totalNumberOfTasks={147} />);

  // TODO: figure out how to render each TodoListLabel within an `li` and then query via that accessible role
  expect(screen.getByText(name)).toBeOnTheScreen();
  expect(screen.getByText("147")).toBeOnTheScreen();
});
