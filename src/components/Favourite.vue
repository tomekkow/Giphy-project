<template>
  <div class="favourite" v-if="favouriteGifs.length > 0">
    <h2>Lista ulubionych gifow</h2>
    <div class="container">
      <div v-for="fav in favouriteGifs" :key="fav.id">
        <button @click="remove(fav)">X</button><br>
        <img :src="fav.images.original.url" alt="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate () {
     this.$store.commit('initializeFavGifs')
  },
  computed: {
    favouriteGifs() {
      return this.$store.state.favouriteGifs;
    }
  },
  methods: {
    remove() {
      return this.$store.dispatch('remove');
    }
  }
}
</script>

<style>
</style>
