import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("render hello world", () => {
  const { getByText, getByLabelText, getByRole } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();

  const label = getByLabelText(/Current/i);
  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");
});

test("updates state when increment is called without shift", () => {
  const { getByRole } = render(<App />);

  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");

  userEvent.click(counter);
  expect(counter).toHaveTextContent("1");
});

test("updates state when increment is called  shift", () => {
  const { getByRole } = render(<App />);

  const counter = getByRole("counter");
  expect(counter).toHaveTextContent("0");

  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent("10");
});
