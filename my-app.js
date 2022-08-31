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
    routes: [
        {
            path: '/about/',
            url: 'about.html',
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main');