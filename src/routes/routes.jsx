
import { createBrowserRouter} from 'react-router-dom';

//import components
import Connexion from '../components/connexion/connexion';
import Login from '../components/connexion/login';
import Register from '../components/connexion/register';
import Home from '../components/home/home';

export const router = createBrowserRouter([

  {
    path:"/home",
    element: <Home />,

  },
    {
      path: "/",
      element: <Connexion />,
      children:[
        {
          index: "/login",
          element: <Login />,
        },
        {
          path:"/register",
          element: <Register />
        }
      ]
    }
 
  ])