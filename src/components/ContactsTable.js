import React from 'react'

function TableHeader () {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th className='align-right'>Email</th>
      </tr>
    </thead>
  )
}

function TableRow (props, idx) {
  return (
    <tr key={idx}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.phonenumber}</td>
      <td className='align-right'>$ {props.email}</td>
    </tr>
  )
}

function ContactsTable (props) {

  const rows = props.items.map(TableRow)

  return (
    <table className='table is-striped is-fullwidth is-hoverable'>
      <TableHeader />
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ContactsTable
