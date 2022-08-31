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
    console.log(this.barChartData)
    const ctx2 = document.getElementById('barChart').getContext('2d')
    const barChart = new Chart(ctx2, this.barChartData)
  }
}
</script>
