import React, { Component } from 'react'
import * as mobx from 'mobx'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import RecipeReviewCard from '../../components/Molecules/RecipeReviewCard'
import Pagination from '../../components/Molecules/Pagination'
import SelectRerPage from '../../components/Molecules/SelectRerPage'
import SearchField from '../../components/Molecules/SearchField'
import { options } from '../../constants'

import './styles.scss'

class App extends Component {
  componentDidMount () {
    const { AppStore } = this.props
    AppStore.loadData(AppStore.page, AppStore.limit)
  }

  render () {
    const { AppStore } = this.props
    const pokemons = mobx.toJS(AppStore.pokemons)
    const countPage = Math.floor(AppStore.data.count / AppStore.limit)
    const filteredPokemons = pokemons.slice().filter(item =>
      item.name.toLowerCase().includes(AppStore.searchName.toLowerCase())
    )

    return (
      <div className='page'>
        <Header />
        <div className='main'>
          <div className='topBar'>
            <SearchField
              value={AppStore.searchName}
              onChange={value => AppStore.searchByName(value)} />
            <SelectRerPage
              options={options}
              value={AppStore.limit}
              onChangePerPage={value => AppStore.changePerPage(value)} />
          </div>
          <div className='content'>
            {filteredPokemons[0] && filteredPokemons.map(item =>
              <RecipeReviewCard key={item.id} pokemon={item} />)
            }
          </div>
          {
            !!countPage && filteredPokemons[0] &&
            <Pagination
              pageCount={countPage}
              forcePage={AppStore.page}
              onPageChange={(data) => AppStore.getPage(data.selected)} />
          }

        </div>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  AppStore: PropTypes.object.isRequired
}

export default inject('AppStore')(observer(App))
