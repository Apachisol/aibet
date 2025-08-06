<template>
  <div class="headerDv">
    <div class="d-flex justify-content-between align-items-start informationDv">
      <figure>
        <img src="../../assets/img/mainLogo.png" alt="" />
      </figure>
      <button class="menu-btn mobile-show" @click="showDiv = !showDiv">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <div class="serchDv">
      <img src="../../assets/icon/Group.svg" alt="" />
      <input type="text" placeholder="Search" />
    </div>
    <div class="mobile-hide">
      <div class="loginDv">
        <div class="email">
          <input type="text" placeholder="Email" />
          <div class="checkDv mobile-hide">
            <input type="checkbox" id="check" class="chekcbox" />
            <p>Remember me</p>
          </div>
        </div>
        <div class="email">
          <div class="pass">
            <input type="text" placeholder="Password" />
            <div class="mobile-show">
              <div class="d-flex justify-content-start">
                <div class="checkDv">
                  <input type="checkbox" id="check" class="chekcbox" />
                  <p>Remember me</p>
                </div>
                <div class="checkDv ml-3">
                  <p>Forgot your username / password ?</p>
                </div>
              </div>
            </div>
            <div class="buttonDV">
              <button>Login</button>
              <button class="tres">Register</button>
              <img src="../../assets/icon/profile.svg" alt="" />
            </div>
          </div>
          <div class="checkDv mobile-hide">
            <p>Forgot your username / password ?</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-show w-100" v-if="showDiv">
      <div class="loginDv">
        <div class="email">
          <input type="text" placeholder="Email" />
          <div class="checkDv mobile-hide">
            <input type="checkbox" id="check" class="chekcbox" />
            <p>Remember me</p>
          </div>
        </div>
        <div class="email">
          <div class="pass">
            <input type="text" placeholder="Password" />
            <div class="mobile-show">
              <div class="d-flex justify-content-start">
                <div class="checkDv">
                  <input type="checkbox" id="check" class="chekcbox" />
                  <p>Remember me</p>
                </div>
                <div class="checkDv ml-3">
                  <p>Forgot your username / password ?</p>
                </div>
              </div>
            </div>
            <div class="buttonDV">
              <button>Login</button>
              <button class="tres">Register</button>
              <img src="../../assets/icon/profile.svg" alt="" />
            </div>
          </div>
          <div class="checkDv mobile-hide">
            <p>Forgot your username / password ?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  components: {},
  props: {},
  setup() {
    onMounted(async () => {});
    onUnmounted(() => {});
    const showDiv = ref(false);
    return {
      showDiv,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "./Header..scss" as *;
</style>
