import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import { ContentCard } from "./components";
import "./App.css";

const CharcterPage = () => (
  <div>
    <ContentCard />
    <Link to="/">Back</Link>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/characters/:id",
    element: <CharcterPage />,
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
