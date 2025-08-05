<template>
  <Header />
  <TopBar />
  <div class="main-Content">
    <div class="rightDV">
      <MatchBanner />
      <div class="topRowOpen">
        <h3>Top Marketes</h3>
        <img src="../../assets/icon/openicon.svg" alt="" />
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
    const tabs = ["NRL", "AFL", "NBA", "NFL", "NHL", "MLB", "NBL"];
    const activeTab = ref("NRL");
    return {
      tabs,
      activeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "./NrlMatchesDescription.scss" as *;
</style>
