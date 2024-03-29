import { createBrowserRouter } from "react-router-dom";
import AddBook from "./components/AddBook";
import SignUp from "./components/SignUp";
import { RouterProvider } from "react-router-dom";
import Protected from "./Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <AddBook />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
