const state = {
  menuList: []
}

const getters = {
  menuList: function (state) {
    return state.menuList
  }

}

const mutations = {
  menuList: function (state, val) {
    console.log('add')
    state.menuList.push(val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
