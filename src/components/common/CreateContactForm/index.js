import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

import TextField from '@material-ui/core/TextField'

import FormLabel from '@material-ui/core/FormLabel'

import FormGroup from '@material-ui/core/FormGroup'


const CreateContactForm = ({ name, phone, handleCreateContact, handleChange }) => (
  <Grid
    container
    spacing={0}
    direction="row"
    justify="flex-start"
    style={{ flex: 1 }}
    alignItems="flex-start"
  >
    <form className="add-contact-form" noValidate autoComplete="off">
      <FormLabel component="legend">Create Contact</FormLabel>
      <FormGroup>
        <TextField
          id="outlined-name"
          label="Name"
          name="name"
          className="input-name"
          value={name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-phone"
          label="Phone"
          name="phone"
          className="input-phone"
          value={phone}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
      </FormGroup>
      <FormGroup row={true} style={{ marginTop: '15px' }}>
        <Button
          variant="contained"
          size="small"
          className="save-button"
          onClick={handleCreateContact}
        >
          <SaveIcon className="save-button-icon" />
          Create
        </Button>
      </FormGroup>
    </form>
  </Grid>
)

export default CreateContactForm