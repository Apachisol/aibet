<template>
  <Header />
  <TopBar />
  <div class="main-Content">
    <div class="rightDV">
      <MatchBanner />
      <div class="tableDv">
        <div class="haderDv">
          <h3>Enter your bet</h3>
        </div>
        <div class="bodyDV">
          <div class="bodyContentDv formBox">
            <div class="form">
              <div class="filedRow">
                <div class="filed">
                  <p>Team/Player*</p>
                  <select>
                    <option selected>Select Player</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="filed">
                  <p>Market*</p>
                  <select>
                    <option selected>Selrct Market</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="filedRow">
                <div class="filed">
                  <p>Odds*</p>
                  <input type="text" placeholder="Odds">
                </div>
                <div class="filed">
                  <p>Stake*</p>
                  <input type="text" placeholder="Stake">
                </div>
              </div>
              <div class="filedRow">
                <div class="filed">
                  <p>Bookmaker*</p>
                  <select>
                    <option selected>Select Player</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="filed">
                  <p>Results*</p>
                  <select>
                    <option selected>Selrct </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="haderDv">
          <h3>Summary</h3>
        </div>
        <div class="bodyDV">
          <div class="bodyContentDv childeTable">
            <div class="itemsRow bgRow">
              <div class="itemsDv"><h3>Bet</h3></div>
              <div class="itemsDv"><h3>Stake</h3></div>
              <div class="itemsDv"><h3>Odds</h3></div>
              <div class="itemsDv"><h3>Result</h3></div>
              <div class="itemsDv"><h3>Profit</h3></div>
            </div>
            <div class="itemsRow">
              <div class="itemsDv"><p>Sportsbet</p></div>
              <div class="itemsDv"><p>0.33</p></div>
              <div class="itemsDv"><p>171.5</p></div>
              <div class="itemsDv"><h4>WIN</h4></div>
              <div class="itemsDv"><span>+3.5</span></div>
            </div>
            <div class="itemsRow bgRow">
              <div class="itemsDv"><p>Sportsbet</p></div>
              <div class="itemsDv"><p>0.33</p></div>
              <div class="itemsDv"><p>171.5</p></div>
              <div class="itemsDv"><h4>WIN</h4></div>
              <div class="itemsDv"><span>+3.5</span></div>
            </div>
            <div class="itemsRow">
              <div class="itemsDv"><p>Sportsbet</p></div>
              <div class="itemsDv"><p>0.33</p></div>
              <div class="itemsDv"><p>171.5</p></div>
              <div class="itemsDv"><h4>WIN</h4></div>
              <div class="itemsDv"><span>+3.5</span></div>
            </div>
            <div class="itemsRow bgRow">
              <div class="itemsDv"><p>Sportsbet</p></div>
              <div class="itemsDv"><p>0.33</p></div>
              <div class="itemsDv"><p>171.5</p></div>
              <div class="itemsDv"><h4>WIN</h4></div>
              <div class="itemsDv"><span>+3.5</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightMenu />
  </div>
  <Footer />
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Header from "../../components/Header/Header.vue";
import TopBar from "../../components/TopBar/TopBar.vue";
import Footer from "../../components/Footer/Footer.vue";
import HomeLeftMenu from "../../components/HomeLeftMenu/HomeLeftMenu.vue";
import RightMenu from "../../components/RightMenu/RightMenu.vue";
import MatchBanner from "../../components/MatchBanner/MatchBanner.vue";
export default defineComponent({
  components: {
    Header,
    TopBar,
    Footer,
    HomeLeftMenu,
    RightMenu,
    MatchBanner,
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
@use "./GetTrackers.scss" as *;
</style>
