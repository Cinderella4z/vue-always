import Vue from 'vue'
import Vuex from 'vuex'
import always from './always.js'
Vue.use(Vuex)

const alwaysIns = new always({
  memo: ['num', 'age',],
})


const store = new Vuex.Store({
  state: {
    num: 1,
    age: 2
  },
  mutations: {
    add (state, playload) {
      state.num += 1
      state.age += 1
    }
  },
  plugins: [alwaysIns.plugin.bind(alwaysIns)]
})



export default store
