<template>
  <div>
    <canvas id="barChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { mapState, mapActions } from 'pinia'
import chartStore from '@/stores/chartStore'

export default {
  computed: {
    ...mapState(chartStore, ['barChartData'])
  },
  methods: {
    ...mapActions(chartStore, ['getChartData'])
  },
  mounted () {
    // this.getChartData()
    const ctx = document.getElementById('barChart')
    const barChart = new Chart(ctx, this.barChartData)
  }
}
</script>
