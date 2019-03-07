import { runInAction, extendObservable, action } from 'mobx'

// eslint-disable-next-line no-undef
export default extendObservable(this, {
  people: [],
  loading: false,
  loadPeople: action(async () => {
    this.loading = true
    // eslint-disable-next-line no-undef
    const response = await fetch('https://randomuser.me/api/?results=10')
    const json = await response.json()
    runInAction(() => {
      this.people = json.results
      this.loading = false
    })
  })
}
)
