import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ReservationPage from "./pages/ReservationPage"
import ProductDetail from "./pages/ProductDetail"
import Wishlist from "./pages/Wishlist"
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
    path: "/Login",
    element: <Login/>
  },  
  {
    path: "/ProductDetail",
    element: <ProductDetail/>
    // <ProductDetail/>
  },
  {
    path: "/SignUp",
    element: <Signup/>
  },
  {
    path: "/ReservationPage",
    element: <ReservationPage/>
  },
  {
    path:"/Wishlist",
    element:<Wishlist/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App