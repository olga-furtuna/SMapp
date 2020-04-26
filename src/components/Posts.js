import React, { Component } from "react";
import { connect } from "react-redux";

//Actions //
import { fetchCommentsAction } from "../actions/actions";

// Components //
import Post from "./Post";

// Material UI //
import Typography from "@material-ui/core/Typography";
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

class Posts extends Component {
  state = {
    shown: true,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    this.props.dispatch(fetchCommentsAction({}));
  }

  render() {
    var posts = this.props.posts;

    var comments = this.props.response.fetchComments.response
      ? this.props.response.fetchComments.response
      : [];

    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Всего постов: {posts.length}
        </Typography>

        {posts
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          })
          .map((post) => (
            <Post
              key={post.id}
              post={post}
              comments={comments.filter((x) => x.commentable_id == post.id)}
              onUpdate={this.props.onUpdate}
              onCommentsUpdate={() => this.fetchComments()}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(Posts));
