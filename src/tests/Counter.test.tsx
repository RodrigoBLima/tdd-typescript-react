import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../pages/Counter";

test("should render a label and counter", () => {
  const handler = jest.fn();

  const { getByLabelText, getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );

  const label = getByLabelText("Count");
  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with a custom label", () => {
  const handler = jest.fn();

  const { getByLabelText, getByRole } = render(
    <Counter label={`Current`} count={0} onCounterIncrease={handler} />
  );

  const label = getByLabelText("Current");
  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

// test("should start at zero", () => {
//   const { getByRole } = render(<Counter />);

//   const counter = getByRole("counter");
//   expect(counter).toHaveTextContent("0");
// });

// test("should start at another value", () => {
//   const { getByRole } = render(<Counter start={10} />);

//   const counter = getByRole("counter");
//   expect(counter).toHaveTextContent("10");
// });

test("should the incrementer", () => {
  const handler = jest.fn();

  const { getByRole } = render(
    <Counter count={0} onCounterIncrease={handler} />
  );

  const counter = getByRole("counter");

  fireEvent.click(counter);
  expect(handler).toBeCalledWith(false);
});
