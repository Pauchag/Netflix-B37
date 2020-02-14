const axios =  require('axios');

const API_URL =  "https://api.themoviedb.org/3"


async function Movies(parent,args,context,info){
    const {data} = await axios.get(`${API_URL}/movie/popular?api_key=c286d8ecad01e4b703d43746f8b1e1f5`)
    console.log(data)
    return data.results
}



module.exports = {
    Movies
}