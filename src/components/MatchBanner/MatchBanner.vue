<template>
     <div class="matchesBanner">
        <div class="logoDv">
          <img src="../../assets/img/nrlMatch.png" alt="">
          <h2>NRL Matches</h2>
        </div>
        <div class="tabButtonRow">
          <div class="itemsDv" v-for="tab in tabs " :key="tab" :class="{active:activeTab === tab} " @click="activeTab=tab">{{ tab  }}</div>
        </div>
      </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
export default defineComponent({
  components: {
  },
  props: {},
  setup() {
    onMounted(async () => {});
    onUnmounted(() => {});
    const tabs =['NRL', 'AFL', 'NBA', 'NFL','NHL','MLB','NBL'];
    const activeTab  = ref ("NRL");
     return {
      tabs,
      activeTab
     };
  },
});
</script>

<style lang="scss" scoped>
@use './matchBanner.scss' as *;
</style>
