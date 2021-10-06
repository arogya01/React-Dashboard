import { Topbar } from "./Components/Topbar/Topbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Home } from "./Pages/Home/Home";
import {UserList} from './Pages/userList/UserList';
import {Users} from './Pages/Users/Users';
import {NewUser} from './Pages/NewUser/NewUser';
import {ProductList} from './Pages/ProductList/ProductList';
import {Product} from './Pages/Product/Product';
import {NewProduct} from './Pages/NewProduct/NewProduct';
import "./app.css";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <Users />
          </Route>
          
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
