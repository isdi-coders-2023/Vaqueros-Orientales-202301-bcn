import { create } from "react-test-renderer";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CreateEventPage from "../pages/CreateEventPage/CreateEventPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

describe("Given a App Component", () => {
  describe("When it render a CreateEventPage", () => {
    test("Then it should show a CreateEventPage", () => {
      let renderer = create(
        <MemoryRouter initialEntries={["/create"]}>
          <Routes>
            <Route path="/create" element={<CreateEventPage />}></Route>
          </Routes>
        </MemoryRouter>
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });

  describe("When it try to render a not existing page", () => {
    test("Then it should show a NotFoundPage", () => {
      let renderer = create(
        <MemoryRouter initialEntries={["/*"]}>
          <Routes>
            <Route path="/*" element={<NotFoundPage />}></Route>
          </Routes>
        </MemoryRouter>
      );

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
