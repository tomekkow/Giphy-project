
<template>
  <div id="app">
    <search />
    <display />
    <favourite />
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Display from './components/Display.vue'
import Favourite from './components/Favourite.vue'

export default {
  components: {
    'search': Search,
    'display': Display,
    'favourite': Favourite
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
img {
  width:300px;
  height:300px;
}
</style>
