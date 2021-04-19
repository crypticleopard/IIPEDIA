import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import randomcolor from "randomcolor"
import Grid from "@material-ui/core/Grid"



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 345,
      },
      avatar: {
        backgroundColor:randomcolor(),
      },
  }));

export default function Reviewcard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} style={{marginBottom:'10px'}}>
    <Card className={classes.root} raised>
      <CardHeader
        avatar={
          <Avatar aria-label="name" className={classes.avatar}>
            {props.first_name.charAt(0)}
          </Avatar>
        }
        title={props.username}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.main}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}
