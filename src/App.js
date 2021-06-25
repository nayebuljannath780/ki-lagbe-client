import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Admin from './Component/Admin/Admin';
import DeleteProducts from './Component/Admin/DeleteProducts/DeleteProducts';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});
  const [deleteProduct, setDeleteProduct] = useState([]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, cart, setCart,deleteProduct,setDeleteProduct }}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/product/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/delete">
              <DeleteProducts/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
