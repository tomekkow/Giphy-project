<template>
  <div class="container" v-if="gifs">
    <div v-for="gif in gifs" :key="gif.id">
      <img :src="gif.images.original.url"><br>
      <button @click="add(gif)">Dodaj do ulubionych</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    gifs() {
      return this.$store.state.gifs;
    }
  },
  methods: {
    add(gif) {
      return this.$store.dispatch('add', gif);
    }
  }
}
</script>

<style>
</style>
