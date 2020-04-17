import React, { Component } from "react";

// Material UI //
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  card: {
    display: "flex",
    //justifyContent: 'center',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

class Posts extends Component {
  render() {
    var posts = this.props.posts;
    const { classes } = this.props;
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
            <div key={post.id}>
              <Grid item xs={12}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.created_at}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Посмотреть комментарии: XX
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
            </div>
          ))}
      </div>
    );
  }
}

export default withStyles(styles)(Posts);
