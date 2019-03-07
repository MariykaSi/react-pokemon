import ReactPaginate from 'react-paginate'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class Pagination extends PureComponent {
  render () {
    const { pageCount, forcePage, onPageChange } = this.props

    return pageCount >= 1 ? (
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName='paginationWrapper'
        pageClassName='paginationLink'
        previousLabel='previous'
        nextLabel='next'
        previousClassName='arrowLeft'
        nextClassName='arrowRight'
        forcePage={forcePage}
        onPageChange={onPageChange}
      />
    ) : null
  }
}

Pagination.defaultProps = {
  onPageChange: null,
  forcePage: null
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  forcePage: PropTypes.number,
  onPageChange: PropTypes.func
}

export default Pagination
