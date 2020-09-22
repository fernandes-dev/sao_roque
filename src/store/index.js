import Vue from 'vue'
import Vuex from 'vuex'
import mutationsGlobal from './mutations'
import actionsGlobal from './actions'
import news from './module/news'
import unities from './module/unities'
import exams from './module/exams'

Vue.use(Vuex)

const base_url = 'https://www.saoroque.mrxempresas.com.br/'

export default new Vuex.Store({
  modules: {
    news,
    unities,
    exams
  },
  state: {
    certifications: null,
    menu: [
      {name: "Início", url: "/"},
      {name: "Sobre Nós", url: "/sobre-nos"},
      {name: "Notícias", url: "/noticias"},
      {name: "Unidades", url: "/unidades"},
      {name: "Exames", url: "/exames"},
      {name: "Certificações", url: "/certificacoes"},
      {name: "Fale Conosco", url: "/fale-conosco"},
      {name: "Dicas e Dúvidas", url: "/fale-conosco", childs: [
        {name: 'Dicas de Coletas', url: '/dicas'},
        {name: 'Dúvidas Frequentes', url: '/duvidas'},
      ]},
    ],
    slides: [],
    recentNews: null,
    clinicBody: [],
    doctor: null,
    about: null,
    tips: null,
    tipItem: null,
    doubts: null,
    base_url
  },
  getters: {
    certificationsImgs(state) {
      return state.certifications.imgs.filter(item => item !== state.certifications.capa)
    }
  },
  mutations: {
    insertTip(state, payload) {
      state.tipItem = payload
    },
    ...mutationsGlobal
  },
  actions: {
    ...actionsGlobal
  }
})
