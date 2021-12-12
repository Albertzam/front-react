import { useDispatch, useSelector } from "react-redux";
import { State } from "./redux/reducers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalStyles } from "./styles/global";
import { Login } from "./components/pages/login/login";
import { Test } from "./components/pages/404/test";

function App() {
  const dispatch = useDispatch();
  const globalClasses = useGlobalStyles();
  const { isLoggedIn } = useSelector<State>((store) => store.auth) as any;

  return isLoggedIn ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Test}></Route>
      </Switch>
    </Router>
  ) : (
    <Router>
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
