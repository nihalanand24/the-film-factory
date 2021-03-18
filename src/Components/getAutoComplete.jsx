import axios from "axios";

const getAutoComplete = async (movieName, setAutoComplete) => {
    let suggestions = [];

    if (movieName.length > 2) {
      const res = await axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        dataResponse: 'JSON',
        params: {
          api_key: '0f71218e40b140c550833011fa9c4afb',
          query: movieName,
        },
      })
      
        const movies = await res.data.results;
        const englishMovies = await movies.filter(
          (movie) => movie.original_language === 'en'
        );

        englishMovies.forEach((movie) => {
          suggestions.push(movie.title);
        });
        setAutoComplete(suggestions);
    } else {
      setAutoComplete([]);
    }
}

export default getAutoComplete;
