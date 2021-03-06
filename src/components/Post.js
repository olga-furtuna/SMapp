import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components //
import Comments from "./Comments";
import EditPost from "./EditPost";

//Actions //
import { deletePostAction } from "../actions/actions";

// Services //
import { AuthStorage } from "../services/authStorage";

// Material UI //
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

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

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsHidden: true,
      updateNeeded: false,
      editMode: false,
    };
  }

  onClick = (event, id) => {
    event.preventDefault();

    const data = {
      id: id,
    };

    this.props.dispatch(deletePostAction(data));

    this.props.onUpdate();

    this.setState({ updateNeeded: true });
  };

  componentDidUpdate() {
    if (this.state.updateNeeded) {
      this.props.onUpdate();
    }
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    var post = this.props.post;
    const { classes } = this.props;

    var authData = AuthStorage.getData();
    var userId = authData ? authData.user_id : null;

    return (
      <div>
        {this.state.editMode ? (
          <EditPost
            postId={post.id}
            title={post.title}
            description={post.description}
            onUpdate={() => {
              this.props.onEdit();
              this.setState({ editMode: false });
            }}
            onCancel={() => this.setState({ editMode: false })}
          />
        ) : (
          <div>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      {this.props.hideLink ? (
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                      ) : (
                        <Link to={`post/${post.id}`} variant="body2">
                          <Typography component="h2" variant="h5">
                            {post.title}
                          </Typography>
                        </Link>
                      )}

                      {
                        // eslint-disable-next-line
                        post.user_id == userId ? (
                          <div>
                            {this.props.hideLink ? (
                              <IconButton
                                aria-label="edit"
                                onClick={(event) => this.toggleEditMode()}
                              >
                                <EditIcon fontSize="small" color="action" />
                              </IconButton>
                            ) : null}
                            <IconButton
                              aria-label="delete"
                              onClick={(event) => this.onClick(event, post.id)}
                            >
                              <CloseIcon fontSize="small" color="action" />
                            </IconButton>
                          </div>
                        ) : null
                      }
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.created_at}
                      </Typography>

                      {this.props.showUserId ? (
                        <Typography variant="subtitle1" color="textSecondary">
                          user ID: {post.user_id}
                        </Typography>
                      ) : null}
                    </div>

                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>

                    {!this.props.comments.length ? (
                      <Button
                        disabled
                        style={{
                          textTransform: "none",
                        }}
                      >
                        Комментариев нет
                      </Button>
                    ) : (
                      <Button
                        style={{
                          textTransform: "none",
                        }}
                        color="primary"
                        onClick={() =>
                          this.setState({
                            commentsHidden: !this.state.commentsHidden,
                          })
                        }
                      >
                        {" "}
                        {this.state.commentsHidden
                          ? `Показать комментарии: ${this.props.comments.length}`
                          : "Скрыть комментарии"}
                      </Button>
                    )}
                  </CardContent>
                </div>

                {this.state.commentsHidden ? null : (
                  <Comments
                    postId={post.id}
                    comments={this.props.comments}
                    showCommentForm={this.props.showCommentForm}
                    userId={userId}
                    onUpdate={() => this.props.onCommentsUpdate()}
                  />
                )}
              </Card>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps, null)(withStyles(styles)(Post));
