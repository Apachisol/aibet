<template>
  <Header />
  <TopBar />
  <div class="main-Content">
    <div class="rightDV">
      <div class="towColDataContent">
        <HomeLeftMenu />
        <div class="centerColDv">
          <div class="topRow">
            <h3>NRL Matches</h3>
            <div class="buttinDV">
              <button class="btn">Featured</button>
              <p>Upcoming</p>
              <p>All Rugby League</p>
            </div>
          </div>
          <div class="tableDv">
            <div class="haderDv">
              <div class="item">
                <h3>Games</h3>
              </div>
              <div class="item">
                <h3>H2H</h3>
              </div>
              <div class="item">
                <h3>Line</h3>
              </div>
              <div class="item">
                <h3>Total</h3>
              </div>
            </div>
            <div class="bodyDV">
              <div class="topRow">
                <p>Lakers VS Warriors | Today 16 july</p>
                <p>(Time: 19:00 - 21:00)</p>
                <img src="../../assets/icon/dateIconm.svg" alt="" />
              </div>
              <div class="bodyRow">
                <div class="item">
                  <div class="logoNme">
                    <img src="../../assets/img/NRl.png" alt="" />
                    <h5>Lakers</h5>
                  </div>
                </div>
                <div class="item"><h5>$2.10</h5></div>
                <div class="item"><h5>+7.5</h5></div>
                <div class="item"><h5>Over</h5></div>
              </div>
              <div class="bodyRow">
                <div class="item">
                  <div class="logoNme">
                    <img src="../../assets/img/NRl.png" alt="" />
                    <h5>Lakers</h5>
                  </div>
                </div>
                <div class="item"><h5>$2.10</h5></div>
                <div class="item"><h5>+7.5</h5></div>
                <div class="item"><h5>Over</h5></div>
              </div>
              <div class="bodyRow">
                <div class="tag">
                  Suggested bet: bet on team A $1.24 at betfair
                </div>
              </div>
              <div class="topRow">
                <p>Lakers VS Warriors | Today 16 july</p>
                <p>(Time: 19:00 - 21:00)</p>
                <img src="../../assets/icon/dateIconm.svg" alt="" />
              </div>
              <div class="bodyRow">
                <div class="item">
                  <div class="logoNme">
                    <img src="../../assets/img/NRl.png" alt="" />
                    <h5>Lakers</h5>
                  </div>
                </div>
                <div class="item"><h5>$2.10</h5></div>
                <div class="item"><h5>+7.5</h5></div>
                <div class="item"><h5>Over</h5></div>
              </div>
              <div class="bodyRow">
                <div class="item">
                  <div class="logoNme">
                    <img src="../../assets/img/NRl.png" alt="" />
                    <h5>Lakers</h5>
                  </div>
                </div>
                <div class="item"><h5>$2.10</h5></div>
                <div class="item"><h5>+7.5</h5></div>
                <div class="item"><h5>Over</h5></div>
              </div>
              <div class="bodyRow">
                <div class="tag">
                  Suggested bet: bet on team A $1.24 at betfair
                </div>
              </div>
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

export default defineComponent({
  components: {
    Header,
    TopBar,
    Footer,
    HomeLeftMenu,
    RightMenu,
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
@use "../HomePage/HomePage.scss" as *;
</style>
