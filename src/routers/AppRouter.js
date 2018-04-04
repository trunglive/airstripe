import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import HomePage from "../components/HomePage";
import HowItWorks from "../components/HowItWorks";
import Login from "../components/Login";
import SingleTripPage from "../components/SingleTripPage";

const AppRouter = () => (
  <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/flight/:fareClass/:id" component={SingleTripPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
