<template>
  <Header />
  <Banner :fromAbout="false" />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv aboutUss">
      <div class="contentDv">
        <h1>Responsible Gambling In Australia</h1>
        <div class="maincon">
          <div class="formDv">
            <div class="aboutUsFor Detail">
              <p class="mb-3">
                Sportsbet has been a leader in establishing responsible gambling
                initiatives and tools to protect its customers and the wider
                community. It has supported restrictions on advertising to
                mitigate the risk of advertising indirectly to minors (such as
                restrictions on television advertising prior to 8PM), and in
                2017 played a key role in establishing the independent peak body
                representing online wagering, Responsible Wagering Australia.
              </p>
              <p class="mb-3">
                In 2015, Sportsbet launched the responsible gambling tool, Take
                a Break, the industry's first self-service product, that allows
                customers to step away from using the Sportsbet product either
                temporarily or permanently.
              </p>
              <p>
                Sportsbet was also an early adopter of providing the option of
                Deposit Limits - allowing a customer to set a personal deposit
                limit in order to maintain control and limitation. Deposit
                limits can be set for a 24 hour, weekly or 28 day period.
              </p>
              <div class="boderDv"></div>
              <p class="mb-3">
                Unsure about your gambling habits? Have a chat to someone at
                Gambler's Help, or find out more on our website.
              </p>
              <h6>Gambler's Help</h6>
              <h6>1800 858 858</h6>
              <h6 class="mb-3">SportsBetting Responsible Gambling</h6>
              <p class="mb-3">
                BetStop – the National Self-Exclusion Register™ is a free
                service provided by the Australian Government that allows people
                to self-exclude from all licensed Australian online and phone
                wagering providers in a single process. Registering is quick and
                easy and can be done at www.betstop.gov.au.
              </p>
              <p>
                While you are registered, Australian licensed online and phone
                wagering providers must not open a wagering account for you,
                allow you to place bets, or send you marketing material.
              </p>
            </div>
            <div class="serchDv detail">
              <div>
                <h3>Was this article helpful?</h3>
                <p class="m-0">1 out of 1 found this helpful</p>
              </div>
              <div class="d-flex gap-4 likeiMg">
                <img src="../../assets/img/like.png" alt="" />
                <img src="../../assets/img/unlike.png" alt="" />
              </div>
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
@use "../SportsBettingAboutUs/SportsBettingAboutUs.scss";
</style>
