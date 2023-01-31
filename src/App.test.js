// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { createRoot } from "react-dom/client";
import SocialNetworkJsApp from "./App";

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<SocialNetworkJsApp tab="home" />);
  root.unmount();
});
