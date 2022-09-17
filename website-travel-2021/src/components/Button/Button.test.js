import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Button from "./Button";

// TODO: isDisabled button test
test("should not allowed click button id isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// TODO: loading / spinner button test
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

// TODO: link with props isExternal
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

// TODO: link button no external
test("Should render <link> tag", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
