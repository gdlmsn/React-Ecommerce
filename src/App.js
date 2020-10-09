import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='grid-container'>
            <header>
              <Link to='/'>React Ecommerce</Link>
              <Link to='/admin'>Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
            </main>
            <footer>All rights reserved</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
