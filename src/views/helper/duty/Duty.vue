<template>
  <div class="duty" @click="playMusic">
    <audio ref="music" loop="loop" src="./media/music.mp3" autoplay="autoplay"></audio>
    <!-- <el-autocomplete
      class="search__box"
      placeholder="不知道找谁？搜一搜试试。"
      prefix-icon="el-icon-search"
      v-model="searchDuty"
      :debounce="200"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      select-when-unmatched
      @select="handleSelect"
    ></el-autocomplete>-->
    <div class="duty__wrapper">
      <duty-item v-for="(employee) in matchedEmployees" :key="employee.name" v-bind="employee"></duty-item>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dutyItem from './DutyItem.vue'
interface SearchOption {
  value: string;
}
interface Employee {
  name: string;
  avatar: string;
  duty: string[];
}

export default Vue.extend({
  name: 'Duty',
  components: { dutyItem },
  data () {
    return {
      searchDuty: '',
      selectedDuty: '',
      employees: [
        {
          name: '程帅',
          avatar: require('./images/chengshuai.jpg'),
          duty: [
            '各种设计问题'
          ]
        },
        {
          name: '姚笑颜',
          avatar: require('./images/yaoxiaoyan.jpg'),
          duty: [
            '产品订单︵ 对毛除外 ︶',
            '现有产品的信息',
            '各种定制材料'
          ]
        },
        {
          name: '冷晓峰',
          avatar: require('./images/lengxiaofeng.jpg'),
          duty: [
            '配货',
            '定制要求',
            '查库存'
          ]
        },
        {
          name: '孙亚琳',
          avatar: require('./images/sunyalin.jpg'),
          duty: [
            '装箱',
            '库存表更新',
            '发货'
          ]
        },
        {
          name: '刘娜',
          avatar: require('./images/liuna.jpg'),
          duty: [
            '对毛订单',
            '特殊定制',
            '客户反馈',
            '产品信息',
            '新品'
          ]
        }
      ]
    }
  },
  computed: {
    dutyList (): SearchOption[] {
      const _dutyList: SearchOption[] = []
      this.employees.forEach(employee => {
        employee.duty.forEach(duty => {
          _dutyList.push({ value: duty })
        })
      })
      return _dutyList
    },
    matchedEmployees (): Employee[] {
      if (this.selectedDuty === '') return this.employees
      return this.employees.filter(employee => {
        return employee.duty.some(duty => duty.toLowerCase().indexOf(this.selectedDuty) !== -1)
      })
    }
  },
  mounted () {
    require('@/assets/scripts/canvas/willow.js')
  },
  methods: {
    playMusic () {
      (this.$refs.music as HTMLMediaElement).play()
    },
    querySearch (queryString: string, cb: (data: SearchOption[]) => void) {
      const _result: SearchOption[] = this.dutyList.filter(item => item.value.toLowerCase().indexOf(queryString) !== -1)
      cb(_result)
    },
    handleSelect (item: SearchOption) {
      this.selectedDuty = item.value
    }
  }
})
</script>

<style lang="scss" scoped>
.duty {
  width: 990px;
  position: relative;
  margin: 0 auto;
  padding: 20px 0;
  height: 400px;
  overflow: hidden;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);

  .search__box {
    width: 100%;
    margin-bottom: 20px;
  }
  .duty__wrapper {
    display: flex;
    justify-content: space-around;
  }
}
</style>
