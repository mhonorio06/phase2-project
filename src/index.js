import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './components/routes';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
    


    


