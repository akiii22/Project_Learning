import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  CockTail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>
          <About />
        </h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
