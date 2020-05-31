<template>
  <div>
    <div v-if="!showDuty" class="duty-portal" @click="handleClick">
      <transition leave-active-class="animate__animated animate__bounceOutDown">
        <div class="question__wrapper" v-if="step <= 6">
          <div class="question animate__animated animate__fadeInUp">小伙伴们遇到问题该找谁？</div>
          <div
            v-show="step > 0"
            class="question__tip"
            style="left: 15%;top: -120px;transform: rotate(-25deg);"
          >？</div>
          <div
            v-show="step > 2"
            class="question__tip"
            style="left: 30%;top: 130px;transform: rotate(15deg);"
          >？</div>
          <div
            v-show="step > 1"
            class="question__tip"
            style="left: 45%;top: -100px;transform: rotate(45deg);"
          >？</div>
          <div
            v-show="step > 5"
            class="question__tip"
            style="left: 50%;top: 150px;transform: rotate(30deg);"
          >？</div>
          <div
            v-show="step > 3"
            class="question__tip"
            style="left: 80%;top: -110px;transform: rotate(-15deg);"
          >？</div>
          <div
            v-show="step >4"
            class="question__tip"
            style="left: 70%;top: 140px;transform: rotate(5deg);"
          >？</div>
        </div>
      </transition>
      <transition enter-active-class="animate__animated animate__bounceInDown">
        <p v-show="step > 6" class="answer__tip">标准答案来咯！</p>
      </transition>
    </div>
    <duty v-if="showDuty"></duty>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import duty from './Duty.vue'
export default Vue.extend({
  name: 'dutyPortal',
  components: { duty },
  data () {
    return {
      step: 0,
      showDuty: false
    }
  },
  methods: {
    showQuestion () {
      if (this.step > 5) return
      setTimeout(() => {
        this.step++
        this.showQuestion()
      }, 200)
    },
    handleClick () {
      if (this.step === 0) {
        this.showQuestion()
        return
      }
      if (this.step > 6) {
        this.showDuty = true
        return
      }
      this.step++
    }
  }
})
</script>

<style lang="scss" scoped>
.duty-portal {
  color: #333;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .question__wrapper {
    position: relative;
    top: 40%;

    .question {
      font-size: 88px;
      margin: 0;
      width: 100%;
      text-align: center;
      font-weight: bold;
    }
    .question__tip {
      font-size: 100px;
      font-weight: bold;
      position: absolute;
      color: #ff0000;
    }
  }

  .answer__tip {
    font-size: 100px;
    font-weight: bold;
    color: #ff0000;
    width: 100%;
    text-align: center;
    position: relative;
    top: 40%;
    margin: 0;
  }
}
</style>
