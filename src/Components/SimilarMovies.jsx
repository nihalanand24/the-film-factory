// SimilarMovies
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const SimilarMovies = ({ id }) => {

    const [movieSuggestArr, setMovieSuggestArr] = useState([]);

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
                    const filteredMovies = unfilteredMovies.filter(movie => movie.original_language != "en")

                    return filteredMovies;
                }).then(movies => {
                    movies.forEach(movie => {
                        foreignMovieArr.push(movie);
                    })
                    console.log(foreignMovieArr)
                }).then(() => {

                    setMovieSuggestArr(foreignMovieArr)
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

            { movieSuggestArr.length &&
                movieSuggestArr.map(movie => {

                    return (
                        // <h3>{movie.title}</h3>

                        <MovieCard key={movie.id}
                            movie={movie} handleClick={() => console.log(movie.title)} />

                    )
                })
            }

        </>
    )
}

export default SimilarMovies;