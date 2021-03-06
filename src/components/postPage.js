import React, { Component } from "react";
import { connect } from "react-redux";

// Components //
import Header from "./Header/Header";
import Post from "./Post";
import CommentForm from "./CommentForm";

// Actions //
import { fetchSinglePostAction } from "../actions/actions";
import { fetchCommentsAction } from "../actions/actions";

import { filterComments } from "../services/filterComments";

// Material UI //
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router";

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

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = { removed: false };
  }

  onRemovePost = () => {
    this.setState({ removed: true });
  };

  onCommentAdded = () => {
    this.setState({ commentAdded: true });
  };

  componentDidMount() {
    var id = this.props.match.params.id;
    this.fetchData(id);
  }

  componentDidUpdate() {
    if (this.state.commentAdded) {
      this.props.dispatch(fetchCommentsAction({}));
      this.setState({ commentAdded: false });
    }
  }

  fetchData(id) {
    if (id) {
      this.fetchPost(id);
      this.fetchComments();
    }
  }

  fetchPost(id) {
    this.props.dispatch(fetchSinglePostAction({ id: id }));
  }

  fetchComments() {
    this.props.dispatch(fetchCommentsAction({}));
  }

  render() {
    var postId = this.props.match.params.id;
    var post = this.props.response.singlePost.response
      ? this.props.response.singlePost.response
      : null;
    var comments = this.props.response.fetchComments.response
      ? this.props.response.fetchComments.response
      : [];

    return (
      <div>
        {this.state.removed ? <Redirect to="/home" /> : null}
        <Header />
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h5" gutterBottom>
              Страница поста
            </Typography>

            {post ? (
              <div>
                <Post
                  post={post}
                  comments={filterComments(post.id, comments)}
                  hideLink
                  showUserId
                  onUpdate={this.onRemovePost}
                  onEdit={() => this.fetchData(postId)}
                  onCommentsUpdate={() => this.fetchComments()}
                />

                <CommentForm
                  onAdded={() => this.onCommentAdded()}
                  postId={post.id}
                />
              </div>
            ) : null}
          </Container>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(PostPage));
