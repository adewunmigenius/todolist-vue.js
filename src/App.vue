<template>
  <div id="app">
    <crtodo></crtodo>
    <router-view></router-view>
  </div>
</template>

<script>
// importing crtodo component from '@/components/crtodo'
import crtodo from '@/components/crtodo'
export default {
  name: 'app',
  component: {
    crtodo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
