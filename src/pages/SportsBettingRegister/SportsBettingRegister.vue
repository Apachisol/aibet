<template>
  <Header />
  <TopBar />
  <div class="sigaleContentDv">
    <div class="mainContentDataDv">
      <div class="formcontent">
        <h2>LET'S GET YOU SIGNED UP!</h2>
        <div class="formDV">
          <h3>Your personal details must match your ID to start betting.</h3>
          <div class="itemDv">
            <select>
              <option selected>Mr</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input type="text" placeholder="First Name" />
          </div>
          <div class="itemDv">
            <input type="text" placeholder="Middle Name" />
          </div>
          <div class="itemDv">
            <input type="text" placeholder="Last Name" />
          </div>
          <div class="itemDv">
            <input type="date" placeholder="Date of Birth" />
          </div>
          <div class="itemDv">
            <input type="text" placeholder="Australia" />
          </div>
          <div class="itemDv">
            <input type="text" placeholder="Address" />
          </div>
          <div class="itemDv">
            <input type="number" placeholder="+92" />
          </div>
        </div>
        <div class="formDV">
          <h3>Create your Log In details</h3>
          <div>
            <div class="itemDv text">
              <input type="text" placeholder="Email Address" />
            </div>
            <p>This will be your username when you need to log in</p>
          </div>
          <div class="itemDv">
            <input type="text" placeholder="Password" />
          </div>
          <button>Register</button>
        </div>
      </div>
      <div class="boderdv mobile-hide"></div>
      <div class="textDv">
        <div class="colDv">
          <h3>By clicking 'Register' I acknowledge and agree:</h3>
          <div class="itemDot">
            <div class="dot"></div>
            <p>
              I am over 18 and have read and agree to the Sportsbetting Terms
              and Conditions, Bonus Bet Terms and Conditions and Privacy Policy.
            </p>
          </div>
          <div class="itemDot">
            <div class="dot"></div>
            <p>
              I am over 18 and have read and agree to the Sportsbetting Terms
              and Conditions, Bonus Bet Terms and Conditions and Privacy Policy.
            </p>
          </div>
          <div class="itemDot">
            <div class="dot"></div>
            <p>
              I am over 18 and have read and agree to the Sportsbetting Terms
              and Conditions, Bonus Bet Terms and Conditions and Privacy Policy.
            </p>
          </div>
          <div class="itemDot">
            <p>
              For South Australian residents, Sportsbetting's gambling
              operations are governed by the South Australian Gambling Codes of
              Practice. Licensed and regulated by the Northern Territory Racing
              Commission.
            </p>
          </div>
        </div>
        <div class="colDv">
          <p>
            Sportsbetting - the National Self-Exclusion Register™ is a free
            service provided by the Australian Government that allows people to
            self-exclude from all licensed Australian online and phone wagering
            providers in a single process. Registering is quick and easy and can
            be done at www.betstop.gov.au. While you are registered, Australian
            licensed online and phone wagering providers must not open a
            wagering account for you, allow you to place bets, or send you
            marketing material.
          </p>
          <div class="coldv">
            <h3>WHAT’S GAMBLING REALLY COSTING YOU?</h3>
            <p>
              For free and confidential support call 1800 858 858 or visit
              gamblinghelponline.org.au
            </p>
          </div>
        </div>
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
export default defineComponent({
  components: {
    Header,
    TopBar,
    Footer,
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
@use "./SportsBettingRegister.scss" as *;
</style>
