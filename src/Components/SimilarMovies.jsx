// SimilarMovies
import axios from 'axios';
import { useState, useEffect } from 'react';
import languageArray from './languageArray';
import MovieCard from './MovieCard';
// import ISO6391 from 'iso-639-1';

const SimilarMovies = ({ id }) => {
  const [movieSuggestions, setMovieSuggestions] = useState([]);

  useEffect(() => {
    const foreignMovieArr = [];

    if (id) {
      for (let i = 1; i < 51; i++) {
            axios({
              method: 'GET',
              url: `https://api.themoviedb.org/3/movie/${id}/similar`,
              dataResponse: 'JSON',
              params: {
                api_key: '0f71218e40b140c550833011fa9c4afb',
                page: i,
              },
            })
              .then((res) => {
                const unfilteredMovies = res.data.results;
                const filteredMovies = unfilteredMovies.filter(
                  (movie) => movie.original_language !== 'en'
                );
                // return filteredMovies;
                filteredMovies.forEach((movie) => {
                  Promise.resolve(languageArray).then(res => {
                    res.forEach(lang => {
                      if (lang.iso_639_1 === movie.original_language) {
                        if (foreignMovieArr.length < 5) {
                            foreignMovieArr.push({...movie, language: lang.english_name});
                        } 
                      }
                    })
                  });

                  });
                  //   return foreignMovieArr;
                  if (foreignMovieArr.length === 5 || i === 50) {
                      setMovieSuggestions(foreignMovieArr);
                      // console.log(foreignMovieArr);
                    }


                })

      }
    }
    // Filter results for lang != en
    // Find 4 movies
    // then push results to tempArray

    // setMovieSuggestArr(res.data.results);
  }, [id]);


  const sayMyName = (movie) => {
    console.log(movie.title, movie.original_language, movie.poster_path)
  }


  return (
    <>
      <p>Movies Suggestions</p>

      {movieSuggestions.length &&
        movieSuggestions.map((movie) => {


          return (
            // <h3>{movie.title}</h3>

            <MovieCard
              key={movie.id}
              movie={movie}
              handleClick={() => sayMyName(movie)}>
              <p>{movie.language}</p>
            </MovieCard>
          );
        })}
    </>
  );
};

export default SimilarMovies;
