<template>
  <div class="duty-portal">
    <h3 class="animate__animated animate__fadeInUp">小伙伴们遇到问题该找谁？</h3>
    <p v-show="step > 0" class="animate__animated animate__fadeInUp">标准答案来咯！</p>
  </div>
</template>

<script lang="ts">
import '@/assets/scripts/canvas/willow.js'
import Vue from 'vue'
export default Vue.extend({
  name: 'dutyPortal',
  data () {
    return {
      step: 0
    }
  },
  methods: {
    handleClick () {
      if (this.step > 2) return
      this.step++
    }
  }
})
</script>

<style lang="scss" scoped>
.duty-portal {
  color: #333;
}
</style>
