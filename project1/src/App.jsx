import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';


const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },

    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
