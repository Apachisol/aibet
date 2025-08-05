<template>
  <Header />
  <TopBar />
  <div class="main-Content">
    <div class="rightDV">
      <MatchBanner />
      <div class="tableDv">
        <div class="haderDv">
          <h3>Odds Camparison</h3>
        </div>
            <div class="bodyDV">
              <div class="bodyRow">
                <div class="tagDv">
                  <p>Lakers VS Warriors | Today 16 july</p>
                <p>(Time: 19:00 - 21:00)</p>
                <img src="../../assets/icon/dateIconm.svg" alt="" />
                </div>
                <div class="mainRow">
                  <div class="items first">
                    <div class="matchesTeam">
                      <div class="teamLogo">
                        <img src="../../assets/img/teamLogo.png" alt="">
                        <h4>Warriors</h4>
                      </div>
                      <p>Vs</p>
                      <div class="teamLogo">
                        <img src="../../assets/img/teamLogo2.png" alt="">
                        <h4>Warriors</h4>
                      </div>
                    </div>
                  </div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><span>$2.10</span></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                </div>
              </div>
              <div class="bodyRow">
                <div class="tagDv">
                  <p>Lakers VS Warriors | Today 16 july</p>
                <p>(Time: 19:00 - 21:00)</p>
                <img src="../../assets/icon/dateIconm.svg" alt="" />
                </div>
                <div class="mainRow">
                  <div class="items first">
                    <div class="matchesTeam">
                      <div class="teamLogo">
                        <img src="../../assets/img/teamLogo.png" alt="">
                        <h4>Warriors</h4>
                      </div>
                      <p>Vs</p>
                      <div class="teamLogo">
                        <img src="../../assets/img/teamLogo2.png" alt="">
                        <h4>Warriors</h4>
                      </div>
                    </div>
                  </div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><span>$2.10</span></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                </div>
              </div>
              <div class="bodyRow">
                <div class="tagDv">
                  <p>Lakers VS Warriors | Today 16 july</p>
                <p>(Time: 19:00 - 21:00)</p>
                <img src="../../assets/icon/dateIconm.svg" alt="" />
                </div>
                <div class="mainRow">
                  <div class="items first">
                    <div class="matchesTeam">
                      <div class="teamLogo">
                        <img src="../../assets/img/teamLogo.png" alt="">
                        <h4>Warriors</h4>
                      </div>
                      <p>Vs</p>
                      <div class="teamLogo">
                        <img src="../../assets/img/teamLogo2.png" alt="">
                        <h4>Warriors</h4>
                      </div>
                    </div>
                  </div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><span>$2.10</span></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
                  <div class="items "><h5>$2.10</h5></div>
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
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
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
    const tabs = [
      "Games",
      "Sportsbet",
      "TAB",
      "Betfair",
      "Ladbrokes",
      "Tabtouch",
      "Betright",
    ];
    const activeTab = ref("Games");
    return {
      tabs,
      activeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "./Bookmakers.scss" as *;
</style>
