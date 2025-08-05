<template>
  <Header />
  <Banner :fromAbout="false" />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv aboutUss">
      <div class="contentDv">
        <h1><img src="../../assets/img/Getting.png" alt="" /> Getting Started</h1>
        <div class="maincon">
          <div>
            <div class="aboutUsFor">
              <h3>Joining SportsBetting </h3>
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
          <div class="Categories">
            <h3>Categories</h3>
            <p>Getting Started</p>
            <p>My Account</p>
            <p>Payments</p>
            <p>Promotions And Bonus Bets</p>
            <p>Betting Basics</p>
            <p>Bet With Mates</p>
            <p>Racing</p>
            <p>Sports & Novelties</p>
            <p>Safer Gambling</p>
            <p>Troubleshooting</p>
            <p>Terms & Conditions</p>
            <h6>About Us</h6>
            <p>Spring Carnival Hub</p>
          </div>
        </div>
        <aboutAssBotCom />
      </div>
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
    aboutAssBotCom,
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
@use "../../pages/sports-betting-about-us/SportsBettingAboutUs.scss";
</style>
