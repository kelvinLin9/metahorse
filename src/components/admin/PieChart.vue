<template>
  <div>
    <canvas id="pieChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { mapState, mapActions } from 'pinia'
import chartStore from '@/stores/chartStore'

export default {
  computed: {
    ...mapState(chartStore, ['pieChartData'])
  },
  methods: {
    ...mapActions(chartStore, ['getChartData'])
  },
  mounted () {
    this.getChartData()
    const ctx = document.getElementById('pieChart')
    const pieChart = new Chart(ctx, this.pieChartData)
  }
}
</script>
