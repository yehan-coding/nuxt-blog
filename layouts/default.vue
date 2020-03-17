<template>
  <div class="app">
    <div class="nav">
      <h2>叶寒</h2>
      <p>许多时候，我们不是跌倒在自己的缺陷上，而是跌倒在自己的优势上，因为缺陷常常给我们以提醒，而优势却常常使我们忘乎所以。</p>
      <ul>
        <li :class="{ 'active' : current === 'index' }"><nuxt-link to="/">首 页</nuxt-link></li>
        <li :class="{ 'active' : current === 'article' }"><nuxt-link to="/article">文 章</nuxt-link></li>
        <li :class="{ 'active' : current === 'about' }"><nuxt-link to="/about">关 于</nuxt-link></li>
        <li :class="{ 'active' : current === 'contact' }"><nuxt-link to="/contact">联 系</nuxt-link></li>
      </ul>
      <div class="links">
        <a href="mailto:zhangtong.mr@aliyun.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="#" target="_blank"><i class="fa fa-weixin" aria-hidden="true"></i></a>
        <a href="https://weibo.com/3947278657/profile?rightmod=1&wvr=6&mod=personinfo" target="_blank"><i class="fa fa-weibo" aria-hidden="true"></i></a>
        <a href="https://github.com/charleszht" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
      </div>
    </div>
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: ''
    }
  },
  created () {
    let route = this.$route
    if (route.path == '/') {
      this.current = 'index'
    } else if (route.fullPath.includes('/article')) {
      this.current = 'article'
    } else if (route.fullPath.includes('/about')) {
      this.current = 'about'
    } else if (route.fullPath.includes('/contact')) {
      this.current = 'contact'
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        if (val.path == '/') {
          this.current = 'index'
        } else if (val.fullPath.includes('/article')) {
          this.current = 'article'
        } else if (val.fullPath.includes('/about')) {
          this.current = 'about'
        } else if (val.fullPath.includes('/contact')) {
          this.current = 'contact'
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
  .app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .nav {
      width: 20%;
      min-width: 300px;
      background-color: #333;
      color: #9b9b9b;
      padding: 50px 80px;
      h2 {
        color: #f0f0f0;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: .875rem;
        color: #909399;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        margin-bottom: 2.5rem;
        text-indent: 2em;
        line-height: 1.7;
      }
      ul {
        width: 80%;
        padding-left: 0;
        border-top: 1px solid #5e5e5e;
        border-bottom: 1px solid #5e5e5e;
        margin-bottom: 1rem;
        li {
          height: 40px;
          border-radius: 20px;
          line-height: 40px;
          padding-left: 20px;
          text-align: left;
          margin: 16px 0;
          position: relative;
          transition: all 200ms ease;
          a {
            color: #9b9b9b;
            &:hover{
              color: #fff;
            }
          }
          &.active {
            background-color: #000;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
            font-size: 1.25rem;
            a {
              color: #fff;
            }
            &:after {
              content: "\f100  \f100";
              display: inline-block;
              font: normal normal normal 14px/1 FontAwesome;
              font-size: 1rem;
              text-rendering: auto;
              -webkit-font-smoothing: antialiased;
              color: #fff;
              position: absolute;
              right: 20px;
              top: 50%;
              transform: translateY(-50%);
              transition: all 200ms ease;
            }
          }
        }
      }
      .links {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          font-size: 1.25rem;
          color: #969696;
          &:nth-child(1) {
            font-size: 1.05rem;
          }
          &:nth-child(2) {
            font-size: 1.05rem;
          }
        }
      }
    }
    .main {
      flex: 1;
      overflow-y: scroll;
    }
  }
</style>
