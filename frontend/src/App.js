import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Users } from "./components/Users/Users";
import { Index } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/users" component={Users} />
        <Route path="/shifts" component={Users} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
