import Vue from "vue";
import Router from "vue-router";
// Auth
import AuthContainer from '@/app/modules/auth-view/containers/auth-container/auth-container.vue';
import AuthLogin from '@/app/modules/auth-view/components/auth-login/auth-login.vue';
import AuthRegister from '@/app/modules/auth-view/components/auth-register/auth-register.vue';
// Main
import MainView from '@/app/modules/main-view/main-view.vue';
import HomeContainer from '@/app/modules/main-view/home/containers/home-container/home-container.vue';
import ProfileContainer from '@/app/modules/main-view/profile/containers/profile-container/profile-container.vue';
// Docs
import DocumentationContainer from '@/app/modules/docs-view/containers/documentation-container/documentation-container.vue';
// gettings started
import DocumentationOverview from '@/app/modules/docs-view/components/getting-started/documentation-overview/documentation-overview.vue';
import DocumentationInstallation from '@/app/modules/docs-view/components/getting-started/documentation-installation/documentation-installation.vue';
import DocumentationTechnologies from '@/app/modules/docs-view/components/getting-started/documentation-technologies/documentation-technologies.vue';
// project structure
import DocumentationRoot from '@/app/modules/docs-view/components/project-structure/documentation-root/documentation-root.vue';
import DocumentationApp from '@/app/modules/docs-view/components/project-structure/documentation-app/documentation-app.vue';
import DocumentationModules from '@/app/modules/docs-view/components/project-structure/documentation-modules/documentation-modules.vue';
import DocumentationStyles from '@/app/modules/docs-view/components/project-structure/documentation-styles/documentation-styles.vue';
import DocumentationAssets from '@/app/modules/docs-view/components/project-structure/documentation-assets/documentation-assets.vue';
import DocumentationGenerator from '@/app/modules/docs-view/components/project-structure/documentation-generator/documentation-generator.vue';
// coding standards
import DocumentationTemplate from '@/app/modules/docs-view/components/coding-standards/documentation-template/documentation-template.vue';
import DocumentationCSS from '@/app/modules/docs-view/components/coding-standards/documentation-css/documentation-css.vue';
import DocumentationVue from '@/app/modules/docs-view/components/coding-standards/documentation-vue/documentation-vue.vue';
import DocumentationJavascript from '@/app/modules/docs-view/components/coding-standards/documentation-javascript/documentation-javascript.vue';
// third parties
import DocumentationVuex from '@/app/modules/docs-view/components/third-parties/documentation-vuex/documentation-vuex.vue';
import DocumentationAxios from '@/app/modules/docs-view/components/third-parties/documentation-axios/documentation-axios.vue';
import DocumentationVuelidate from '@/app/modules/docs-view/components/third-parties/documentation-vuelidate/documentation-vuelidate.vue';
import DocumentationUnitTesting from '@/app/modules/docs-view/components/third-parties/documentation-unit-testing/documentation-unit-testing.vue';
import DocumentationFirebase from '@/app/modules/docs-view/components/third-parties/documentation-firebase/documentation-firebase.vue';

// Error
import ErrorView from '@/app/modules/error-view/error-view.vue';

import store from '@/app/stores/store';

Vue.use(Router);
const rootTitle = 'Vue Boilerplate';

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainView,
      meta: {title: rootTitle},
      children: [
        {
          path: '/',
          name: "Home Container",
          component: HomeContainer,
          meta: {title: rootTitle},
        },
        {
          path: '/profile',
          name: "Profile Container",
          component: ProfileContainer,
          meta: {title: `${rootTitle} - Profile`},
          beforeEnter (to, from, next) {
            // redirect user to login if not authenticated
            if (store.state.authUser.token) {
              next();
            } else {
              next('/login');
            }
          }
        },
      ]
    },
    {
      path: "/auth",
      component: AuthContainer,
      children: [
        {
          path: '/login',
          name: "Auth Login",
          component: AuthLogin,
          meta: {title: `${rootTitle} - Login`},
        },
        {
          path: '/register',
          name: "Auth Register",
          component: AuthRegister,
          meta: {title: `${rootTitle} - Register`},
        },
      ]
    },
    {
      path: "/docs",
      name: "Documentation Container",
      component: DocumentationContainer,
      children: [
        {
          path: '/',
          redirect: 'overview'
        },
        // gettings started
        {
          path: 'overview',
          name: "Documentation Overview",
          component: DocumentationOverview,
          meta: {title: `${rootTitle} - Overview`},
        },
        {
          path: 'technologies',
          name: "Documentation Technologies",
          component: DocumentationTechnologies,
          meta: {title: `${rootTitle} - Technologies`},
        },
        {
          path: 'installation',
          name: "Documentation Installation",
          component: DocumentationInstallation,
          meta: {title: `${rootTitle} - Installation`},
        },
        // project structure
        {
          path: 'root',
          name: "Documentation Root",
          component: DocumentationRoot,
          meta: {title: `${rootTitle} - Root`},
        },
        {
          path: 'app',
          name: "Documentation App",
          component: DocumentationApp,
          meta: {title: `${rootTitle} - App`},
        },
        {
          path: 'modules',
          name: "Documentation Modules",
          component: DocumentationModules,
          meta: {title: `${rootTitle} - Modules`},
        },
        {
          path: 'styles',
          name: "Documentation Styles",
          component: DocumentationStyles,
          meta: {title: `${rootTitle} - Styles`},
        },
        {
          path: 'assets',
          name: "Documentation Assets",
          component: DocumentationAssets,
          meta: {title: `${rootTitle} - Assets`},
        },{
          path: 'generator',
          name: "Documentation Generator",
          component: DocumentationGenerator,
          meta: {title: `${rootTitle} - Template Generator`},
        },
        // coding standards
        {
          path: 'template',
          name: "Documentation Template",
          component: DocumentationTemplate,
          meta: {title: `${rootTitle} - Template`},
        },
        {
          path: 'css',
          name: "Documentation CSS",
          component: DocumentationCSS,
          meta: {title: `${rootTitle} - CSS & Styles`},
        },
        {
          path: 'vue',
          name: "Documentation Vue",
          component: DocumentationVue,
          meta: {title: `${rootTitle} - Vue`},
        },
        {
          path: 'javascript',
          name: "Documentation JavaScript",
          component: DocumentationJavascript,
          meta: {title: `${rootTitle} - Javascript`},
        },
        // third parties
        {
          path: 'vuex',
          name: "Documentation Vuex",
          component: DocumentationVuex,
          meta: {title: `${rootTitle} - Vuex (State Management)`},
        },
        {
          path: 'axios',
          name: "Documentation Axios",
          component: DocumentationAxios,
          meta: {title: `${rootTitle} - Axios (HTTP)`},
        },
        {
          path: 'vuelidate',
          name: "Documentation Vuelidate",
          component: DocumentationVuelidate,
          meta: {title: `${rootTitle} - Vuelidate (Validation)`},
        },
        {
          path: 'unit-testing',
          name: "Documentation Unit Testing",
          component: DocumentationUnitTesting,
          meta: {title: `${rootTitle} - Vue Test Utils / Jest (Unit Testing)`},
        },
        {
          path: 'firebase',
          name: "Documentation Firebase",
          component: DocumentationFirebase,
          meta: {title: `${rootTitle} - Firebase (Auth & Database)`},
        },
      ]
    },
    {
      path: "*",
      name: "ErrorView",
      component: ErrorView,
      meta: {title: `${rootTitle} - Page Not Found`},
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
