import Vue from 'vue'
import VueRouter from 'vue-router'

const base_name = 'São Roque Medicina'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: base_name,
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/sobre-nos/',
    name: 'Sobre Nós',
    component: () => import("@/views/AboutUs.vue")
  },
  {
    path: '/noticias',
    name: 'Notícias',
    component: () => import("@/views/News.vue")
  },
  {
    path: '/noticias/:link',
    name: 'Notícia',
    component: () => import("@/components/news/NewsItem.vue")
  },
  {
    path: '/unidades/',
    name: 'Unidades',
    component: () => import("@/views/Unities.vue")
  },
  {
    path: '/exames',
    name: 'Exames',
    component: () => import("@/views/Exams.vue")
  },
  {
    path: '/exames/:link',
    name: 'Exame',
    component: () => import("@/components/exams/ExamItem.vue")
  },
  {
    path: '/certificacoes/',
    name: 'Certificações',
    component: () => import("@/views/Certifications.vue")
  },
  {
    path: '/fale-conosco/',
    name: 'Fale Conosco',
    component: () => import("@/views/ContactUs.vue")
  },
  {
    path: '/dicas',
    name: 'Dicas',
    component: () => import("@/views/Tips.vue")
  },
  {
    path: '/dicas/:link',
    name: 'Dica',
    component: () => import("@/views/TipItem.vue")
  },
  {
    path: '/duvidas',
    name: 'Dúvidas',
    component: () => import("@/views/Doubts.vue")
  },
  {
    path: '/perfil/:link',
    name: 'Perfil',
    component: () => import("@/views/Profile.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(to => {
  document.title = to.name
  window.scrollTo(0, 0)
})

export default router