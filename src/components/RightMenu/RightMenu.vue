<template>
<div class="leftDv">
      <div class="dataDV">
        <div class="itemsDv">
          <div class="headerItem">
            <h3>AI Predictions</h3>
          </div>
          <div class="databan">
            <div class="items">
              <div class="" >
                <h4>Lakers</h4>
                <p>Calculated Value</p>
              </div>
              <div class="" >
                <h4>79%</h4>
                <p>$1.85</p>
              </div>
            </div>
            <div class="items">
              <div class="" >
                <h4>Lakers</h4>
                <p>Calculated Value</p>
              </div>
              <div class="" >
                <h4>79%</h4>
                <p>$1.85</p>
              </div>
            </div>
          </div>
        </div>
        <div class="itemsDv">
          <div class="headerItem"><h3>AI Predictions</h3></div>
          <div class="databan">
            <div class="firetDV">
              <p>Lakers $ 2.10</p>
            </div>
            <div class="tabDv">
              <div class="item fir">Lakers</div>
              <div class="bor"></div>
              <div class="item">$ 2.10</div>
            </div>
            <div class="tabDv">
              <div class="item fir">Total</div>
              <div class="bor"></div>
              <div class="item">$ 2.10</div>
            </div>
          </div>
        </div>
        <div class="itemsDv">
          <div class="headerItem">
            <h3>AI Predictions</h3>
          </div>
          <div class="databan">
            <div class="firetDV">
              <p>Segment</p>
              <p>Amount</p>
            </div>
            <div class="tabDv">
              <div class="item fir"> LaPers</div>
              <div class="bor"></div>
              <div class="item">$1.90</div>
            </div>
            <div class="tabDv">
              <div class="item fir">First Half</div>
              <div class="bor"></div>
              <div class="item">$1.85</div>
            </div>
            <div class="tabDv">
              <div class="item fir">Quarter 3</div>
              <div class="bor"></div>
              <div class="item">$1.88</div>
            </div>
          </div>
        </div>
        <div class="itemsDv">
          <div class="headerItem">
            <h3>AI Predictions & Weather Forecast:</h3>
          </div>
          <div class="databan">
            <div class="lasrChild">
              <h6>WEATHER IMPACT</h6>
              <p>Soldier Field, Chicago</p>
            </div>
            <div class="lasrChild">
              <h6><i class="fa fa-sun-o" aria-hidden="true"></i> 72°F (22°C)  |  💧 10%</h6>
              <h6><span>💨</span> 8mph NE      |    <i class="fa fa-exclamation-triangle ereor" aria-hidden="true"></i> Low Risk</h6>
            </div>
            <div class="lasrChild">
              <h6>Hourly Forecast:</h6>
              <h6><i class="fa fa-sun-o" aria-hidden="true"></i> 3PM  75°F  →  6PM 🌧️ 68°F</h6>
            </div>
            <div class="lasrChild">
              <h6>AI Adjustments:</h6>
              <h6>• TOTAL ↓ 4.5 pts (Rain)</h6>
              <h6>• QB Passing ↓ 7% (Wind) </h6>
            </div>
          </div>
        </div>
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
    const showDiv = ref(false);
    return {
      showDiv
    };
  },
});
</script>

<style lang="scss" scoped>
@use './RightMenu.scss' as *;
</style>
