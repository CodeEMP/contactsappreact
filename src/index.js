import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bulma/css/bulma.css'
import {getContacts, setContacts} from './Contacts.js'
import registerServiceWorker from './registerServiceWorker'

function fetchFailed () {
  console.error('Uh-oh - fetching initial inventory.json failed!')
}

if (!getContacts()) {
  window.fetch('data/contacts.json')
    .then(function (response) { return response.json() })
    .then(setContacts)
    .then(startRendering)
    .catch(fetchFailed)
} else {
  startRendering()
}

function startRendering () {
  ReactDOM.render(<App />, document.getElementById('root'))
}

registerServiceWorker()
