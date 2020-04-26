import React, { Component } from "react";
import { connect } from "react-redux";

// Material UI //
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

//Actions //
import { editPostAction } from "../actions/actions";

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

class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateNeeded: false,
      title: "",
      description: "",
    };
  }

  componentDidUpdate() {
    if (this.state.updateNeeded) {
      this.props.onUpdate();
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    let title = event.target.post_title.value;
    let description = event.target.post_description.value;

    const data = {
      id: this.props.postId,
      title: title,
      description: description,
    };

    this.props.dispatch(editPostAction(data));

    this.props.onUpdate();

    event.target.post_title.value = "";
    event.target.post_description.value = "";

    this.setState({ updateNeeded: true });
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      description: this.props.description,
    });
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { classes } = this.props;

    let errors, isError;

    if (this.props.response.createPost.hasOwnProperty("response")) {
      isError = Array.isArray(this.props.response.editPost.response.title);
      errors = isError ? this.props.response.editPost.response.title : null;
    }

    return (
      <Grid item xs={12} md={8}>
        <Card className={classes.card}>
          <Paper elevation={0} className={classes.greyBox}>
            <Typography variant="h6" gutterBottom>
              Редактировать пост
            </Typography>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={this.onSubmit}
            >
              <TextField
                error={isError}
                helperText={errors ? errors[0] : ""}
                className={classes.root}
                id="post_title"
                label="Заголовок"
                variant="outlined"
                InputProps={{
                  className: classes.input,
                }}
                required
                value={this.state.title}
                onChange={this.onTitleChange}
              />

              <TextField
                className={classes.root}
                id="post_description"
                label="Что у вас нового?"
                multiline
                rows="4"
                variant="outlined"
                InputProps={{
                  className: classes.input,
                }}
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
              <div>
                <Button variant="contained" color="primary" type="submit">
                  Сохранить
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={this.props.onCancel}
                >
                  Отмена
                </Button>
              </div>
            </form>
          </Paper>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(EditPost));
