/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\ASUS\\AppData\\Roaming\\npm\\node_modules\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-75859c66",
    path: "/router/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8be8310e").then(next)
    },
  },
  {
    path: "/router/index.html",
    redirect: "/router/"
  },
  {
    name: "v-4e4a5718",
    path: "/router/base/test1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4e4a5718").then(next)
    },
  },
  {
    name: "v-ed5f7f10",
    path: "/router/base/test2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15dc5e4e").then(next)
    },
  },
  {
    name: "v-7753ac50",
    path: "/router/base/test3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7753ac50").then(next)
    },
  },
  {
    name: "v-9409de3a",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9409de3a").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-0147d990",
    path: "/router/base/test4.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-14a24857").then(next)
    },
  },
  {
    name: "v-6a841b52",
    path: "/router/other/mock.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6a841b52").then(next)
    },
  },
  {
    name: "v-6ec65cc6",
    path: "/router/react/advance.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6ec65cc6").then(next)
    },
  },
  {
    name: "v-6cc0e312",
    path: "/router/react/keng.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6cc0e312").then(next)
    },
  },
  {
    name: "v-d6faa5ce",
    path: "/router/react-native/advance.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d6faa5ce").then(next)
    },
  },
  {
    name: "v-189bd103",
    path: "/router/react/redux.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-189bd103").then(next)
    },
  },
  {
    name: "v-14857750",
    path: "/router/vue/axios.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-14857750").then(next)
    },
  },
  {
    name: "v-8e2fbe9c",
    path: "/router/vue/keng.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8e2fbe9c").then(next)
    },
  },
  {
    name: "v-7bd59c99",
    path: "/router/vue/advance.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7bd59c99").then(next)
    },
  },
  {
    name: "v-31fea479",
    path: "/router/react-native/react-navigation.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-31fea479").then(next)
    },
  },
  {
    name: "v-2bfb0993",
    path: "/router/vue/keng.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2bfb0993").then(next)
    },
  },
  {
    name: "v-0b92bf10",
    path: "/router/vue/advance.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0b92bf10").then(next)
    },
  },
  {
    name: "v-7b738f12",
    path: "/router/vue/vuex.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-22f3101a").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]