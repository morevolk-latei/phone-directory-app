import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';


import paellaImg from '../../../images/paella.jpg'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});


const CustomCard = (props) => {
    const { classes, ratings, CuisineStyle, name, city, reviewes, ranking } = props

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Rating" className={classes.avatar}>
              { ratings }
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={city}
        />
        <CardMedia
          className={classes.media}
          image={paellaImg}
          title="Paella dish"
        />
        <CardContent>
          <Grid
            container
            direction="column"
            spacing={0}
            style={{padding: '10px '}}
          >
            <Typography component="p" color="secondary">
              Reviewes: {reviewes}
            </Typography>
            <Typography component="p" color="secondary">
              Ranking: {ranking}
            </Typography>
          </Grid>
          {
            CuisineStyle.map((chip, id) => (
              <Chip
                key={id}
                label={chip}
                className={classes.chip}
              />
            ))
          }
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard)
