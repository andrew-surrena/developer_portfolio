import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './index.css'

import App from './App';
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: < App />,
    errorElement: < Error />,
    children: [
      {
        index: true,
        element: < AboutMe />,
      },
      {
        path: 'Portfolio',
        element: < Portfolio />,
      },
      {
        path: 'Contact',
        element: < Contact />,
      },
      {
        path: 'Resume',
        element: < Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render
  (
    < RouterProvider router={router} />
  );
