import "./styles/index.css";
const app = {
  id: 1,
  name: "market",
};

const extendedApp = {
  ...app,
  version: "1.0.0",
};

console.log(app);
