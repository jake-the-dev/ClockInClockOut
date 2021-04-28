import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ButtonAppBar } from "./components/AppBar/AppBar";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Users } from "./components/Users/Users";
import { Index } from "./components/index";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
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
