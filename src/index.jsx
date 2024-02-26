import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/Contact us/ContactUs';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';
import Myproject, { myrepo }  from './components/my projects/Myproject';

// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//        path:"contact_us",
//        element:<ContactUs />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path=""  element={<Home />} />
      <Route path="about"  element={<About />} />
      <Route path="contactUs"  element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={myrepo}
      path=":userId/Myproject"
      element={<Myproject />}  />
      <Route 
      loader={myrepo}
      path="Myproject"
      element={<Myproject />}  />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
