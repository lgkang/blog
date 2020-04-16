/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\ASUS\\AppData\\Roaming\\npm\\node_modules\\vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-df77a4b6",
    path: "/router/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-df77a4b6").then(next)
    },
  },
  {
    path: "/router/index.html",
    redirect: "/router/"
  },
  {
    name: "v-e6a9a73c",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e6a9a73c").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-8be8310e",
    path: "/router/base/test1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8be8310e").then(next)
    },
  },
  {
    name: "v-15dc5e4e",
    path: "/router/base/test2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15dc5e4e").then(next)
    },
  },
  {
    name: "v-6b1da399",
    path: "/router/base/test4.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6b1da399").then(next)
    },
  },
  {
    name: "v-3017ba39",
    path: "/router/base/test3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3017ba39").then(next)
    },
  },
  {
    name: "v-14a24857",
    path: "/router/react-native/keng.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-14a24857").then(next)
    },
  },
  {
    name: "v-5b4f3f32",
    path: "/router/react/advance.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b4f3f32").then(next)
    },
  },
  {
    name: "v-4efb191a",
    path: "/router/react/keng.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4efb191a").then(next)
    },
  },
  {
    name: "v-266c99f3",
    path: "/router/react/react-router.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-266c99f3").then(next)
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
    name: "v-0e81abf1",
    path: "/router/vue/axios.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0e81abf1").then(next)
    },
  },
  {
    name: "v-6bb0b1f3",
    path: "/router/vue/vue-router.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6bb0b1f3").then(next)
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
    name: "v-22f3101a",
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