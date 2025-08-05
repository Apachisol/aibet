<template>
  <Header />
  <Banner :fromAbout="false" />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv aboutUss">
      <div class="contentDv">
        <h1><img src="../../assets/img/about.png" alt="" />About Us</h1>
        <div class="maincon">
          <div class="formDv">
            <div class="aboutUsFor">
              <h3>About Us</h3>
              <p>Responsible Security Vulnerability Disclosure Program</p>
              <p>Program</p>
              <p>Responsible Gambling In Australia</p>
              <p>Customer Remediation - ACMA June 2022</p>
              <p>All About SportsBetting</p>
              <p>Benefits Of Being A SportsBetting Customer</p>
              <p>Services Offered By SportsBetting</p>
              <p>SportsBetting And BetEasy Merger</p>
              <p>Formal Complaints</p>
            </div>
            <div class="serchDv">
              <input type="text" placeholder="Suppliers" />
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
@use "./SportsBettingAboutUs.scss";
</style>
