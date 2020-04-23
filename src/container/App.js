import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./privateRoute";
import LoginPage from "../components/loginPage";
import RegisterPage from "../components/registerPage";
import HomePage from "../components/homePage";
import ProfilePage from "../components/profilePage";
import CommentPage from "../components/commentPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <PrivateRoute path="/comment" component={CommentPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
