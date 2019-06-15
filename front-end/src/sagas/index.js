import { all } from 'redux-saga/effects';

import dashboardAbout from './dashboard-about';
import contactOnMount from './contact-onmount';
import contactForm from './contact-form';
import dashboardOnMount from './dashboard-onmount';
import adminLogin from './admin-login';
import dashboardFaqOnMount from './dashboard-faq-onmount';

export default function* rootSaga() {
  yield all([
    ...dashboardAbout,
    ...contactOnMount,
    ...contactForm,
    ...dashboardOnMount,
    ...adminLogin,
    ...dashboardFaqOnMount
  ]);
}