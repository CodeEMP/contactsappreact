function getContacts () {
  try {
    return JSON.parse(window.localStorage.getItem('contacts'))
  } catch (e) {
    console.error('Contacts in localStorage was not valid JSON')
    return null
  }
}

function setContacts (newContacts) {
  window.localStorage.setItem('contacts', JSON.stringify(newContacts))
}

function addItem (newItem) {
  let contacts = getContacts()
  contacts.push(newItem)
  setContacts(contacts)
  return getContacts()
}

function deleteItem (id) {
  const contacts = getContacts()
  const newContacts = contacts.filter(function (item) {
    return item.id.toString() !== id.toString()
  })
  setInventory(newInventory)
  return getInventory()
}

export {addItem, deleteItem, getContacts, setContacts}
