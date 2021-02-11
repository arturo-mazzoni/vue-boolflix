let app = new Vue({
  el: "#app",
  data: {
    query: "",
    myApiKey: "f31c888cb565ce0a48390b228a0e9f6e",
    movies: [],
    tv : []
  },
  methods: {
    search(){

      this.movies = [];
      this.tv = [];
      axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: this.myApiKey,
          query: this.query,
          language: "it-IT"
        }
      })
      .then((result) => {
        this.movies = result.data.results;
      })
      .catch((error) => alert("errore"));

      axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: this.myApiKey,
          query: this.query,
          language: "it-IT"
        }
      })
      .then((result) => {
        this.movies = this.movies.concat(result.data.results);

      })
      .catch((error) => alert("errore"));
    },
    // funzione che divide x2 a cui passi il voto
    trasformaVoto (voto){
      return parseInt(voto / 2);
    }



  }
});
