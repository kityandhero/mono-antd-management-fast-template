// 此文件将会从模板库自动更新，请勿改动此文件内容。

export const entrance = {
  path: '/entrance',
  layout: false,
  routes: [
    { path: '/entrance', redirect: '/entrance/signIn' },
    {
      path: '/entrance/signIn',
      component: './general/Entrance',
    },
  ],
};

export const currentAccount = {
  name: 'currentAccount',
  icon: 'user',
  path: '/currentAccount',
  routes: [
    {
      path: '/currentAccount',
      redirect: '/currentAccount/setting',
    },
    {
      name: 'setting',
      icon: 'bars',
      hideChildrenInMenu: true,
      path: '/currentAccount/setting',
      component: './general/CurrentAccount/Setting',
      routes: [
        {
          path: '/currentAccount/setting',
          redirect: '/currentAccount/setting/load/basicInfo',
        },
        {
          path: '/currentAccount/setting/:op/basicInfo',
          component: './general/CurrentAccount/Setting/BasicInfo',
        },
        {
          path: '/currentAccount/setting/:op/password',
          component: './general/CurrentAccount/Setting/Password',
        },
      ],
    },
    {
      name: 'loginLog',
      icon: 'bars',
      hideChildrenInMenu: true,
      path: '/currentAccount/loginLog',
      routes: [
        {
          path: '/currentAccount/loginLog',
          redirect: '/currentAccount/loginLog/pageList',
        },
        {
          path: '/currentAccount/loginLog/pageList',
          name: 'pageList',
          icon: 'bars',
          redirect: '/currentAccount/loginLog/pageList/no',
        },
        {
          path: '/currentAccount/loginLog/pageList/:pageKey',
          hideInMenu: true,
          component: './general/CurrentAccount/LoginLog/PageList',
        },
      ],
    },
  ],
};

export const result = {
  path: '/result',
  name: 'result',
  icon: 'bars',
  hideInMenu: true,
  routes: [
    {
      path: '/result',
      redirect: '/result/forbidden',
    },
    {
      path: '/result/forbidden',
      name: 'forbidden',
      component: './general/Result/Forbidden',
    },
    {
      path: '/result/serverError',
      name: 'serverError',
      component: './general/Result/ServerError',
    },
    {
      path: '/result/localError',
      name: 'localError',
      component: './general/Result/LocalError',
    },
    {
      path: '/result/success',
      name: 'success',
      component: './general/Result/Success',
    },
    {
      path: '/result/info',
      name: 'info',
      component: './general/Result/Info',
    },
    {
      path: '/result/warn',
      name: 'warn',
      component: './general/Result/Warn',
    },
    {
      path: '/result/notFound',
      name: 'notFound',
      component: './general/Result/NotFound',
    },
  ],
};

export const notFound = { path: '/*', component: './general/Result/NotFound' };
