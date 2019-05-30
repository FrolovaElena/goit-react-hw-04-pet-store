import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Nav from './Nav/Nav';
import Loader from './Loader';

const HomePage = Loadable({
  loader: () => import('../pages/HomePage') /* webpackChunkName "home-page" */,
  loading: Loader,
});

const AboutPage = Loadable({
  loader: () =>
    import('../pages/AboutPage') /* webpackChunkName "about-page" */,
  loading: Loader,
});

const PetsPage = Loadable({
  loader: () => import('../pages/PetsPage') /* webpackChunkName "pets-page" */,
  loading: Loader,
});

const PetPage = Loadable({
  loader: () => import('../pages/PetPage') /* webpackChunkName "pet-page" */,
  loading: Loader,
});

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Redirect to="/" exact />
    </Switch>
  </div>
);

export default App;
