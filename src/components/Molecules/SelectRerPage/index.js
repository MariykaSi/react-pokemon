import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

class SelectRerPage extends PureComponent {
  render () {
    const { value, onChangePerPage, options } = this.props
    return (
      <form noValidate autoComplete='off'>

        <TextField
          id='standard-select-currency'
          select
          label='PerPage'
          value={value}
          onChange={e => onChangePerPage(e.target.value)}
          margin='normal'
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </form>
    )
  }
}

SelectRerPage.defaultProps = {
  onChangePerPage: null
}

SelectRerPage.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChangePerPage: PropTypes.func
}

export default SelectRerPage
