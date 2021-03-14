// SimilarMovies
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import ISO6391 from 'iso-639-1';

const SimilarMovies = ({ id }) => {

    const [movieSuggestions, setMovieSuggestions] = useState([]);

    useEffect(() => {

        const foreignMovieArr = [];

        if (id) {

            for (let i = 1; i < 11; i++) {

                axios({
                    method: 'GET',
                    url: `https://api.themoviedb.org/3/movie/${id}/similar`,
                    dataResponse: 'JSON',
                    params: {
                        api_key: '0f71218e40b140c550833011fa9c4afb',
                        page: i
                    }
                }).then(res => {
                    const unfilteredMovies = res.data.results;
                    const filteredMovies = unfilteredMovies.filter(movie => movie.original_language !== "en")

                    return filteredMovies;
                }).then(movies => {
                    movies.forEach(movie => {
                        foreignMovieArr.length < 5 &&
                        foreignMovieArr.push(movie);
                    })
                    // console.log(foreignMovieArr);
                    return foreignMovieArr;
                }).then(arr => {
                    if (arr.length === 5 || i === 10) {
                        setMovieSuggestions(arr)
                    }
                })

            }


        }
        // Filter results for lang != en
        // Find 4 movies
        // then push results to tempArray

        // setMovieSuggestArr(res.data.results);


    }, [id])

    return (
        <>
            <p>Movies Suggestions</p>

            { 
            movieSuggestions.length &&
                movieSuggestions.map(movie => {

                    return (
                        // <h3>{movie.title}</h3>

                        <MovieCard key={movie.id}
                            movie={movie} handleClick={() => console.log(movie.title, movie.original_language)}><p>{ISO6391.getName(movie.original_language)}</p></MovieCard>

                    )
                })
            }

        </>
    )
}

export default SimilarMovies;