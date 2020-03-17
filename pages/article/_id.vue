<template>
  <div class="container markdown-body" v-html="detail"></div>
</template>

<script>
import { getDetail } from '@/api/article'
export default {
  async asyncData ({ $axios, params }) {
    let { data } = await getDetail($axios, params.id)
    return { detail: data.content }
  }
}
</script>
