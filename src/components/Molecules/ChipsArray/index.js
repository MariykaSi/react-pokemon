import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import uuidv1 from 'uuid/v1'

import './styles.scss'

class ChipsArray extends React.Component {
  render () {
    const { chipData, handleDelete } = this.props
    return (
      <Paper className='paper'>
        {chipData.map(data => {
          return (
            <Chip
              className='chip'
              key={uuidv1()}
              label={data}
              onDelete={() => handleDelete(data)}
            />
          )
        })}
      </Paper>
    )
  }
}

ChipsArray.defaultProps = {
  chipData: [],
  handleDelete: null
}

ChipsArray.propTypes = {
  chipData: PropTypes.array,
  handleDelete: PropTypes.func
}

export default ChipsArray
