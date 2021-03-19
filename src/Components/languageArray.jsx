// languageArray.jsx

import axios from "axios"

const languageArray = axios(`https://api.themoviedb.org/3/configuration/languages?api_key=0f71218e40b140c550833011fa9c4afb`)
    .then(res => res.data)

export default languageArray;