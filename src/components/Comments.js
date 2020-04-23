import React, { Component } from "react";
import { connect } from "react-redux";

// Services //
import Comment from "./Comment";

// Material UI //
import { withStyles } from "@material-ui/core";

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

class Comments extends Component {
  render() {
    var postId = this.props.postId;
    var comments = this.props.comments;

    return (
      <div>
        {comments
          .filter((comment) => comment.commentable_id == postId)
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          })
          .map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(Comments));
