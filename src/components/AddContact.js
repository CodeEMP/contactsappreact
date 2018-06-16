import React, {Component} from 'react'
import {NumberInputField, TextInputField} from './inputs.js'
import {addItem} from '../Contacts.js'

function SuccessMsg (props) {
  return (
    <div className="notification is-success column is-one-fifth">
      <button className='delete' onClick={props.closeFN} />
      <p>Contact added!</p>
    </div>
  )
}

function ActionBar (props) {
  return (
    <div className='field is-grouped'>
      <div className='control'>
        <button className='button is link' onClick={props.onSubmit}>Add Item</button>
      </div>
      <div className='control'>
        <button className='button is link' onClick={props.onReset}>Reset</button>
      </div>
    </div>
  )
}

class AddContact extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      phonenumber: '',
      email: '',
      showSuccess: false,
    }
  }

  closeSuccessMsg () {
    this.setState({showSuccess: false})
  }

  submitNewContact () {
    const newItem = {
      name: this.state.name,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
    }
    addItem(newItem)

    this.setState({showSuccess: true})
    this.resetFormFields()
  }

  resetFormFields() {
    this.setState({
      name: '',
      phonenumber: '',
      email: '',
    })
  }

  updateProperty (fieldId, evt) {
    const newVaule = evt.currentTarget.value
    this.setState(function (prevState) {
      let newObj = {}
      newObj[fieldId] = newVaule
      return newObj
    })
  }

  render () {
    const closeSuccessMsg = this.closeSuccessMsg.bind(this)
    const successNotification = this.state.showSuccess ? <SuccessMsg closeFN={closeSuccessMsg} /> : null

    const nameChangeFn = this.updateProperty.bind(this, 'name')
    const phonenumberChangeFn = this.updateProperty.bind(this,'phonenumber')
    const emailChangeFn = this.updateProperty.bind(this, 'email')

    const submitFn = this.submitNewContact.bind(this)
    const resetFn = this.resetFormFields.bind(this)


    return (
      <section>
        {successNotification}
        <TextInputField label='Name' value={this.state.name} placeholderTxt='Contact name' onChange={nameChangeFn} />
        <TextInputField label='Phonenumber' value={this.state.phonenumber} placeholderTxt='Phone Number' onChange={phonenumberChangeFn} />
        <TextInputField label='Email' value={this.state.email} placeholderTxt='Email' onChange={emailChangeFn} />
        <ActionBar onSubmit={submitFn} onReset={resetFn} />
      </section>
    )
  }

}

export default AddContact
