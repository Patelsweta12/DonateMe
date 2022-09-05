var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'Donate Me',
    // App id
    id: 'com.donateMe.test',
    // Enable swipe panel
    panel: {
        swipe: true,
    },
    // Add default routes
    routes: [{
            name: 'admin',
            path: '/admin/',
            url: 'DonateMe/pages/login.html',
        },
        {
            name: 'AboutUs',
            path: '/AboutUs/',
            url: 'DonateMe/pages/AboutUs.html',
        },
        {
            name: 'Home',
            path: '/Home/',
            url: 'index.html',
        },
        {
            name: '404',
            path: '(.*)',
            url: 'DonateMe/pages//404.html',
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');