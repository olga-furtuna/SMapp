import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions //
import { registerUserAction } from "../actions/actions";

// Material UI //
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let firstName = event.target.first_name.value;
    let lastName = event.target.last_name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let passwordConf = event.target.password_confirmation.value;

    const data = {
      email: email,
      password: password,
      passwrod_confirmation: passwordConf,
      first_name: firstName,
      last_name: lastName,
    };

    this.props.dispatch(registerUserAction(data));
  };

  componentDidMount() {
    document.title = "SM App Register";
  }

  render() {
    let errors, isSuccess, isError;

    if (this.props.response.register.hasOwnProperty("response")) {
      isSuccess = this.props.response.register.response.status === "success";
      isError = this.props.response.register.response.status === "error";
      errors = isError ? this.props.response.register.response.errors : "";
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
            Регистрация
          </Typography>

          <form
            className={classes.form}
            onSubmit={this.onHandleRegistration}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first_name"
                  name="first_name"
                  variant="outlined"
                  fullWidth
                  id="first_name"
                  label="Имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="last_name"
                  label="Фамилия"
                  name="last_name"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={isError}
                  helperText={errors && errors.email ? errors.email[0] : ""}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={isError}
                  helperText={
                    errors && errors.password ? errors.password[0] : ""
                  }
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Подтверждение пароля"
                  type="password"
                  id="password_confirmation"
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                {!isSuccess ? null : <Redirect to="login" />}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Зарегистрироваться
            </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link to="login" variant="body2">
                  Уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (response) => ({
  response,
});

export default connect(mapStateToProps)(withStyles(styles)(RegisterPage));
