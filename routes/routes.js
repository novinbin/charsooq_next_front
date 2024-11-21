export const routes = {
  landing: {
    root: "/",
    blogs: { root: "/blogs", details: (id) => `/blogs/${id}` },
  },

  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
  },

  manager: {
    dashboard: "/manager/dashboard",
    profile: {
      details: "/manager/profile/details",
      "update-info": "/manager/profile/update-info",
      "update-password": "/manager/profile/update-password",
    },

    users: {
      root: "/manager/users",
      create: "/manager/users/create",
      edit: (id) => `/manager/users/${id}/edit`,
      details: (id) => `/manager/users/${id}`,
    },
    "balance-increases": {
      root: "/manager/balance-increases",
      requests: {
        all: (id) => `/manager/balance-increases/${id}`,
        create: (id) => `/manager/balance-increases/${id}/create`,
        edit: (id, balanceId) =>
          `/manager/balance-increases/${id}/${balanceId}/edit`,
      },
      pending: {
        root: "/manager/balance-increases/pending",
      },
    },
    installment: {
      delay: "/manager/installment/delay",
      "delay-all": "/manager/installment/delayAll",
      "no-Delay": "/manager/installment/noDelay",
      "factor-registration": {
        root: "/manager/factor-registration",
        factors: {
          all: (id) => `/manager/installment/factor-registration/${id}`,
          create: (id) =>
            `/manager/installment/factor-registration/${id}/create`,
          edit: (id, factorId) =>
            `/manager/installment/factor-registration/${id}/${factorId}/edit`,
          details: (id, factorId) =>
            `/manager/installment/factor-registration/${id}/${factorId}`,
        },
      },
    },
    transaction: {
      daily: "/manager/transaction/daily",
      weekly: "/manager/transaction/weekly",
      monthly: "/manager/transaction/monthly",
      all: "/manager/transaction/all",
      users: {
        root: "/manager/transaction/users",
        details: (id) => `/manager/transaction/users/${id}`,
      },
    },
    "discount-codes": {
      create: "/manager/discount-codes/create",
      all: "/manager/discount-codes/all",
      customers: "/manager/discount-codes/customers",
      products: "/manager/discount-codes/products",
    },
    banners: {
      "main-page": "/manager/banners/main-page",
    },
    organs: {
      root: "/manager/organs",
      create: "/manager/organs/create",
      edit: (id) => `/manager/organs/${id}/edit`,
      details: (id) => `/manager/organs/${id}`,
    },
    "user-categories": {
      root: "/manager/user-categories",
      create: "/manager/user-categories/create",
      edit: (id) => `/manager/user-categories/${id}/edit`,
      details: (id) => `/manager/user-categories/${id}`,
    },
    dasht: {
      login: "/manager/dasht/login",
    },
    "factor-registration": {
      root: "/manager/factor-registration",
      factors: {
        all: (id) => `/manager/factor-registration/${id}`,
        create: (id) => `/manager/factor-registration/${id}/create`,
        edit: (id, factorId) =>
          `/manager/factor-registration/${id}/${factorId}/edit`,
        details: (id, factorId) =>
          `/manager/factor-registration/${id}/${factorId}`,
      },
    },
  },

  author: {
    dashboard: "/author/dashboard",
    profile: {
      details: "/author/profile/details",
      "update-info": "/author/profile/update-info",
      "update-password": "/author/profile/update-password",
    },
    blogs: {
      root: "/author/blogs",
      create: "/author/blogs/create",
      edit: (id) => `/author/blogs/${id}/edit`,
      details: (id) => `/author/blogs/${id}`,
    },
  },

  employee: {
    dashboard: "/employee/dashboard",
    profile: {
      details: "/employee/profile/details",
      "update-info": "/employee/profile/update-info",
      "update-password": "/employee/profile/update-password",
    },

    installment: {
      delay: "/employee/installment/delay",
      "delay-all": "/employee/installment/delayAll",
      "no-Delay": "/employee/installment/noDelay",
      "factor-registration": {
        root: "/employee/factor-registration",
        factors: {
          all: (id) => `/employee/installment/factor-registration/${id}`,
          create: (id) =>
            `/employee/installment/factor-registration/${id}/create`,
          edit: (id, factorId) =>
            `/employee/installment/factor-registration/${id}/${factorId}/edit`,
          details: (id, factorId) =>
            `/employee/installment/factor-registration/${id}/${factorId}`,
        },
      },
    },
    users: {
      root: "/employee/users",
      create: "/employee/users/create",
      details: (id) => `/employee/users/${id}`,
    },
    "balance-increases": {
      root: "/employee/balance-increases",
      requests: {
        all: (id) => `/employee/balance-increases/${id}`,
        create: (id) => `/employee/balance-increases/${id}/create`,
        edit: (id, balanceId) =>
          `/employee/balance-increases/${id}/${balanceId}/edit`,
      },
    },
    "factor-registration": {
      root: "/employee/factor-registration",
      factors: {
        all: (id) => `/employee/factor-registration/${id}`,
        create: (id) => `/employee/factor-registration/${id}/create`,
        edit: (id, factorId) =>
          `/employee/factor-registration/${id}/${factorId}/edit`,
        details: (id, factorId) =>
          `/employee/factor-registration/${id}/${factorId}`,
      },
    },
    organs: {
      root: "/employee/organs",
    },
    "user-categories": {
      root: "/employee/user-categories",
    },
    dasht: {
      products: "/employee/dasht/products",
    },
    categories: {
      root: "/employee/categories",
      second: (id) => `/employee/categories/${id}`,
      third: (id1, id2) => `/employee/categories/${id1}/${id2}`,
    },
  },

  user: {
    dashboard: "/user/dashboard",
    profile: {
      details: "/user/profile/details",
      "update-info": "/user/profile/update-info",
      "update-password": "/user/profile/update-password",
    },
    factors: {
      root: "/user/factors",
      installments: (id) => `/user/factors/${id}/installments`,
    },
    "balance-increases": {
      root: "/user/balance-increases",
    },
  },

  organ: {
    dashboard: "/organ/dashboard",
    profile: {
      details: "/organ/profile/details",
      "update-info": "/organ/profile/update-info",
      "update-password": "/organ/profile/update-password",
    },
  },
};
