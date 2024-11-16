<template>
    <div class="container">
      <h1>Dashboard</h1>
      <canvas id="chart"></canvas>
    </div>
  </template>
  
  <script lang="ts">
  import { onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    setup() {
      onMounted(() => {
        const ctx = document.getElementById('chart') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Receitas', 'Despesas'],
            datasets: [
              {
                label: 'Valores',
                data: [2000, 1500],
                backgroundColor: ['green', 'red'],
              },
            ],
          },
        });
      });
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  