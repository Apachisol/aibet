<template>
   <Header />
  <TopBar />
   <Footer />
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Header from "../Components/Hader/Header.vue";
import TopBar from "../Components/TopBar/TopBar.vue";
import Footer from "../Components/Footer/Footer.vue";
export default defineComponent({
   components: {
     Header,
     TopBar,
     Footer
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
@use './SportsBettingHelpCenter.scss' as *;
</style>