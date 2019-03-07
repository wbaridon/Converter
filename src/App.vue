<template>
  <div id="app">
    <h1>MyExchange.io</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Fusce nibh velit, posuere ut nunc in, maximus feugiat velit. 
      Nam ipsum augue, rhoncus vitae tincidunt eu, porttitor quis elit. 
      Pellentesque ac sodales elit. In non auctor arcu, id varius felis. 
      Integer gravida tellus nec dui feugiat, vel iaculis libero bibendum. 
      Suspendisse potenti. Pellentesque vel orci rutrum tortor sagittis scelerisque. 
      Donec vehicula efficitur luctus. Aliquam cursus lacus est, at egestas augue placerat eu. 
      Nunc gravida scelerisque ante nec congue. Sed malesuada justo et viverra finibus. 
      Nullam vel nisl scelerisque ante convallis aliquet. Duis dignissim odio a velit varius egestas.
       Quisque egestas, diam non molestie scelerisque, dui libero pulvinar ante, 
       et scelerisque nibh velit et ipsum. Nam lobortis mi in magna suscipit, 
       at lacinia lectus maximus. Morbi consectetur quam sit amet pretium mattis.
    </p>
    <ConvertForm/>
    <a href="#">CGU</a>
  </div>
</template>

<script>
import ConvertForm from './components/ConvertForm.vue'

export default {
  name: 'app',
  components: {
    ConvertForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0% 5% 0% 5%;
  text-align: left;
  display: flex;
  flex-direction: column;
}
a {
  text-align: center;
  margin-top: 15px;
}
</style>
