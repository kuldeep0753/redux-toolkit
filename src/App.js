import "./App.css";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Navigation from "./component/Routing/Navigation";
import Error from "./component/Routing/Error";
import LifeCycleA from "./component/ClassLifeCycle/LifeCycleA";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
// import About from "./component/About";
// import Sign from "./component/Sign";
import Home from "./component/Routing/Home";
import About from "./component/Routing/About";
import Sign from "./component/Routing/Sign";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      {/* <Cart /> */}
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="*" errorElement={<Error />}></Route>
        </Routes>
      


      {/* class lifecycle method */}
      <LifeCycleA/>
    </Provider>
  );
}
// export const appRoute = createBrowserRouter([
//   { path: "./", element: <App /> },
//   { path: "./about", element: <About /> },
//   { path: "./sign", element: <Sign /> },
// ]);

export default App;
