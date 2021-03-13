// getMovieId

import axios from 'axios';

import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieSearchResults = ({setMovieId}) => {

    const [movieArray, setMovieArray] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            dataResponse: 'JSON',
            params: {
                api_key: '0f71218e40b140c550833011fa9c4afb',
                query: 'Inception'
            }
        })
        .then((response) => {
            const movies = response.data.results
            setMovieArray(movies);
            console.log(movies);
        })
    }, [])

    return(
        <>
        <p>Movies Search Results</p>

        { movieArray.length &&
            movieArray.map(movie => {

                return (
                    <MovieCard key = {movie.id}
                    movie= {movie} setMovieId= {setMovieId} />
                )
            })
        }
        </>
    )
}

export default MovieSearchResults;