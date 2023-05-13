import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage,  CharacterPage } from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/characters/:id",
    element: <CharacterPage />,
  },
]);

function App() {
  return (
    <>
      <h1>Header</h1>
      <RouterProvider router={router} />
      <h1>Footer</h1>
    </>
  );
}

export default App;
