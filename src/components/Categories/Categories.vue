<template>
    <div class="Categories">
            <h3>Categories</h3>
            <p> <i class="fa fa-tasks" aria-hidden="true"></i> Getting Started</p>
            <p> <i class="fa fa-user" aria-hidden="true"></i>My Account</p>
            <p><i class="fa fa-credit-card" aria-hidden="true"></i> Payments</p>
            <p> <i class="fa fa-credit-card" aria-hidden="true"></i> Promotions And Bonus Bets</p>
            <p> <i class="fa fa-cog" aria-hidden="true"></i> Betting Basics</p>
            <p> <i class="fa fa-user-circle" aria-hidden="true"></i>Bet With Mates</p>
            <p> <i class="fa fa-smile-o" aria-hidden="true"></i>Racing</p>
            <p> <i class="fa fa-spotify" aria-hidden="true"></i>Sports & Novelties</p>
            <p> <i class="fa fa-check" aria-hidden="true"></i>Safer Gambling</p>
            <p><i class="fa fa-commenting" aria-hidden="true"></i> Troubleshooting</p>
            <p> <i class="fa fa-empire" aria-hidden="true"></i>Terms & Conditions</p>
            <h6> <i class="fa fa-info-circle" aria-hidden="true"></i>About Us</h6>
            <p>Spring Carnival Hub</p>
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
    const showDiv = ref(false);
    return {
      showDiv
    };
  },
});
</script>

<style lang="scss" scoped>
@use './Categories.scss' as *;
</style>
