import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create Event'", () => {
      const expectedText = "Create Event";

      render(<Form />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  test("Then it should show an input with the aria-label 'name of the Event'", () => {
    const expectedText = "name of the Event";

    render(<Form />);
    const ariaLabel = screen.getByLabelText(expectedText);

    expect(ariaLabel).toBeInTheDocument();
  });
});
