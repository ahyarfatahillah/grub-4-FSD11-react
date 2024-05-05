import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ReservationPage from "./pages/ReservationPage"
import ProductDetail from "./pages/ProductDetail"
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
    path: "/Login",
    element: <Login/>
  },  
  {
    path: "ProductDetail",
    element: <ProductDetail/>
    // <ProductDetail/>
  },
  {
    path: "SignUp",
    element: <Signup/>
  },
  {
    path: "/ReservationPage",
    element: <ReservationPage/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App