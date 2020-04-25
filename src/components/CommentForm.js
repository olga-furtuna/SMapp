import React, { Component } from "react";
//import { connect } from "react-redux";

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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <form
            style={{ display: "flex", justifyContent: "space-between" }}
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
            />

            <IconButton
              //onClick={(event) => this.onClick(event, post.id)}
              type="submit"
            >
              <SendIcon fontSize="large" color="primary" />
            </IconButton>
          </form>
        </Card>
      </div>
    );
  }
}

//const mapStateToProps = (response) => ({ response });

//export default connect(mapStateToProps, null)(withStyles(styles)(CommentForm));

export default withStyles(styles)(CommentForm);
