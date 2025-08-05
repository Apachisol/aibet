<template>
  <Header />
  <Banner />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv helpCnter">
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="" />
        <h1>Getting Started</h1>
      </div>
      <AboutBottom />
    </div>
  </div>
  <Footer />
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Header from "../../components/Header/Header.vue";
import TopBar from "../../components/TopBar/TopBar.vue";
import Footer from "../../components/Footer/Footer.vue";
import Banner from "../../components/Banner/Banner.vue";
import AboutBottom from "../../components/AboutBottom/AboutBottom.vue";

export default defineComponent({
  components: {
    Header,
    TopBar,
    Footer,
    Banner,
    AboutBottom,
  },
  props: {},
  setup() {
    onMounted(async () => {});
    onUnmounted(() => {});
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use "./SportsBettingHelpCenter.scss";
</style>
