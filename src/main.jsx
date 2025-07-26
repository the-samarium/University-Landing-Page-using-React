
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AdmissionsPage from './pages/AdmissionsPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import Collect from './components/Collect.jsx';
import CampusLife from './pages/CampusLife.jsx';
import TPO from './pages/TPO.jsx';

const router = createBrowserRouter([
   {
    path: '/',
    element: <App />, // Your layout wraps everything
    children: [
      //index: true is used inside a parent route to specify the default child component 
      { index: true, element: <Collect /> }, // route: /
      { path: 'about', element: <AboutPage /> },
      { path: 'admission', element: <AdmissionsPage /> },
      { path: 'programs', element: <ProgramsPage /> },
      { path: 'campus', element: <CampusLife /> },
      { path: 'tpo', element: <TPO /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
