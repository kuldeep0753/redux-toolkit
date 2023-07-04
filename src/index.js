import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import appRoute from "./App";
// import { RouterProvider } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
// import About from "./component/About";
// import Sign from "./component/Sign";
// import Home from "./component/Home";
// import Error from "./component/Error";

//  const appRoute = createBrowserRouter([
//   { path: "./", element: <Home /> ,errorElement: <Error />},
//   { path: "./about", element: <About />,errorElement: <Error /> },
//   { path: "./sign", element: <Sign /> ,errorElement: <Error />},
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App/></BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
