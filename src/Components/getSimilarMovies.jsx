import axios from 'axios';
import languageArray from './languageArray';
import genresArray from './genresArray';


const getSimilarMovies = async (id, setMovieSuggestions, setLoading, setAvailableLanguages, setAvailableGenres) => {
  const similarMovies = [];
  const langArray = [];
  const arrayOfGenres = [];

  const languages = await Promise.resolve(languageArray);
  const genres = await Promise.resolve(genresArray);

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
            
            const movieGenresArray = [];
            genres.forEach(genre => {
              if (movie.genre_ids.includes(genre.id)) {
                movieGenresArray.push(genre.name);
                if (!arrayOfGenres.includes(genre.name)) {
                  arrayOfGenres.push(genre.name)
                }
              }
            })

            languages.forEach((language) => {
              if (language.iso_639_1 === movie.original_language) {
                similarMovies.push({
                  ...movie,
                  language: language.english_name,
                  genres: movieGenresArray,
                  year: movie.release_date.slice(0, 4)
                });
                if (!langArray.includes(language.english_name)){
                  langArray.push(language.english_name);
                }
              }
            });
          }
        });
      }
    }
  }
  setAvailableGenres(arrayOfGenres);
  setAvailableLanguages(langArray);
  setMovieSuggestions(similarMovies);
  setLoading(false);
};

export default getSimilarMovies;
