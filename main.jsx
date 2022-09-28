import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Main from './components/Main'
import Body from "./components/body"
import Characters from "./components/MoreCars/BodyMore.jsx"
import ContactUs from './components/Recomendaciones/RecomBody.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <> 
    <Header /> 
    <Body></Body>
    <Characters></Characters>
    <ContactUs></ContactUs>
  </>
);
