import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    marginTop:60,
  },
}));

export default function Bookcard(props) {
  const classes = useStyles();
  const author="By " + props.author;
  const src="http://127.0.0.1:8000"+props.src;
  const id=props.id;
 
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={author}
      />
      <Grid container className={classes.container} justify='center'>
        <Grid item xs={8}><CardMedia
        className={classes.media}
        component='img'
        src={src}
        height="300"
        title={props.title}
        justify="center"
      /></Grid>
      </Grid>
      
      <CardContent>
        <Typography variant="body1" color="textSecondary">Number of Books currently in library: {props.availability}</Typography>
        <Typography variant="body1" color="textSecondary">Recommend for {props.year}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="secondary" onClick={()=>props.history.push(`/book/${id}`)}>
          Learn More
        </Button>
      </CardActions>
     
    </Card>
  );
}