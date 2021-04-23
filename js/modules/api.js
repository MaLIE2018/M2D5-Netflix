export let endpoint = "https://striveschool-api.herokuapp.com/api/movies/"

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGI3MmIxZjBmYjAwMTVkOTE3MDAiLCJpYXQiOjE2MTkxODkyNDIsImV4cCI6MTYyMDM5ODg0Mn0.qo8VVZkKeFwmqiPJb5zGl4xfyS3VgS6cQh629szGmH4"

export const putData = async(movie, id = undefined, del = false) => {
    let method
    let alertmessage
        // Check if ID is passed a parameter if true then check if the product should be deleted or changed if false then create a new product
    if (id) {
        endpoint += id;
        del ? (method = "DELETE", alertmessage = `Product with ${id} got deleted`) : (method = "PUT", alertmessage = `Movie with ${id} got updated`)
    } else {
        method = "POST"
        alertmessage = `Movie ${movie.name} got created`
    }
    console.log('method:', method)
    console.log('movie:', JSON.stringify(movie))
    console.log("endpoint", endpoint)
    try {
        let response = await fetch(endpoint, {
            method,
            headers: {
                'Accept': 'application/json',
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        if (!response.ok) throw new Error(response.status + " " + response.statusText)

        alert(alertmessage)

    } catch (error) {
        alert(error)
    }

}

export const getData = async(url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })
        let data = await response.json()
        return data

    } catch (error) {
        return "error"
    }
}

export const getAllMovies = async() => {
    let movieProms = []
    let reducedMovie = []
        // get categories
    const categories = await getData(endpoint);
    // create array of promises
    categories.forEach((category) => {
        movieProms.push(getData(endpoint + category))
    });
    // use Promise.all to retrieve all the movies 
    reducedMovie = await Promise.all(movieProms).then((movies) => {
        return movies
    });
    // consolidate them in one array
    reducedMovie = reducedMovie.reduce((movies, movie) => {
        return [...movies, ...movie]
    }, [])
    return reducedMovie
}