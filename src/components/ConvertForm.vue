<template>
  <div class="convertForm">
    <input type="number" step="0.01" min="0" placeholder="0.00" @keyup="launch" v-model="amount">
    <select v-model="firstSelect">
      <option v-for="option in currency" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <i class="fas fa-arrows-alt-h" @click="invert"></i>
    <input type="number" step="0.01" min="0" placeholder="0.00" disabled v-model="convertAmount">
    <select v-model="secondSelect">
      <option v-for="option in currency" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
import Convert from '@/services/ConvertService'
export default {
  name: 'ConvertForm',
  data () {
    return {
      amount: '',
      convertAmount: '',
      firstSelect: 'eur',
      secondSelect: 'usd',
      currency: [
        { text: 'EUR', value: 'eur' },
        { text: 'USD', value: 'usd' },
      ]
    }
  },
  methods: {
    launch () {
      Convert.getValue(this.firstSelect, this.secondSelect, this.amount, callback => {
        /* En fonction des datas remplacer les valeurs */ 
      })
    },
    invert () {
      let tmp = this.firstSelect
      this.firstSelect = this.secondSelect
      this.secondSelect = tmp
    }
  }
}
</script>

<style scoped>
.convertForm {
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
input, select {
  margin: 5px;
  padding: 5px;
}
</style>
