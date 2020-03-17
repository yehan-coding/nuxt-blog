<template>
  <div class="container">
    <h3>个人简介</h3>
    <img class="avatar" :src="imgServer + '/avatar.jpg'" alt="叶寒">
    <h4 class="name">张 彤</h4>
    <p class="desc">
      来自山西，现在北京工作<br>
      目前是it行业前端的一名搬砖工程师<br>
      喜欢旅行、玩游戏、看电视、看电影<br>
      天空黑暗到一定程度，星辰就会熠熠生辉<br>
      拼一个春夏秋冬，愿一生无怨无悔
    </p>
    <h3>技能树</h3>
    <div class="skill-tree">
      <div class="item" v-for="item in skill" :key="item.name">
        <span>{{ item.name }}</span>
        <el-progress :text-inside="false" :stroke-width="16" :percentage="item.mastery" :color="item.color"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      skill: [
        { name: 'vue', mastery: '70', color: '#41B883' },
        { name: 'react', mastery: '30', color: '#61DAFB' },
        { name: 'java', mastery: '50', color: '#FF0000' },
        { name: 'linux', mastery: '40', color: '#185886' },
        { name: 'docker', mastery: '45', color: '#359EEE' }
      ]
    }
  },
  computed: {
    ...mapState(["imgServer"])
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 3rem;
      color: #303133;
    }
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 1.5rem;
    }
    .name {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    .desc {
      width: 600px;
      line-height: 2;
      margin-bottom: 3.5rem;
      letter-spacing: 3px;
    }
    .skill-tree {
      width: 600px;
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 2rem;
        span {
          width: 120px;
          font-size: 1.15rem;
          margin-right: 20px;
          color: #606266;
          text-align: center;
        }
        .el-progress {
          width: 100%;
        }
      }
    }
  }
</style>