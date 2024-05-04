import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import ProductDetail from ".pages/ProductDetail"
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
  {
    path: "Login",
    element: <Login/>
  },  
  {
    path: "ProductDetail",
    element: <div>ProductDetail{}</div>
    // <ProductDetail/>
  },
  {
    path: "SignUp",
    element: <Signup/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App