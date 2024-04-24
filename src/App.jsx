<<<<<<< HEAD
import Login from "./pages/Login"
=======
import Home from "./pages/Home"
// import Login from "./pages/Login"
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
  //{
  //   path: "Login",
  //   element: <Login/>
  // },
]);

>>>>>>> 95400e56d64ff478c88d694e6ee82936911cc60b
function App() {
  return (
<<<<<<< HEAD
  <Login/> 
)
=======
    <RouterProvider router={router} />
  )
>>>>>>> 95400e56d64ff478c88d694e6ee82936911cc60b
}

export default App
