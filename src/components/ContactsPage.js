import React, { Component } from 'react'
import ContactsTable from './ContactsTable.js'
import {getContacts} from '../Contacts.js'

class ContactsPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      contacts:getContacts(),
    }
  }

  render () {
    console.log('page render')
    return (
      <section className="section has-background-light is-marginless">
        <ContactsTable items={this.state.contacts} />
      </section>
    )
  }
}

export default ContactsPage
