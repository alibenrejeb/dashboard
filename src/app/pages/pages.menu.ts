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
      {
        path: 'teams',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Teams Page', // menu title
            icon: 'ion-android-home', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'new',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'New Page', // menu title
            icon: 'ion-android-home', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
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
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
    ]
  }
];
