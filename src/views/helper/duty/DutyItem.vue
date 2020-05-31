<template>
  <div class="duty-item">
    <div
      ref="avatar"
      class="avatar animate__animated"
      @click="handleAvatarClick"
      :class="{'animate__swing': showDuty}"
    >
      <p class="avatar__name">{{name}}</p>
      <img class="guajian" src="./images/star.png" />
      <img class="avatar__img" :src="avatar" :alt="name" />
    </div>
    <div
      class="employee-duty animate__animated"
      :class="{'animate__backInUp': showDuty}"
      v-show="showDuty"
    >
      <p v-for="item in duty" :key="item">{{item}}</p>
    </div>
    <div v-if="showAnouther" class="another-duty animate__animated animate__bounceIn">专治各种疑难杂症</div>
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
      showDuty: false,
      showAnouther: false
    }
  },
  methods: {
    handleAvatarClick () {
      const avatar = (this.$refs.avatar as HTMLElement)
      avatar.classList.remove('animate__swing')
      setTimeout(() => {
        avatar.classList.add('animate__swing')
      }, 10)
      if (this.showDuty) {
        if (this.name === '刘娜') {
          this.showAnouther = true
        }
        return
      }
      this.showDuty = true
    }
  }
})
</script>

<style lang="scss" scoped>
$avatar-size: 100px !default;

.duty-item {
  width: 100%;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  .avatar {
    margin: 0 0.4em 0.4em;
    position: relative;
    cursor: pointer;

    &:hover {
      .guajian {
        animation: rotate 4s linear infinite both;
      }
      .avatar__img {
        animation: breathe 2.6s linear infinite both;
      }
    }

    .guajian {
      width: $avatar-size + 2px;
      height: $avatar-size + 2px;
      position: absolute;
      left: 0;
      top: 30px;
    }

    .avatar__img {
      width: $avatar-size;
      height: $avatar-size;
      border-radius: 50%;
      border: 1px solid #3ab5d2;
    }

    .avatar__name {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 20px;
      margin: 0;
      color: #ffffff;
    }
  }

  .employee-duty {
    display: flex;
    justify-content: space-around;
    word-break: break-all;
    p {
      width: 17px;
      text-align: center;
      font-size: 17px;
      margin: 0;
      padding: 0 0.4em;
    }
  }

  .another-duty {
    margin-top: 1rem;
  }
}
</style>
