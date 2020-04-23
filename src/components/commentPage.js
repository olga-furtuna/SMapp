import React, { Component } from "react";

// Components //
import Header from "../components/Header/Header";

// Material UI //
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "100%",
    },
  },
  card: {
    margin: theme.spacing(2),
  },

  greyBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
  },
  input: {
    backgroundColor: "white",
  },
});

class CommentPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <Typography component="h1" variant="h5" gutterBottom>
            Страница поста
          </Typography>

          <Typography component="h1" variant="h5" gutterBottom>
            блабла
          </Typography>

          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              className={classes.root}
              id="comment_title"
              label="Написать комментарий"
              variant="outlined"
              InputProps={{
                className: classes.input,
              }}
              required
            />

            <Button variant="contained" color="primary" type="submit">
              Отправить
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(CommentPage);
