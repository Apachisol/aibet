import Bookmakers from '../pages/Bookmakers/Bookmakers.vue'
import GetTrackers from '../pages/GetTrackers/GetTrackers.vue'
import NrlMatches from '../pages/NrlMatches/NrlMatches.vue'
import NrlMatchesDescription from '../pages/NrlMatchesDescription/NrlMatchesDescription.vue'
import SportsBettingAboutUs from '../pages/SportsBettingAboutUs/SportsBettingAboutUs.vue'
import SportsBettingAboutUsDetail from '../pages/SportsBettingAboutUsDetail/SportsBettingAboutUsDetail.vue'
import SportsBettingGettingStarted from '../pages/SportsBettingGettingStarted/SportsBettingGettingStarted.vue'
import SportsBettingHelpCenter from '../pages/SportsBettingHelpCenter/SportsBettingHelpCenter.vue'
import SportsBettingRegister from '../pages/SportsBettingRegister/SportsBettingRegister.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/homePage', name: 'homePage', component: HomePage },
  { path: '/Bookmakers', name: 'Bookmakers', component: Bookmakers },
  { path: '/getTrackers', name: 'getTrackers', component: GetTrackers },
  { path: '/NrlMatches', name: 'NrlMatches', component: NrlMatches },
  { path: '/NrlMatchesDescription', name: 'NrlMatchesDescription', component: NrlMatchesDescription },
  { path: '/AboutUs', name: 'AboutUs', component: SportsBettingAboutUs },
  { path: '/AboutUsDetail', name: 'AboutUsDetail', component: SportsBettingAboutUsDetail },
  { path: '/GettingStarted', name: 'GettingStarted', component: SportsBettingGettingStarted },
  { path: '/HelpCenter', name: 'HelpCenter', component: SportsBettingHelpCenter },
  { path: '/Register', name: 'Register', component: SportsBettingRegister },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

