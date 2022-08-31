<template>
  <div>
    7
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
    console.log(this.PieChartData)
    const ctx = document.getElementById('planet-chart')
    console.log(ctx)
    const planetChart = new Chart(ctx, this.PieChartData)
  }
}
</script>
