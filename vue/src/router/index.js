import {createRouter, createWebHistory} from 'vue-router';
import store from '../store';
import Dashboard from '../views/dashboard/Dashboard.vue';
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import AuthLayout from '../components/layouts/AuthLayout.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Surveys from '../views/surveys/Surveys.vue';
import SurveyView from '../views/surveys/SurveyView.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: { requiresAuth: true },
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/surveys',
        name: 'Surveys',
        component: Surveys
      },
      {
        path: '/suvey/create',
        name: 'SurveyCreate',
        component: SurveyView
      },
      {
        path: '/survey/:id',
        name: 'SurveyView',
        component: SurveyView
      },
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login"});
  } else if (store.state.user.token && to.meta.isGuest) {  // NOTE:  ANTES to.name === 'Login' || to.name === 'Register'
    next({ name: "Dashboard"});
  } else {
    next();
  }
});

export default router;
