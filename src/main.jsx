import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

// page components

import Home from "./Home";
import About from "./About";

// router creation

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Home />
        </main>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <About />
        </main>
      </>
    ),
  },
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
