<template>
  <router-view/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  components: {
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  beforeMount() {
    this.$store.commit('getGithubData')
  }
}
</script>



<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: #EFF1F5;
  min-height: 100vh;
}

h1 {
  padding: 50px 0 30px;
}
</style>
