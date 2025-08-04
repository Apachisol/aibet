<template>
   <Header />
   <Banner />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv helpCnter">
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
      <div class="box">
        <img src="../../assets/img/Getting.png" alt="">
        <h1>Getting Started</h1>
      </div>
    <aboutAssBotCom />
    </div>
  </div>
   <Footer />
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Header from "../Components/Hader/Header.vue";
import TopBar from "../Components/TopBar/TopBar.vue";
import Footer from "../Components/Footer/Footer.vue";
import Banner from "../Components/Banner/Banner.vue";
import aboutAssBotCom from "../Components/aboutAssBotCom/aboutAssBotCom.vue";
export default defineComponent({
   components: {
     Header,
     TopBar,
     Footer,
     Banner,
     aboutAssBotCom
     
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
@use './SportsBettingHelpCenter.scss' ;
</style>