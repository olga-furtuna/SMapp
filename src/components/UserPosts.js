import React, { Component } from "react";
import { fetchPostsAction } from "../actions/actions";
import { connect } from "react-redux";

// Components //
import Posts from "../components/Posts";

// Services //
import { AuthStorage } from "../services/authStorage";

// Material UI //
import Container from "@material-ui/core/Container";

class UserPosts extends Component {
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.props.dispatch(fetchPostsAction({}));
  }

  render() {
    var posts = this.props.response.fetchPosts.response
      ? this.props.response.fetchPosts.response
      : [];
    var authData = AuthStorage.getData();
    var userId = authData ? authData.user_id : null;

    return (
      <div>
        <Container maxWidth="lg">
          <Posts
            posts={posts.filter((x) => x.user_id == userId)}
            onUpdate={() => this.fetchPosts()}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(UserPosts);
