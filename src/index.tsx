
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";



import router from "./router";
import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
