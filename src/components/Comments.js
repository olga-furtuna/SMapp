import React, { Component } from "react";
import { connect } from "react-redux";

// Services //
import Comment from "./Comment";

class Comments extends Component {
  render() {
    var postId = this.props.postId;
    var userId = this.props.userId;
    var comments = this.props.comments;

    return (
      <div>
        {comments
          .filter((comment) => comment.commentable_id == postId)
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          })
          .map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              userId={userId}
              onUpdate={() => this.props.onUpdate()}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(Comments);
