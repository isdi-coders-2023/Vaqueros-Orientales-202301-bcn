import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Given a Form component with a submit button", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create Event'", () => {
      const expectedText = "Create Event";
      render(<Form />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
