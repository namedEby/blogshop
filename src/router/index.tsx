import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../view/login";
import Blog from "../view/blog";
import Shop from "../view/shop";
import Detailspage from "../view/detailspage";
import PrivateRoutes from "./private";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:id" element={<Detailspage />} />
      </Route>
    </Route>
  )
);

export default router;
