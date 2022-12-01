
import './Card.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Produto Reciclavel"
          />
    <img src="https://recicla.club/wp-content/uploads/2021/11/o-que-e-garrafa-pet.png" alt="produto reciclavel" />
       <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Garrafa
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            bla bla bla bla bla bal abla aaa.
            {/* teste de git comiit */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}




export {};