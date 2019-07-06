import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import MainContainer from "./container/MainContainer/MainContainer";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Film from "./components/Film/Film";

class App extends Component {
  render() {
      return (
          <Fragment>
              <header>
                  <Toolbar/>
              </header>
              <Container>
                  <Switch>
                      <Route path="/" exact component={MainContainer}/>
                      <Route path="/films/:id" component={Film}/>
                  </Switch>
              </Container>
          </Fragment>
      );
  }
}

export default App;
