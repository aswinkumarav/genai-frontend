
import LandingPage from "../src/pages/landingPage";
import Chat from "./pages/chat/Chat";

// Components
import Layout from "./pages/layout/Layout";
// import Completions from "./components/Completions";


const APP_ROUTES = [
  {
    path: "/",
    element: <LandingPage />, // Landing Pages
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:usecase",
        element: <Chat/>
      }
    ],
  },

];

export default APP_ROUTES;