import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2,
    position: 'absolute',
    top: '-10px',
    right: '-13px',
    background: '#ffffff',
    overflow: 'initial',
    cursor: 'pointer'
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  card: {
    display: 'flex',
    position: 'relative !important'
  },
});


const ContactInfo = (props) => {
    const { name, phone, id, deleteContact, classes } = props

    return (
      <Card
        className={classes.card}
      >
        <Icon
          className={`${classes.iconHover} ${classes.icon} fa fa-times-circle close-icon`}
          color="error"
          style={{ fontSize: 22 }}
          onClick={() => deleteContact(id)}
        />
        <CardContent
          style={{ paddingTop: 30 }}
        >
          <Typography component="p" color="secondary">
            Name: {name}
          </Typography>
          <Typography component="p" color="secondary">
            Phone: {phone}
          </Typography>
        </CardContent>
      </Card>
    )
}

export default withStyles(styles)(ContactInfo)
