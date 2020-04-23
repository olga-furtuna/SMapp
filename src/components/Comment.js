import React, { Component } from "react";
import { connect } from "react-redux";

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
  render() {
    var comment = this.props.comment;
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

                  <IconButton
                    aria-label="delete"
                    //   onClick={(event) => this.onClick(event, post.id)}
                  >
                    <CloseIcon fontSize="small" color="action" />
                  </IconButton>
                </div>

                <Typography variant="subtitle2" color="textSecondary">
                  {comment.created_at}
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
