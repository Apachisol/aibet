<template>
  <Header />
  <Banner :fromAbout="false" />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv aboutUss">
      <div class="contentDv">
        <h1>
          <img src="../../assets/img/Getting.png" alt="" /> Getting Started
        </h1>
        <div class="maincon">
          <div class="formDv">
            <div class="aboutUsFor">
              <h3>Joining SportsBetting</h3>
              <p>How Do I Join?</p>
              <p>Creating Username & Password</p>
              <p>Duplicate Accounts</p>
              <p>Third-Party Policy</p>
              <p>Restricted Territories</p>
              <p>What Is SportsBetting’s Age Policy?</p>
            </div>
            <div class="serchDv">
              <input type="text" placeholder="Suppliers" />
              <img src="../../assets/icon/plus.svg" alt="" />
            </div>
            <div class="serchDv">
              <input type="text" placeholder="Feed" />
              <img src="../../assets/icon/plus.svg" alt="" />
            </div>
          </div>
        <Categories />
          
        </div>
        <AboutBottom />
      </div>
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
import Categories from "../../components/Categories/Categories.vue";

export default defineComponent({
  components: {
    Header,
    TopBar,
    Footer,
    Banner,
    AboutBottom,
    Categories
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
@use "../SportsBettingAboutUs/SportsBettingAboutUs.scss";
</style>
