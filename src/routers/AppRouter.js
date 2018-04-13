import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/navigation/Header";
import HomePage from "../components/HomePage";
import SingleTripPage from "../components/SingleTripPage";
import Footer from "../components/navigation/Footer";
import Credit from "../components/navigation/Credit";

const AppRouter = () => (
  <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/flight/:fareClass/:id" component={SingleTripPage} />
      </Switch>
      <Footer />
      <Credit />
    </div>
  </Router>
);

export default AppRouter;
