import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App12 from "./MyfirCom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App12 />
  </StrictMode>
);
