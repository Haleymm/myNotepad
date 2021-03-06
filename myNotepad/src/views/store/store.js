import Vuex from 'vuex'
import Vue from 'vue'

import defaultState from './state/state.js'
import mutations from './mutation/mutation.js'
import getters from './getters/getters.js'
import actions from './actions/actions.js'

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions
    })
}