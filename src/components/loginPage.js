import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//Actions //
import { loginUserAction } from "../actions/actions";

//Material-UI //
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { AuthStorage } from "../services/authStorage";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email: email,
      password: password,
    };

    this.props.dispatch(loginUserAction(data));
  };

  componentDidMount() {
    document.title = "SM App Login";
  }

  render() {
    let isSuccess, isError, message;
    if (this.props.response.login.response) {
      isSuccess = this.props.response.login.response.result.success !== false;
      isError = this.props.response.login.response.result.success === false;
      message = isError
        ? this.props.response.login.response.result.errors[0]
        : "";

      if (isSuccess) {
        let headers = this.props.response.login.response.headers;

        AuthStorage.setData({
          access_token: headers.get("access-token"),
          client: headers.get("client"),
          uid: headers.get("uid"),
          user_id: this.props.response.login.response.result.data.id,
        });

        this.props.response.login.response = undefined;
      }
    }

    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Вход
          </Typography>

          <form
            onSubmit={this.onHandleLogin}
            className={classes.form}
            noValidate
          >
            <TextField
              className="form__input"
              type="email"
              name="email"
              onChange={this.onInputChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              className="form__input"
              type="password"
              name="password"
              onChange={this.onInputChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Пароль"
              id="password"
              autoComplete="current-password"
            />

            {!isSuccess ? null : <Redirect to="home" />}
            {isError ? <Alert severity="error"> {message} </Alert> : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>

            <Grid container>
              <Grid item>
                <Link to="register" variant="body2">
                  {"Еще не зарегистрированы? Зарегистрироваться"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(LoginPage));
