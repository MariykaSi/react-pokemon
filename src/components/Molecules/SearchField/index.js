import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class SearchField extends PureComponent {
  render () {
    const { value, onChange } = this.props
    return (
      <form noValidate autoComplete='off'>

        <TextField
          id='standard-search'
          label='Search name'
          type='search'
          value={value}
          onChange={e => onChange(e.target.value)}
          margin='normal'
        />

      </form>
    )
  }
}

SearchField.defaultProps = {
  onChange: null,
  value: ''
}

SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchField
