import express from 'express';
import getAbout from './about';
import accomodation from './accommodation';
import getAdmin from './admin';
import getAttraction from './attraction';
import getContact from './contact';
import getFAQ from './faq';
import getPayment from './payment';
import passport from '../middleware';
import checkAuthentication from '../middleware/auth';

const app = express();

// endpoints not necessarily to protect
app.get('/about', getAbout.get);
app.get('/accommodation', accomodation.get);
app.get('/accommodation/info', accomodation.info);
app.get('/attraction', getAttraction.get);
app.get('/contact', getContact.get);
app.get('/faq', getFAQ.get);
app.get('/payment', getPayment.get);
app.get('/admin', getAdmin.get);

// endpoints must be protected
app.post('/admin/login', passport.authenticate('local', { failWithError: true }), getAdmin.login, getAdmin.err);
app.get('/admin/dashboard', checkAuthentication, getAdmin.dashboard);
app.get('/admin/logout', checkAuthentication, getAdmin.logout);

export default app;
