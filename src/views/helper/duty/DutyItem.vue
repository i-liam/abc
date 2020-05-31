<template>
  <div class="duty-item">
    <div class="avatar animate__animated" :class="{'animate__swing': showDuty}">
      <p class="avatar__name">{{name}}</p>
      <img @click="handleAvatarClick" class="avatar__img" :src="avatar" :alt="name" />
    </div>
    <div
      class="employee-duty animate__animated"
      :class="{'animate__backInUp': showDuty}"
      v-show="showDuty"
    >
      <p v-for="item in duty" :key="item">{{item}}</p>
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
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

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
      margin: 0 0 0.6em;
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
}
</style>
