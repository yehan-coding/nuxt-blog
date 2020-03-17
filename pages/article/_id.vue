<template>
  <div class="container markdown-body" v-html="detail"></div>
</template>

<script>
import { getDetail } from '@/api/article'
export default {
  async asyncData ({ params }) {
    let { content } = await getDetail(params.id)
    return { detail: content }
  }
}
</script>
