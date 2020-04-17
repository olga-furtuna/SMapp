import React from "react";

// Material UI //
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "100%",
    },
  },

  greyBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
  },
  input: {
    backgroundColor: "white",
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  //  const [value, setValue] = React.useState('Controlled');

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  return (
    <Grid item xs={12} md={8}>
      <Paper elevation={0} className={classes.greyBox}>
        <Typography variant="h6" gutterBottom>
          Новый пост
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className="input"
            id="outlined-basic"
            label="Заголовок"
            variant="outlined"
            InputProps={{
              className: classes.input,
            }}
          />

          <TextField
            className={classes.root}
            id="outlined-multiline-static"
            label="Что у вас нового?"
            multiline
            rows="4"
            defaultValue=""
            variant="outlined"
            InputProps={{
              className: classes.input,
            }}
          />

          <Button variant="contained" color="primary">
            Отправить
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
