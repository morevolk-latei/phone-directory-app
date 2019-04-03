import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import _ from 'lodash'

import NavBar from '../common/NavBar'
import Card from '../common/Card'
import ContactInfo from '../common/ContactInfo'
import CreateContactForm from '../common/CreateContactForm'
import actions from '../../redux/actions/contacts'

const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '2px'
}
const upArrow = '\u25B2'
const downArrow = '\u25BC'

const isValueEmpty = value => !(value && value.toString().trim().length > 0)

@connect((state) => state, actions)
class contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      contacts: [],
      activeOrder: 'desc',
      searchText: '',
      searching: false,
      activeArrow: downArrow
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.sortItems = this.sortItems.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCreateContact = this.handleCreateContact.bind(this)
    this.handleContactDelete = this.handleContactDelete.bind(this)
  }

  handleSearch(e) {
    const { name, value } = e.target
    
    this.setState({
      [name]: value
    })

    console.log({ name, value }, value && value.trim.length >= 3)

    if (value && value.trim().length >= 3) {
      this.setState({
        searching: true
      })
    } else {
      this.setState({
        searching: false
      })
    }
  }

  sortItems() {
    const { activeOrder, activeArrow } = this.state
    let newArrow = activeArrow
    let newOrder = activeOrder

    if (activeOrder === 'desc') {
      newArrow = upArrow
      newOrder = 'asc'
    } else {
      newArrow = downArrow
      newOrder = 'desc'
    }

    this.setState({
      activeOrder: newOrder,
      activeArrow: newArrow
    })
  }

  handleChange(e) {
    const { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  handleCreateContact() {
    console.log(this.state)

    const { name, phone, contacts } = this.state

    if (!isValueEmpty(name) && !isValueEmpty(phone)) {
      // create the contact
      const newContact = {
        name,
        phone,
        createdAt: +new Date()
      }

      const newContactList = [...contacts].concat([ newContact ])

      this.setState({ contacts: newContactList, name: '', phone: '' })
    } else {
      console.warn({ name, phone }, 'empty')
    }
  }

  handleContactDelete(targetId) {
    const { contacts } = this.state
    const contactsCopy = [...contacts].filter((contact, index) => `${contact['createdAt']}-${contact['phone']}` !== targetId)

    this.setState({ contacts: contactsCopy })
  }

  render () {
    const { fetchingAllcontacts } = this.props.contacts
    const { searching, searchText, activeArrow, activeOrder, contacts: allContactsList } = this.state

    let filteredContactsList = allContactsList
    // console.log('before searching filteredContactsList', filteredContactsList)

    if (searching) {
      // console.log('searching start')
      filteredContactsList = _.filter(allContactsList, contacts =>
        _.includes(contacts['name'].toLowerCase(), searchText.toLowerCase())
      )
    }

    filteredContactsList = _.orderBy(filteredContactsList,['createdAt'], [activeOrder])
    // console.log('after searching filteredContactsList', filteredContactsList)


    const contactsUI = filteredContactsList.map((contact, index) => (
      <Grid
        item
        container
        xs={12}
        md={6}
        lg={4}
        key={index}
        spacing={16}
        style={{padding: 32}}
        justify="center"
        alignItems="center"
      >
        <ContactInfo
          name={contact['name']}
          phone={contact['phone']}
          id={`${contact['createdAt']}-${contact['phone']}`}
          contactObj={contact}
          deleteContact={this.handleContactDelete}
        />
      </Grid>
    ))

    let contactListMessage = (
      <Typography variant="subheading" gutterBottom>
        Directory is empty. start by creating some contacts from left.
      </Typography>
    )

    if (searching) {
      contactListMessage = (
        <Typography variant="subheading" gutterBottom>
          No contact found.
        </Typography>
      )
    }

    return (
      <div>
        <NavBar
          onSearchTextChange={this.handleSearch}
          // searchText={this.state.searchText}
        />
        <Grid
          container
          direction="row"
          spacing={0}
          style={{padding: 32, flexWrap: 'nowrap' }}
        >
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            style={{ flex: 1 }}
            alignItems="center"
          >
            <Button
              variant="contained"
              color="default"
              onClick={this.sortItems}
            >
              Sort by timestamp 
              <Icon style={iconStyle}>{activeArrow}</Icon>
            </Button>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            style={{ flex: 2 }}
            alignItems="flex-start"
            o
          >
            <Typography component="h2" variant="display1" gutterBottom>
              Contact List
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={0}
          style={{padding: 32, flexWrap: 'nowrap' }}
        >
          <CreateContactForm
            name={this.state.name}
            phone={this.state.phone}
            handleChange={this.handleChange}
            handleCreateContact={this.handleCreateContact}
          />
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            style={{ maxHeight: '470px', overflow: 'auto', flex: 2 }}
          >
            {
              contactsUI && contactsUI.length > 0 ?
                contactsUI
                : contactListMessage
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default contacts