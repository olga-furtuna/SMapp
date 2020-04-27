import React, { Component } from "react";
import { connect } from "react-redux";

//Actions //
import { deleteCommentAction } from "../actions/actions";

// Material UI //
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
  },
  greyBox: {
    backgroundColor: theme.palette.grey[50],
  },
});

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updateNeeded: false,
    };
  }

  onClick = (event, id) => {
    event.preventDefault();

    const data = {
      id: id,
    };

    this.props.dispatch(deleteCommentAction(data));

    this.setState({ updateNeeded: true });
  };

  componentDidUpdate() {
    if (this.state.updateNeeded) {
      this.props.onUpdate();
    }
  }

  render() {
    var comment = this.props.comment;
    var userId = this.props.userId;
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Paper elevation={0} className={classes.greyBox}>
            <div className={classes.cardDetails}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component="h5" variant="h6">
                    User ID: {comment.user_id}
                  </Typography>
                  {
                    // eslint-disable-next-line
                    comment.user_id == userId ? (
                      <IconButton
                        aria-label="delete"
                        onClick={(event) => this.onClick(event, comment.id)}
                      >
                        <CloseIcon fontSize="small" color="action" />
                      </IconButton>
                    ) : null
                  }
                </div>

                <Typography variant="subtitle2" color="textSecondary">
                  {comment.created_at}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Комментарий на {comment.commentable_type} #
                  {comment.commentable_id}
                </Typography>
                <Typography variant="subtitle2">{comment.message}</Typography>
              </CardContent>
              <Divider />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(Comment));
