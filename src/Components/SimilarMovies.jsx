// SimilarMovies
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const SimilarMovies = ({ id }) => {

    const [movieSuggestArr, setMovieSuggestArr] = useState([]);

    useEffect(() => {


        if (id) {
            axios({
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${id}/similar`,
                dataResponse: 'JSON',
                params: {
                    api_key: '0f71218e40b140c550833011fa9c4afb',
                    page: 1
                }
            }).then(res => {
                setMovieSuggestArr(res.data.results);



            })
        }





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