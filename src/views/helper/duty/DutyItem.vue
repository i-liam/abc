<template>
  <div class="duty-item animate__animated animate__fadeInUp">
    <div class="duty-animate__wrapper" :style="animateWrapperStyle">
      <div
        class="employee-duty animate__animated"
        :class="{'animate__fadeIn': showDuty}"
        v-show="showDuty"
      >
        <p v-for="item in duty" :key="item">{{item}}</p>
      </div>
      <div class="avatar animate__animated" :class="{'animate__shakeY': showDuty}">
        <img @click="handleAvatarClick" class="avatar__img" :src="avatar" :alt="name" />
        <p class="avatar__name">{{name}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  name: 'dutyItem',
  props: {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    duty: { type: Array, required: true }
  },
  data () {
    return {
      showDuty: false
    }
  },
  computed: {
    animateWrapperStyle (): unknown {
      return {
        transform: this.showDuty ? 'translateX(450px)' : 'translateX(0)'
      }
    }
  },
  methods: {
    handleAvatarClick () {
      if (this.showDuty) return
      this.showDuty = true
    }
  }
})
</script>

<style lang="scss" scoped>
$avatar-size: 80px !default;

.duty-item {
  width: 100%;
  color: #ffffff;
  position: relative;
  margin-bottom: 20px;

  .duty-animate__wrapper {
    width: $avatar-size;
    overflow: visible;
    transition: all 1s ease-in-out;

    .avatar {
      margin: 0 0.4rem;
      .avatar__img {
        width: $avatar-size;
        height: $avatar-size;
        border-radius: 50%;
        border: 1px solid #3ab5d2;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 10px 0 #3ab5d2;
          transition: all 200ms ease-in-out;
        }
      }

      .avatar__name {
        width: $avatar-size;
        text-align: center;
        font-size: 20px;
        margin: 0;
        color: #01a0c7;
      }
    }
    .employee-duty {
      position: absolute;
      right: $avatar-size;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: $avatar-size;
      white-space: nowrap;
      word-break: keep-all;
      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }
}
</style>
