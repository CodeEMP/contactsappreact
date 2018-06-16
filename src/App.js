import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js'
import Homepage from './components/Homepage.js'
import AddContact from './components/AddContact.js'
import ContactsPage from './components/ContactsPage.js'


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      route:'/',
    }

    window.onhashchange = () => { this.hashChange() }
  }

  componentDidMount () {
    this.hashChange()
  }

  hashChange () {
    const validRoutes = ['/', '/contacts', '/addcontact']
    const defaultRoute = '/'
    const newRoute = window.location.hash.replace(/^#/, '').trim()
    const isValidRoute = validRoutes.includes(newRoute)

    if (isValidRoute) {
      this.setState({route: newRoute})
    } else {
      window.location.hash = defaultRoute
    }
  }

  render() {

    let pageComponent = <Homepage />
    if (this.state.route === '/contacts') {
      pageComponent = <ContactsPage />
    } else if (this.state.route === '/addcontact') {
      pageComponent = <AddContact />
    }

    return (
      <main className='main-app'>
        <h1 className='has-background-info is-size-2'>Contacts App</h1>
        <NavBar activeRoute={this.state.route} />
        {pageComponent}
      </main>
    )
  }
}

export default App;
