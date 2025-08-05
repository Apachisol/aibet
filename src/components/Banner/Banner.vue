<template>
  <div class="bannerDv">
    <div class="contentDv">
      <img src="../../assets/img/man.png" alt="" class="bannerImg" />
      <img src="../../assets/img/dImg.png" alt="" class="bannerImg dImg" />
      <div class="centerDv">
        <h1>Need a habd? <span>Just shout </span></h1>
        <div class="serchDv">
          <img src="../../assets/icon/Group.svg" alt="" />
          <input type="text" placeholder="Search for answer..." />
        </div>
      </div>
      <div class="contect">
        <h3>Contact Us</h3>
        <div class="item">
          <button>img 13 33 56</button>
          <p>Sportsbetting</p>
        </div>
        <div class="item">
          <button>Chat with us</button>
          <p>6.00am - Midnight AEST</p>
        </div>
        <div class="item">
          <button>1800 999 888</button>
          <p>Customer Service</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bottombar" v-if="fromAbout">
    <h1><img src="../../assets/icon/Volume 2.svg" alt="" /> Anouncements</h1>
    <div class="cnterDv">
      <div class="item">
        <h3>Personal Details</h3>
        <p>
          SportsBetting is committed to ensuring that all member’s account
          details are kept up to date. <span>Click here for more</span>
        </p>
      </div>
      <div class="item">
        <h3>Personal Details</h3>
        <p>
          SportsBetting is committed to ensuring that all member’s account
          details are kept up to date. <span>Click here for more</span>
        </p>
      </div>
    </div>
  </div>
  <div class="bottomAllover">
    <div class="centerDv">
      <h3>SportsBetting Help Centre  →  <span>About Us</span></h3>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
export default defineComponent({
  components: {},
  props: {
    fromAbout: Boolean,
  },
  setup() {
    onMounted(async () => {});
    onUnmounted(() => {});
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use "./Banner.scss";
</style>
