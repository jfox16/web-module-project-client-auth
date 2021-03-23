
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from 'routes/PrivateRoute';
import Login from 'routes/Login';

import Header from 'components/Header';
import FriendsList from 'components/FriendsList';

import './App.css';

function App() {
  return (
    <Router>

      <Header />

      <Route exact path='/' component={Login} />
      <PrivateRoute path='/friends' component={FriendsList} />

    </Router>
  );
}

export default App;
