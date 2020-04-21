import React, { Component } from "react";

// Components //
import Header from "../components/Header/Header";
import UserData from "../components/UserData";
import UserPosts from "../components/UserPosts";

// Material UI //
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <Typography component="h1" variant="h5" gutterBottom>
            Профиль
          </Typography>
          <UserData />
          <Typography component="h1" variant="h5" gutterBottom>
            Мои посты:
          </Typography>

          <UserPosts    />
        </Container>
      </div>
    );
  }
}

export default ProfilePage;
