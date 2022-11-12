import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import AdminPortal from '../pages/login.jsx';
import RegisterOrganization from '../pages/registerOrganization.jsx'
import { collection, addDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../js/firebase";
var routes  = [{
    path: '/',
    component: HomePage,
  },
  {
  path: '/Home/',
  component: HomePage,
  },
  {
    path: '/AdminPortal/',
    component: AdminPortal,
  },
  {
    path: '/RegisterOrganization/',
    component: RegisterOrganization,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/OrgName/:orgName/',
    async: function ({
      router,
      to,
      resolve
    }) {
      // App instance
      var app = router.app;

      // User ID from request
      var userId = to.params.userId;
      var orgName = to.params.orgName;

      
     
      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: orgName,
          lastName: userId,
          about: `Hello, You have loged in for Organization, ${orgName}.`,
          links: [{
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve({
          component: RequestAndLoad,
        }, {
          props: {
            user: user,
          }
        });
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;