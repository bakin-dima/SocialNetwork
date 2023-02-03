import { createRoot } from "react-dom/client";
import SocialNetworkJsApp from "./App";

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<SocialNetworkJsApp tab="home" />);
  root.unmount();
});
