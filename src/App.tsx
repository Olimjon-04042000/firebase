import { createBrowserRouter } from "react-router-dom";
import AddBook from "./components/AddBook";
import SignUp from "./components/SignUp";
import { RouterProvider } from "react-router-dom";
import Protected from "./components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected >        <AddBook />
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
  // <div>
  // <SignUp />
  // {/* <AddBook /> */}
  // </div>
}

export default App;
