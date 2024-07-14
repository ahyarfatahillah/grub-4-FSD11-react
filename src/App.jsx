import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ReservationPage from "./pages/ReservationPage"
import ProductDetail from "./pages/ProductDetail"
import Wishlist from "./pages/Wishlist"
import Host from "./pages/Host"
import TinyHomes from "./pages/TinyHomes"
import Cabins from "./pages/Cabins"
import Mansions from "./pages/Mansions"
import Rooms from "./pages/Rooms"
import Apartments from "./pages/Apartments"
import Trip from "./pages/Trip"
import Profile from "./pages/Profile"
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
    path: "/ProductDetail/:id",
    element: <ProductDetail/>
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
  },
  {
    path:"/Host",
    element:<Host/>
  },
  {
    path:"/TinyHomes",
    element:<TinyHomes/>
  },
  {
    path:"/Cabins",
    element:<Cabins/>
  },
  {
    path:"/Apartements",
    element:<Apartments/>
  },
  {
    path:"/Mansions",
    element:<Mansions/>
  },
  {
    path:"/Rooms",
    element:<Rooms/>
  },
  {
    path:"/Trip",
    element:<Trip/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App