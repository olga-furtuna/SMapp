import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

// Services //
import { AuthStorage } from "../../services/authStorage";

// Material UI //
import Container from "@material-ui/core/Container";

import "./Header.css";

class Header extends Component {
  logOut = () => {
    AuthStorage.removeData();
  };

  render() {
    return (
      <header className="header">
        <Container maxWidth="lg">
          <div className="header-content">
            <div className="nav-bar">
              <NavLink
                className="nav-link"
                activeClassName="nav-link--active"
                exact
                to="/home"
              >
                На главную
              </NavLink>

              <NavLink
                className="nav-link"
                activeClassName="nav-link--active"
                exact
                to="/profile"
              >
                Профиль
              </NavLink>
            </div>

            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              exact
              to="/login"
              onClick={this.logOut}
            >
              Выйти
            </NavLink>
          </div>
        </Container>
      </header>
    );
  }
}

export default withRouter(Header);
