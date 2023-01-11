import {createStore} from "vuex";

const store = createStore({
  state: {
    user: {
      data: {},
      // data: {
      //   name: 'jdiaz',
      //   email: 'jdiaz@jdiaz.com',
      //   imageUrl: "https://i.pravatar.cc/150?img=3"
      // },
      token: sessionStorage.getItem('TOKEN'),
    },
    dashboard: {
      loading: false,
      data: {}
    },
    surveys: {
      loading: false,
      links: [],
      data: []
    },
  },
  getters: {},
  actions: {
    logoutAction({ commit }) {
      commit('logout');
    },

    register({ commit }, user) {
      return fetch(`http://localhost:8000/api/register`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        method: "POST",
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((res) => {
          commit("setUser", res);
          return res;
        });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null,
      state.user.data = {}
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },
  },
  modules: {},
});

export default store;
