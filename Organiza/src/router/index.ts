import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Dashboard from '../pages/Dashboard.vue';
import Expenses from '../pages/Expenses.vue';
import Budget from '../pages/Budget.vue';
import Investments from '../pages/Investments.vue';
import Notifications from '../pages/Notifications.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/expenses', component: Expenses },
  { path: '/budget', component: Budget },
  { path: '/investments', component: Investments },
  { path: '/notifications', component: Notifications },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
