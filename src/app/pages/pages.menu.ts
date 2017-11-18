export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      /*{
        path: ['/login'],  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'general.menu.login', // menu title
            icon: 'ion-android-bulb', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },*/
      {
        path: 'places',
        data: {
          menu: {
            title: 'Places',
            icon: 'ion-document',
            pathMatch: 'prefix',
            selected: false,
            expanded: false,
            order: 2
          }
        }
      },
      {
        path: 'users',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Users', // menu title
            icon: 'ion-android-person', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 3
          }
        }
      },
      {
        path: 'about',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'About', // menu title
            icon: 'ion-android-bulb', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 4
          }
        }
      },
    ]
  }
];
