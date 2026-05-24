import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { Provider } from 'react-redux';
import Store from "../src/components/redux/Store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersList from './components/usersList/UsersList';
import AboutUs from './page/AboutUs';

const appRoute = createBrowserRouter([
  {
    element: <App />,
    path:"/",
    children:[
      {path:"/", element:<UsersList />},
      {path:"aboutus" , element: <AboutUs />}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <RouterProvider router={appRoute} />
  </Provider>
);
