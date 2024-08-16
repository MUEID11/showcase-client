import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Login from "./src/authentication/Login";
import Register from "./src/authentication/Register";
import Error from "./src/Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

export default router;
