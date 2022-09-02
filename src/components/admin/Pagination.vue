<template>
  <nav aria-label="Page navigation example mt-3">
    <ul class="pagination justify-content-center ">
      <li class="page-item"
          :class="{ 'disabled' : !pagination.has_pre }">
        <a class="page-link text-dark" href="#" aria-label="Previous"
            @click.prevent="updatePage(pagination.current_page - 1, this.$route.path)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
      v-for="page in pagination.total_pages" :key="page"
      :class="{ 'active': page === pagination.current_page }">
        <a class="page-link text-dark" href="#"
          @click.prevent="updatePage(page, this.$route.path)">
          {{ page }}
        </a>
      </li>
      <li class="page-item"
          :class="{ 'disabled' : !pagination.has_next }">
        <a class="page-link text-dark" href="#" aria-label="Next"
        @click.prevent="updatePage(pagination.current_page + 1, this.$route.path)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import adminStore from '@/stores/adminStore'
export default {
  computed: {
    ...mapState(adminStore, ['pagination'])
  },
  methods: {
    ...mapActions(adminStore, ['updatePage'])
  }
}
</script>
