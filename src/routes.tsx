import { ellipse, square, triangle } from 'ionicons/icons';

import { Pages } from './common/types';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

export const ROUTES = {
  LOGIN: {
    name: 'login',
    path: '/login',
    Component: Login,
    showOnTabs: false,
  },
  DASHBOARD: {
    name: 'dashboard',
    path: '/dashboard',
    Component: Dashboard,
    showOnTabs: true,
    icon: ellipse,
    label: 'Dashboard',
  },
  DEFAULT: {
    name: 'default',
    path: '/',
    showOnTabs: false,
    redirectTo: '/login',
  },
};

const routes: Pages[] = [ROUTES.LOGIN, ROUTES.DASHBOARD, ROUTES.DEFAULT];

export default routes;
