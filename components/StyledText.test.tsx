import * as React from "react";
import { screen, render } from "@testing-library/react-native";

import { MonoText } from "./StyledText";

it(`renders correctly`, async () => {
  render(<MonoText>Snapshot test!</MonoText>);

  const element = await screen.findByText("Snapshot test!");
  expect(element).toBeOnTheScreen();
});
