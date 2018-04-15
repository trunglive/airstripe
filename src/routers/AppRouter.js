import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/menu/Header";
import HomePage from "../components/HomePage";
import SaveToList from '../components/save-to-list/SaveToList';
import SingleTripPage from "../components/trip-details/SingleTripPage";
import Footer from "../components/menu/Footer";
import Credit from "../components/menu/Credit";

const AppRouter = () => (
  <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mylist" component={SaveToList} />
        <Route exact path="/flight/:fareClass/:id" component={SingleTripPage} />
      </Switch>
      <Footer />
      <Credit />
    </div>
  </Router>
);

export default AppRouter;
