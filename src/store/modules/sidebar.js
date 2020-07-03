const state = {
  isSidebarOpen: false,
  sidebarRef: undefined
}

const getters = {
  isSidebarOpen: function (state) {
    return state.isSidebarOpen
  },

  sidebarRef: function (state) {
    return state.sidebarRef
  }

}

const mutations = {
  isSidebarOpen: function (state, val) {
    state.isSidebarOpen = val

  },

  sidebarRef: function (state, val) {
    state.sidebarRef = val
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
