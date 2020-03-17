<template>
  <div class="container">
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="{ path: `/article/${ item.id }`}" tag="div" class="img">
          <img :src="item.image" :alt="item.title">
        </nuxt-link>
        <div class="item-content">
          <nuxt-link :to="{ path: `/article/${ item.id }`}" tag="h3">{{ item.title }}</nuxt-link>
          <p>{{ item.description }}</p>
          <div class="item-bottom">
            <span class="date"><i class="fa fa-clock-o" aria-hidden="true"></i> {{ item.updateTime | formatDate }}</span>
            <span class="views"><i class="fa fa-eye" aria-hidden="true"> {{ item.views }} 浏览</i></span>
            <nuxt-link class="show-more" :to="{ path: `/article/${ item.id }`}">查看更多 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></nuxt-link>
          </div>
        </div>
      </li>
    </ul>
    <div class="load-more">
      <span v-if="loadMore"><i class="fa fa-spinner loading-data" aria-hidden="true"></i></span>
      <span class="load-btn" @click="loadMoreData" v-else>{{ noMore ? '没有更多数据了' : '加载更多' }}</span>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/article'
export default {
  data () {
    return {
      pageSize: 8,
      pageNum: 2,
      loadMore: false,
      noMore: false
    }
  },
  async asyncData ({ $axios }) {
    let { data } = await $axios.$get('/article/list', { params: { pageSize: 8, pageNum: 1 } })
    return { list: data.list }
  },
  methods: {
    loadMoreData () {
      this.loadMore = true
      if (this.noMore) {
        this.loadMore = false
        return true
      }
      getList(this, { pageSize: 8, pageNum: this.pageNum }).then(res => {
        this.loadMore = false
        this.pageNum ++
        this.list = [...this.list, ...res.data.list]
        if (res.data.list.length < this.pageSize) {
          this.noMore = true
        }
      })
    }
  },
  filters: {
    formatDate (date) {
      return date.substr(0, 16)
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    margin: 0 80px;
    padding: 0;
    li {
      height: 180px;
      padding: 20px 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border-bottom: 1px solid #EBEEF5;
      .img {
        width: 200px;
        height: 120px;
        overflow: hidden;
        margin-right: 20px;
        cursor: pointer;
        img {
          width: 100%;
          transition: all 500ms;
          &:hover {
            transform: scale(1.15);
          }
        }
      }
      .item-content {
        height: 140px;
        overflow: hidden;
        flex: 1;
        h3 {
          font-size: 1.25rem;
          color: #303133;
          margin-bottom: .4rem;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        p {
          font-size: 1rem;
          color: #606266;
          line-height: 1.5;
          margin-bottom: .5rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .item-bottom {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          .date {
            font-size: .8rem;
            color: #909399;
          }
          .views {
            font-size: .8rem;
            color: #909399;
            margin-left: 1rem;
          }
          .show-more {
            position: absolute;
            right: 30px;
            display: inline-block;
            font-size: 1rem;
            width: 200px;
            text-align: center;
            border-radius: 20px;
            color: #909399;
            transition: all 300ms ease;
            i {
              position: absolute;
              right: 40px;
              top: 50%;
              color: #909399;
              transform: translateY(-50%);
              transition: all 300ms ease;
            }
            &:hover {
              color: #409EFF;
              i {
                right: 15px;
              }
            }
          }
        }
      }
    }
  }
  .load-more {
    text-align: center;
    color: #666;
    margin-top: 1rem;
    .load-btn {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
