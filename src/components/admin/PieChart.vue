<template>
  <div>
    7788995
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { mapState, mapActions } from 'pinia'
import chartStore from '@/stores/chartStore'

export default {
  computed: {
    ...mapState(chartStore, ['PieChartData'])
  },
  methods: {
    ...mapActions(chartStore, ['getPieChartData'])
  },
  mounted () {
    this.getPieChartData()
    const ctx = document.getElementById('planet-chart')
    const planetChart = new Chart(ctx, this.PieChartData)
  }
}
</script>
