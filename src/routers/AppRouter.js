import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import HowItWorks from '../components/HowItWorks';
import Login from '../components/Login';
import SingleTripPage from '../components/SingleTripPage';

const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default AppRouter;
