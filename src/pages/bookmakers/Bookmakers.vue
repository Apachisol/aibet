<template>
  <Header />
  <TopBar />
  <div class="main-Content">
    <div class="rightDV">
      <MatchBanner />
      <div class="tableDv">
        <div class="haderDv">
          <h3>Odds Camparison</h3>
        </div>
        <div class="tabButtonRow">
          <div
            class="itemsDv"
            v-for="tab in tabs"
            :key="tab"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </div>
        </div>
        <div class="bodyDV">
          <div class="bodyRow">
            <div class="tagDv">
              <p>Lakers VS Warriors | Today 16 july</p>
              <p>(Time: 19:00 - 21:00)</p>
              <img src="../../assets/icon/dateIconm.svg" alt="" />
            </div>
            <div class="mainRow">
              <div class="items first"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightMenu />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import Header from "../../components/Header/Header.vue";
import TopBar from "../../components/TopBar/TopBar.vue";
import Footer from "../../components/Footer/Footer.vue";
import HomeLeftMenu from "../../components/HomeLeftMenu/HomeLeftMenu.vue";
import RightMenu from "../../components/RightMenu/RightMenu.vue";
import MatchBanner from "../../components/MatchBanner/MatchBanner.vue";
export default defineComponent({
  components: {
    Header,
    TopBar,
    Footer,
    HomeLeftMenu,
    RightMenu,
    MatchBanner,
  },
  props: {},
  setup() {
    onMounted(async () => {});
    onUnmounted(() => {});
    const tabs = [
      "Games",
      "Sportsbet",
      "TAB",
      "Betfair",
      "Ladbrokes",
      "Tabtouch",
      "Betright",
    ];
    const activeTab = ref("Games");
    return {
      tabs,
      activeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "./Bookmakers.scss" as *;
</style>
