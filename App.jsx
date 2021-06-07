import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HeaderWithBackground from "./components/HeaderWithBackground";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|141_8840)">
          <HeaderWithBackground {...headerWithBackgroundData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group86Data = {
    layer1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-98@2x.png",
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/group-85-1@2x.png",
};

const getAQuoteButtonData = {
    children: "GET A QUOTE",
};

const headerWithBackgroundData = {
    place: "HOME",
    text1: "ABOUT US",
    text2: "PROJECTS",
    text3: "GALLERY",
    text4: "INSIGHTS",
    text5: "BLOGS",
    text6: "FAQ’S",
    text7: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButtonProps: getAQuoteButtonData,
};

