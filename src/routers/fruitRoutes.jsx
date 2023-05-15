import { createBrowserRouter } from "react-router-dom";
import Form from "../component/Form";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Form />,
  },
]);

export default router;
