// genresArray.jsx

import axios from "axios"

const genresArray = axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=0f71218e40b140c550833011fa9c4afb`)
    .then(res => res.data.genres)

export default genresArray;