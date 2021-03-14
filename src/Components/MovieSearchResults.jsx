// getMovieId

import axios from 'axios';

import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieSearchResults = ({ setMovieId, movieToSearch }) => {

    const [movieArray, setMovieArray] = useState([]);

    // const randFunction = () => {
    //     console.log("hello from movieSearchResults");
    // }

    useEffect(() => {
        movieToSearch &&
            axios({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                dataResponse: 'JSON',
                params: {
                    api_key: '0f71218e40b140c550833011fa9c4afb',
                    query: movieToSearch
                }
            })
                .then((response) => {
                    const movies = response.data.results.slice(0, 3);
                    // console.log(movies);
                    setMovieArray(movies);
                    console.log("Searched for", movieToSearch);
                })
    }, [movieToSearch])



    // useEffect(() => {

    //     console.log(movieArray);

    // }, [movieArray])


    return (
        <>
            <p>Movies Search Results</p>

            { movieArray.length &&
                movieArray.map(movie => {

                    return (
                        <MovieCard key={movie.id}
                            movie={movie} handleClick={setMovieId} />
                    )
                })
            }
        </>
    )
    // export { randFunction };
}

export default MovieSearchResults;
