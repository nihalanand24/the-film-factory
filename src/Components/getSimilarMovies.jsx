import axios from 'axios';
import languageArray from './languageArray';

const getSimilarMovies = async (id, setMovieSuggestions) => {
  const similarMovies = [];

  const languages = await Promise.resolve(languageArray);

  for (let i = 1; i < 11; i++) {
    const res = await axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/similar`,
      dataResponse: 'JSON',
      params: {
        api_key: '0f71218e40b140c550833011fa9c4afb',
        page: i,
      },
    });

    const allSimilarMovies = await res.data.results;

    if (allSimilarMovies.length) {
      const nonEnglishMovies = await allSimilarMovies.filter((movie) => {
        return movie.original_language !== 'en';
      });

      if (nonEnglishMovies.length) {
        let repeatedMovie = false;

        nonEnglishMovies.forEach((movie) => {
          similarMovies.forEach((similarMovie) => {
            if (similarMovie.id === movie.id) {
              repeatedMovie = true;
            }
          });

          if (!repeatedMovie) {
            languages.forEach((language) => {
              if (language.iso_639_1 === movie.original_language) {
                similarMovies.push({
                  ...movie,
                  language: language.english_name,
                  year: movie.release_date.slice(0, 4)
                });
              }
            });
          }
        });
      }
    }
  }

  setMovieSuggestions(similarMovies);
};

export default getSimilarMovies;
