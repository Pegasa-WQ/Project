import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import bugs from './bugs'
import testCases from './testCases'
import projects from './projects'
import testReview from './testReview'
import roles from './roles'
import testRun from './testRun'
import statisticks from './statistics'
import testSuite from './testSuite'
import testPlan from './testPlan.js'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    bugs,
    testCases,
    projects,
    testReview,
    roles,
    testRun,
    statisticks,
    testSuite,
    testPlan,
    users
  }
})
