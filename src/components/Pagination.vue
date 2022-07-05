<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- 遠端傳回的資料 -->
      <!-- @click.prevent="updatePage(page)" 按下頁碼回傳(emit)按下的頁數 -->
      <li class="page-item"
      v-for="page in pages.total_pages" :key="page"
      :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#"
        @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'], // :pages="pagination"
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>
