export default class always {
  constructor(options) {
    this.memo = options.memo
  }

  plugin (store) {
    const memo = this.memo
    this.init(store.state)
    store.subscribe((mutation, state) => {
      this.setState(memo, state)
    })
  }
  init (state) {
    const store = localStorage.getItem('vuex')
    store ?
      this.initState(state)
      :
      localStorage.setItem('vuex', '{}')
  }
  setItem (key, value) {
    const store = localStorage.getItem('vuex')
    const obj = JSON.parse(store)
    obj[key] = value
    localStorage.setItem('vuex', JSON.stringify(obj))
  }
  setState (memo, state) {

    memo && memo.map((item) => {
      state.hasOnwPropoty(item) && this.setItem(item, state[item])
    })
    for (let k in state) {
      this.setItem(k, state[k])
    }
  }
  initState (state) {
    const store = localStorage.getItem('vuex')
    const obj = JSON.parse(store)
    for (let k in obj) {
      state[k] = obj[k]
    }
  }
}