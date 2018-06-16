import React, { Component } from 'react'
import ContactsTable from './ContactsTable.js'
import {getContacts} from '../Contacts.js'

class ContactsPage extends Component {

  constructor () {
    super(props);
    this.state = {
      contacts:getContacts(),
    }
  }

  render () {
    return (
      <section className="section has-background-light is-marginless">
        <ContactsTable props={this.state.contacts} />
      </section>
    )
  }
}

export default ContactsPage
