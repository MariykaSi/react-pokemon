import * as mobx from 'mobx'
import { getData, getPokemon } from '../api'
import { options } from '../constants'

class AppStore {
  data = {};
  pokemons = [];
  limit = mobx.toJS(options[0].value);
  page = 0
  searchName = ''

  loadData = async (page, limit) => {
    const response = await getData(page, limit)
    const { data } = response

    const details = await Promise.all(
      data.results.map(async item => {
        const details = await getPokemon(item.url)
        return details.data
      })
    )
    mobx.runInAction(() => {
      this.data = data
      this.pokemons = details
    })
  };

  getPage = (page) => {
    this.page = page
    this.searchName = ''
    this.loadData(page, this.limit)
  };

  changePerPage = value => {
    this.limit = value
    this.page = 0
    this.searchName = ''
    this.loadData(0, value)
  }

  searchByName = value => {
    this.searchName = value
  }
}

mobx.decorate(AppStore, {
  data: mobx.observable,
  pokemons: mobx.observable,
  page: mobx.observable,
  limit: mobx.observable,
  searchName: mobx.observable
})

export default new AppStore()
