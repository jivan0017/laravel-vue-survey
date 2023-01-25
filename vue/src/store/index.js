import axios from "axios";
import {createStore} from "vuex";
import axiosClient from "../interceptors/axios";

const tmpSurveys = [
  {
    id: 100,
    title: 'Title coding by youtube content',
    slug: "thecoding-youtube-channel-content",
    status: "draft",
    image: "https://picsum.photos/200/300",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_at: "2023-01-11 12:00:00",
    updated_at: "2023-01-11 15:00:00",
    expire_date: "2023-01-11 19:00:00",
    questions: [
      {
        id: 1,
        type: 'select',
        question: 'From which country are you?',
        description: 'question test',
        data: {
          options: [
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w45',
              text: 'USA'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w46',
              text: 'Georgia'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w47',
              text: 'Germany'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w48',
              text: 'India'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w499',
              text: 'Asia'
            },
          ],
        },
      },
      {
        id: 2,
        type: 'select',
        question: 'From which country prefered you?',
        description: 'question test',
        data: {
          options: [
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w45',
              text: 'Oceanía'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w46',
              text: 'Europa'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w47',
              text: 'America'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w48',
              text: 'India'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w499',
              text: 'Asia'
            },
            {
              uuid: 'f8af93f.2356.3e3e.b5234233e34w410',
              text: 'Africa'
            },
          ],
        },
      },
      {
        id: 3,
        type: 'checkbox',
        question: 'Wich PHP framework videos do you want to see on my channel?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it h',
        data: {
          options: [
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w45',
              text: 'Laravel'
            },
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w46',
              text: 'Codeigniter'
            },
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w47',
              text: 'Symfony'
            },
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w48',
              text: 'Yii3'
            },
          ],
        },
      },
      {
        id: 4,
        type: 'radio',
        question: 'Wich PHP framework videos do you not want to see on my channel?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it h',
        data: {
          options: [
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w45',
              text: 'Laravel'
            },
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w46',
              text: 'Codeigniter'
            },
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w47',
              text: 'Symfony'
            },
            {
              uuid: 'f9af93f.2356.3e3e.b5234233e34w48',
              text: 'Yii3'
            },
          ],
        },
      },
      {
        id: 5,
        type: 'checkbox',
        question: 'Wich PHP framework for javasript front videos do you not want to see on my channel?',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it h',
        data: {
          options: [
            {
              uuid: 'f10af93f.2356.3e3e.b5234233e34w45',
              text: 'Vue'
            },
            {
              uuid: 'f10af93f.2356.3e3e.b5234233e34w46',
              text: 'Vue 3 composition'
            },
            {
              uuid: 'f10af93f.2356.3e3e.b5234233e34w47',
              text: 'Angular'
            },
            {
              uuid: 'f10af93f.2356.3e3e.b5234233e34w48',
              text: 'React'
            },
            {
              uuid: 'f10af93f.2356.3e3e.b5234233e34w55',
              text: 'Svelte'
            },
          ],
        },
      },
      {
        id: 6,
        type: 'textarea',
        question: 'What do you think about theCodeholic channel?',
        description: 'Write honest opinion, Everything is anonymous.',
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: 'Laravel 8',
    slug: "laravel-8",
    status: "active",
    image: "https://picsum.photos/200/300",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_at: "2023-01-11 12:00:00",
    updated_at: "2023-01-11 15:00:00",
    expire_date: "2023-01-11 19:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "Vue-3",
    status: "active",
    image: "https://picsum.photos/200/300",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_at: "2023-01-11 12:00:00",
    updated_at: "2023-01-11 15:00:00",
    expire_date: "2023-01-11 19:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image: "https://picsum.photos/200/300",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_at: "2023-01-11 12:00:00",
    updated_at: "2023-01-11 15:00:00",
    expire_date: "2023-01-11 19:00:00",
    questions: [],
  },
];

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
    surveys: [...tmpSurveys],
    dashboard: {
      loading: false,
      data: {}
    },
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    // surveys: {
    //   loading: false,
    //   links: [],
    //   data: []
    // },
  },
  getters: {},
  actions: {
    logoutAction({ commit }) {
      console.log("desde el store intento el logout <<<")
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout');
          return response;
        });
    },

    register({ commit }, user) {
      // return fetch(`http://localhost:8000/api/register`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   },
      //   method: "POST",
      //   body: JSON.stringify(user),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     commit("setUser", res);
      //     return res;
      //   });

      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data)
          return data;
        });
    },

    upload({commit}, data) {
      const config = {
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      }
      return axiosClient.post('/uploadimage', data, config)
        .then(({data}) => {
          // commit('setUser', data)
          return data;
        });
    },

    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          console.log("login")
          commit('setUser', data)
          return data;
        })
        // .catch((err) => {
        //   console.log("err ", err)
        // })
    },

    // SURVEY
    saveSurvey({ commit, dispatch }, survey) {
      delete survey.image_url;

      let response;
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit('updateSurvey', res.data)
            return res;
          });
      } else {
        response = axiosClient.post("/survey", survey).then((res) => {
          commit('saveSurvey', res.data)
          return res;
        });
      }

      return response;
    },
  },
  mutations: {
    logout: (state) => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },

    // SURVEY
    saveSurvey: (state, survey) => {
      state.surveys = [...state.surveys, survey.data];
    },
    updateSurvey: (state, survey) => {
      state.surveys = state.surveys.map((s) => {
        if (s.id == survey.id) {
          return survey;
        }

        return s;
      });
    }
  },
  modules: {},
});

export default store;
