import axios from 'axios';

const getSearchResults = async (movieName) => {
    let englishMovies;

  if (movieName) {

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

        englishMovies = movies.filter(
          (movie) => movie.original_language === 'en'
        );

        return englishMovies;
    //   .catch(() => {
    //     alert('No data response received. Please try again later.');
    //   });
  }
};

export default getSearchResults;
