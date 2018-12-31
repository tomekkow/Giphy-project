<template>
  <div>
    <input v-model="inputSearch">
    <button @click="search()">Szukaj</button>
  </div>
</template>

<script>
export default {
  computed: {
    inputSearch: {
      get() {
        return this.$store.state.inputSearch;
      },
      set(value) {
        this.$store.commit("updateInputSearch", value);
      }
    }
  },
  methods: {
    search() {
      return this.$store.dispatch("search");
    }
  }
};
</script>

<style>
</style>

