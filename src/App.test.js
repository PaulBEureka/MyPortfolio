import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import App from "./App";

test("renders the App component with theme without crashing and has the About text ", () => {
  const renderWithTheme = (ui, { theme = "light", ...options } = {}) =>
    render(
      <ThemeContext.Provider value={{ theme, toggleTheme: jest.fn() }}>
        {ui}
      </ThemeContext.Provider>,
      options
    );

  renderWithTheme(<App />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
