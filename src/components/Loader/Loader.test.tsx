import { Loader } from "./Loader";
import { render, screen } from "@testing-library/react";

describe("Given the Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Please, wait'", () => {
      const text = "Please, wait";

      render(<Loader />);

      const expectedResult = screen.getByText(text);

      expect(expectedResult).toBeInTheDocument();
    });
  });
  test("Then it should render a loader wit the aria-role 'status'", () => {
    const ariaRole = "status";

    render(<Loader />);

    const expectedResult = screen.getByRole(ariaRole);

    expect(expectedResult).toBeInTheDocument();
  });
});
