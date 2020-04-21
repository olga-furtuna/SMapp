import React, { Component } from "react";
import { connect } from "react-redux";

// Components //
import Header from "../components/Header/Header";
import PostForm from "./PostForm";
import Posts from "./Posts";

//Actions //
import { fetchPostsAction } from "../actions/actions";

// Material UI //
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class HomePage extends Component {
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
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <Typography component="h1" variant="h5" gutterBottom>
            Главная страница
          </Typography>

          <PostForm onUpdate={() => this.fetchPosts()}/>

          <Posts posts={posts}  onUpdate={() => this.fetchPosts()}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(HomePage);
