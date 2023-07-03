import "./App.css";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Navigation from "./component/Navigation";
// import { createBrowserRouter } from "react-router-dom";
// import About from "./component/About";
// import Sign from "./component/Sign";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Cart />
      {/* <div className="App">
      
    </div> */}
    </Provider>
  );
}
// export const appRoute = createBrowserRouter([
//   { path: "./", element: <App /> },
//   { path: "./about", element: <About /> },
//   { path: "./sign", element: <Sign /> },
// ]);

export default App;
