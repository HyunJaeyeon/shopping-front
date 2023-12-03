import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Register from './pages/Register';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

export default router;
