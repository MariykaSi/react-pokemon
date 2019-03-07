import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class InputField extends PureComponent {
  render () {
    const { value, label, onChange, onSubmit } = this.props
    return (
      <form noValidate autoComplete='off' onSubmit={e => onSubmit(e)}>
        <TextField
          id='standard-search'
          label={label}
          type='search'
          value={value}
          onChange={e => onChange(e.target.value)}
          margin='normal'
        />
      </form>
    )
  }
}

InputField.defaultProps = {
  value: '',
  label: 'Field',
  onChange: null,
  onSubmit: null
}

InputField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  label: PropTypes.string
}

export default InputField
