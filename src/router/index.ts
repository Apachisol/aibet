import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Bookmakers from '../pages/bookmakers/Bookmakers.vue'
import getTrackers from '../pages/get-trackers/GetTrackers.vue'
import NrlMatches from '../pages/nrl-matches/NrlMatches.vue'
import NrlMatchesDescription from '../pages/nrl-matches-description/NrlMatchesDescription.vue'
import SportsBettingAboutUs from '../pages/sports-betting-about-us/SportsBettingAboutUs.vue'
import SportsBettingAboutUsDetail from '../pages/sports-betting-about-us-detail/SportsBettingAboutUsDetail.vue'
import SportsBettingGettingStarted from '../pages/sports-betting-getting-started/SportsBettingGettingStarted.vue'
import SportsBettingHelpCenter from '../pages/sports-betting-help-center/SportsBettingHelpCenter.vue'
import SportsBettingRegister from '../pages/sports-betting-register/SportsBettingRegister.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/home', name: 'home', component: Home },
  { path: '/Bookmakers', name: 'Bookmakers', component: Bookmakers },
  { path: '/getTrackers', name: 'getTrackers', component: getTrackers },
  { path: '/NrlMatches', name: 'NrlMatches', component: NrlMatches },
  { path: '/NrlMatchesDescription', name: 'NrlMatchesDescription', component: NrlMatchesDescription },
  { path: '/SportsBettingAboutUs', name: 'SportsBettingAboutUs', component: SportsBettingAboutUs },
  { path: '/SportsBettingAboutUsDetail', name: 'SportsBettingAboutUsDetail', component: SportsBettingAboutUsDetail },
  { path: '/SportsBettingGettingStarted', name: 'SportsBettingGettingStarted', component: SportsBettingGettingStarted },
  { path: '/SportsBettingHelpCenter', name: 'SportsBettingHelpCenter', component: SportsBettingHelpCenter },
  { path: '/SportsBettingRegister', name: 'SportsBettingRegister', component: SportsBettingRegister },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
