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
@use "./SportsBettingAboutUs.scss";
</style>
