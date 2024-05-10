import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import {router} from "./routes/routes.jsx"
import { AuthProvider } from "./context/AuthProvider.jsx";
import "./index.css";

//import components
import Connexion from "./components/connexion/connexion";
import Login from "./components/connexion/login";
import Register from "./components/connexion/register";
import Home from "./components/home/home";
import RequireAuth from "./components/RequireAuth.jsx";
// import { SocketProvider } from './context/SocketProvider.jsx';
import { UserListProvider } from "./context/UserListProvider.jsx";
import Index from "./components/home/Index.jsx";
import Lobby from "./components/home/Lobby.jsx";
import { LobbyIdProvider } from "./context/LobbyIdProvider.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        index: "/home",
        element: <Home />,
        children: [
          {
            path: "lobby/:lobby_id",
            element: <Lobby />,
          },
          {
            index: "index",
            element: <Index />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Connexion />,
    children: [
      {
        index: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserListProvider>
        <LobbyIdProvider>
          <RouterProvider router={router} />
        </LobbyIdProvider>
      </UserListProvider>
    </AuthProvider>
  </React.StrictMode>
);
