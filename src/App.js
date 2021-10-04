import { Topbar } from "./Components/Topbar/Topbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Home } from "./Pages/Home/Home";
import "./app.css";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import {UserList} from './Pages/userList/UserList';
import {Users} from './Pages/Users/Users';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
