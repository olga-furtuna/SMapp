import React, { Component } from "react";
import { connect } from "react-redux";

// Actions //
import { userProfileAction } from "../actions/actions";

// Material UI //
import Container from "@material-ui/core/Container";

class UserData extends Component {
  componentDidMount() {
    if (
      Array.isArray(this.props.response.profile) &&
      this.props.response.profile.length === 0
    ) {
      this.props.dispatch(userProfileAction({}));
    }
  }

  render() {
    var firstName = "Not available";
    var lastName = " Not available";
    var email = " Not available";

    var response = this.props.response.profile.response;
    if (response) {
      firstName = response.data.firs_name ? response.data.firs_name : firstName;
      lastName = response.data.last_name ? response.data.last_name : lastName;
      email = response.data.email;
    }

    return (
      <Container maxWidth="lg">
        <p>Имя: {firstName}</p>
        <p>Фамилия:{lastName}</p>
        <p>E-mail: {email}</p>
      </Container>
    );
  }
}

const mapStateToProps = (response) => ({ response });
export default connect(mapStateToProps, null)(UserData);
