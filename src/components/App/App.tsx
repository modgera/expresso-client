import { hot } from 'react-hot-loader';
import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Layout from '../Layout';


const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/login" exact component={Login} />
    </Layout>
  </BrowserRouter>
);

declare let module: object;

export default hot(module)(App);
