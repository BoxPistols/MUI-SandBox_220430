import * as React from "react";
// import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";

// before
// ReactDOM.render(
//   <StyledEngineProvider injectFirst>
//     <Demo />
//   </StyledEngineProvider>,
//   document.querySelector("#root")
// );

// After
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>
);
