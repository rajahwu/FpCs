import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SplashPage, HomePage,  CharacterPage } from "./pages";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />
  },
  {
    path: "/home",
    element: <HomePage />,
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
