import Home from "./pages/Home"
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
