import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
  state: {
    gifs: [],
    inputSearch: "",
    favouriteGifs: loadFavGifs || []
  },
  mutations: {
    updateInputSearch(state, updateInput) {
      state.inputSearch = updateInput;
    },
    initializeFavGifs(state) {
      if (localStorage.getItem("gifs-storage")) {
        state.favouriteGifs = JSON.parse(localStorage.getItem("gifs-storage") || "[]"
        );
      }
    },
    search(state, gifs) {
      state.gifs = gifs;
    },
    add(state, payload) {
      state.favouriteGifs.push(payload);
      saveFavGifs(state.favouriteGifs);
    },
    remove(state, fav) {
      let index = state.favouriteGifs.indexOf(fav);
      state.favouriteGifs.splice(index, 1);
      saveFavGifs(state.favouriteGifs);
    }
  },
  actions: {
    search({ commit }) {
      axios
        .get(
          "//api.giphy.com/v1/gifs/search?q=" + this.state.inputSearch + "&api_key=EwQCHDTYU2onchg4pwYQmRFRcugz5ySa"
        )
        .then(response => {
          this.state.gifs = response.data.data;
        })
        .then(_gifs => {
          commit("search", this.state.gifs);
        })
        .catch(error => {
          console.log(error);
        });
    },
    add(context, payload) {
      context.commit("add", payload);
    },
    remove(context) {
      context.commit("remove");
    }
  }
});

// localStorage
const loadFavGifs = () => {
  try {
    const serializedGifs = localStorage.getItem("gifs-storage");
    if (serializedGifs === null) {
      return undefined;
    }
    return JSON.parse(serializedGifs);
  } catch (err) {
    return undefined;
  }
};

const saveFavGifs = state => {
  try {
    const serializedGifs = JSON.stringify(state);
    localStorage.setItem("gifs-storage", serializedGifs);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
};
