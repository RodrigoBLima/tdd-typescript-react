import { render, screen } from "@testing-library/react";
import Heading from '../pages/Heading'


test("render heading", () => {
  render(<Heading />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test("render heading with argument", () => {
  render(<Heading name={`World`} />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

