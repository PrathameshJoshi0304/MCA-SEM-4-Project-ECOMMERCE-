import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";


function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Drold Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      
      {/* <Route exact path="/" component={Home} /> */}
      <Home path ="/" />

      <Footer />
    </Router>
  );
}

export default App;
