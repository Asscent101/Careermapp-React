import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './email-form.module.css'

const EmailForm = (props) => {
  return (
    <div
      className={` ${styles['container']} ${projectStyles['input']} ${
        styles[props.rootClassName]
      } `}
    >
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${projectStyles['button']} ${projectStyles['thqLink']} `}
      >
        {props.button}
      </a>
    </div>
  )
}

EmailForm.defaultProps = {
  rootClassName: '',
  button: 'Join waitlist',
  textinput_placeholder: 'Email address',
}

EmailForm.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default EmailForm
