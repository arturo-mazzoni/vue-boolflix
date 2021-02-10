let app = new Vue({
  el: "#app",
  data: {
    query: "",
    myApiKey: "f31c888cb565ce0a48390b228a0e9f6e"
  },
  methods: {
    searchMovie(){
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.myApiKey,
            query: this.query,
            language: "it-IT"
          }
        })
        .then((result) => {
          console.log(result.data.results);
        })
        .catch((error) => alert("errore"));
    }
  }
});
