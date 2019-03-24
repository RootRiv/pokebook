import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = () => {
  return {
    card: {
      width: 150,
    },
    media: {
      width: 100,
      margin: 'auto'
    },
  };
};

// propsの為のインターフェースを作成
interface IProps {
  mediaSrc: string,
  pokeName: string,
};

type pokeCardProps = IProps & WithStyles<typeof styles>;

const PokeCard: React.SFC<pokeCardProps> = ({ mediaSrc, pokeName, classes }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={mediaSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {pokeName}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}


export default withStyles(styles)(PokeCard);
