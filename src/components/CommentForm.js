import React, { Component } from "react";
import { connect } from "react-redux";

// Actions //
import { createCommentAction } from "../actions/actions";

// Material UI //
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "100%",
      display: "flex",
    },
  },
  card: {
    margin: theme.spacing(2),
  },

  greyBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
  },
});

class CommentForm extends Component {
  onSubmit = (event, id) => {
    event.preventDefault();

    let message = event.target.comment_title.value;

    this.props.dispatch(
      createCommentAction({
        message: message,
        commentable_id: id,
        commentable_type: "Post",
      })
    );

    event.target.comment_title.value = "";

    this.props.onAdded();
  };

  render() {
    const { classes } = this.props;
    var postId = this.props.postId;
    return (
      <div>
        <Card className={classes.card}>
          <form
            style={{ display: "flex", justifyContent: "space-between" }}
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(event) => this.onSubmit(event, postId)}
          >
            <TextField
              className={classes.root}
              id="comment_title"
              label="Написать комментарий"
              variant="outlined"
              InputProps={{
                className: classes.input,
              }}
            />

            <IconButton type="submit">
              <SendIcon fontSize="large" color="primary" />
            </IconButton>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(CommentForm));
