import React, { Component } from 'react'

function NavLink (props) {
  const liClassName = "navbar-item " + (props.route === props.activeRoute) ? 'is-active' : ''
  const href = '#' + props.route

  return (
    <li className={liClassName}>
      <a href={href}>{props.label}</a>
    </li>
  )
}

function NavBar (props) {
  return (
      <div className='navbar tabs is-primary is-marginless'>
        <ul>
          <li>
            <NavLink label='Home' route='/' activeRoute={props.activeRoute} />
          </li>
          <li>
            <NavLink label='Contacts' route='/contacts' activeRoute={props.activeRoute} />
          </li>
          <li>
            <NavLink label='Add Contact' route='/addcontact' activeRoute={props.activeRoute} />
          </li>
        </ul>

        <hr />

      </div>
  )
}

export default  NavBar
