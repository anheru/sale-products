import Vue from 'vue'

Vue.filter('currency', val => val ? `S/ ${val.toFixed(2)}` : 'S/ 0.00')
