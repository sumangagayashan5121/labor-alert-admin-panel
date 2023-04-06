export const menuItems = [
  {
    title: 'HOME',
    url: '/',
  },
  {
    title: 'BUSINESS DATA',
    // url: '/account',
    submenu: [
      {
        title: 'Upload Excel',
        url: 'upload-excel',
      },
      {
        title: 'Single Update',
        url: 'single-update',
      },
      {
        title: 'Bulk Update',
        url: 'bulk-update',
      },
      {
        title: 'Export Data',
        url: 'export-data',
      },
      {
        title: 'Duplicates',
        url: 'remove-duplicate',
      },
      {
        title: 'Notification',
        url: 'send-notification',
      },
    ],
  },
  {
    title: 'MANAGE USER',
    // url: '/account',
    submenu: [
      {
        title: 'Update Details',
        url: 'update-user',
      },
      {
        title: 'Validity Period',
        url: 'validity-period',
      },
      {
        title: 'Export Data',
        url: 'export-user',
      },
      // {
      //   title: 'OrderDetail',
      //   url: 'OrderDetail',
      // },
    ],
  },
  {
    title: 'PAYMENT DETAILS',
    url: '/payment-details test',

  },
  {
    title: 'SERVICE DETAILS',
    url: '/service-details',

  },
  {
    title: 'AETHENTICATION',
    // url: '/account',
    submenu: [
      {
        title: 'Sub Admin',
        url: 'sub-admin',
      },
      {
        title: 'Change Password',
        url: 'change-password',
      },
      // {
      //   title: 'Secure Web.Config',
      //   url: 'secure-config test',
      // },
      // {
      //   title: 'OrderDetail',
      //   url: 'OrderDetail',
      // },
    ],
  },
  {
    title: 'EDIT',
    // url: '/account',
    submenu: [
      {
        title: 'Free Trial',
        url: 'free-trail',
      },
      {
        title: 'Privacy',
        url: 'privacy',
      },
      {
        title: 'Terms',
        url: 'terms',
      },
      {
        title: 'About',
        url: 'about',
      },
    ],
  },
  // {
  //   title: 'LOGOUT',
  //   url: '/account',
  // },

];
