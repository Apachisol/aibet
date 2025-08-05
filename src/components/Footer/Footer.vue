<template>
<div class="FooterDv">
    <div class="content">
        <p>Are you ready?</p>
         <h2>Let’s get started</h2>
         <button>Get started</button>
         <div class="barDV">
            <h6>Campaigns</h6>
            <h6>Email Marketing</h6>
            <h6>Branding</h6>
            <h6>Offline</h6>
         </div>
         <h5>Copyright © 2025. LogoIpsum. All rights reserved.</h5>
    </div>
    <img src="../../assets/img/footerLeft.png" alt="" class="leftImg">
    <img src="../../assets/img/footerRight.png" alt="" class="rightImg">
</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  components: {
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
@use './Footer.scss' as *;
</style>
