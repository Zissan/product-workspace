import { render } from "react-dom";

import "@product/styles/scss/index.scss";
import "./styles/index.css";

render(
  <div>
    <div className="header p-6">
      <h1>Market</h1>
    </div>
  </div>,
  document.getElementById("root")
);
