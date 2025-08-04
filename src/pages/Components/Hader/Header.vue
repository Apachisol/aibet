<template>
  <div class="headerDv">
    <figure>
      <img src="../../../assets/img/mainLogo.png" alt="">
    </figure>
    <div class="serchDv">
      <img src="../../../assets/icon/Group.svg" alt="">
      <input type="text" placeholder="Search">
    </div>
    <div class="loginDv">
      <div class="email">
        <input type="text" placeholder="Email">
        <div class="checkDv">
          <input type="checkbox" id="check" class="chekcbox">
          <p>Remember me</p>
        </div>
      </div>
      <div class="email">
        <div class="pass">
          <input type="text" placeholder="Password">
          <div class="buttonDV">
            <button>Login</button>
            <button class="tres">Register</button>
            <img src="../../../assets/icon/profile.svg" alt="">
          </div>
        </div>
        <div class="checkDv">
          <p>Forgot your username / password ?</p>
        </div>
      </div>
    </div>
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
@use './Header..scss' as *;
</style>
