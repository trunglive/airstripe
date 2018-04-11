import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/navigation/Header";
import HomePage from "../components/HomePage";
import HowItWorks from "../components/HowItWorks";
// import Login from "../components/Login";
import SingleTripPage from "../components/SingleTripPage";
import NotFoundPage from "../components/NotFoundPage";
import Footer from "../components/navigation/Footer";
import Credit from '../components/navigation/Credit';

const AppRouter = () => (
  <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/flight/:fareClass/:id" component={SingleTripPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <Credit />
    </div>
  </Router>
);

export default AppRouter;
