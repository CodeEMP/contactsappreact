import React from 'react'


function NumberInputField (props) {
  const step = props.step ? props.step : 1

  return (
    <div>
      <label className='label'>{props.label}</label>
      <div className='control'>
        <input className='input'
          type={props.inputType}
          onChange={props.onChange}
          placeholder={props.placeholderTxt}
          step={step}
          value={props.value} />
      </div>
    </div>
  )
}

function TextInputField (props) {

  return (
    <div>
      <label className='label'>{props.label}</label>
      <div className='control'>
        <input className='input'
          type={props.inputType}
          onChange={props.onChange}
          placeholder={props.placeholderTxt}
          value={props.value} />
      </div>
    </div>
  )
}

export {NumberInputField, TextInputField}
