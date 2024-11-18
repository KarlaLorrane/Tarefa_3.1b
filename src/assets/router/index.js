import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '../views/AdminDashboard.vue';
import AnimalList from '../components/AnimalList.vue';
import UserList from '../components/UserList.vue';
import QuizList from '../components/QuizList.vue';
import QuestionList from '../components/QuestionList.vue';
import SponsorList from '../components/SponsorList.vue';
import ExpertList from '../components/ExpertList.vue';

const routes = [
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/admin/animais',
    name: 'AnimalList',
    component: AnimalList
  },
  {
    path: '/admin/utilizadores',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/admin/quizzes',
    name: 'QuizList',
    component: QuizList
  },
  {
    path: '/admin/questoes',
    name: 'QuestionList',
    component: QuestionList
  },
  {
    path: '/admin/patrocinadores',
    name: 'SponsorList',
    component: SponsorList
  },
  {
    path: '/admin/especialistas',
    name: 'ExpertList',
    component: ExpertList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
