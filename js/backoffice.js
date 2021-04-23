import * as api from '../js/modules/api.js';

const form = document.querySelector(".movie-form")
const submitbtn = document.querySelector("button[type=submit]")
const select = document.querySelector(".custom-select")
const inputs = form.querySelectorAll("input:not(:first-of-type)");
const delbtn = form.querySelector(".backoffice-delbtn")
const editbtn = form.querySelector(".backoffice-editbtn")

let movies = []

const createMovieObj = () => {
    const movie = [...inputs].reduce((resObj, input) => {
        if (!resObj[input.id]) {
            resObj[input.id] = input.value
        }
        return resObj
    }, {})
    return movie
}



// fill the select field mit movies
const fillSelect = (event) => {
    movies.forEach((movie, index) => {
        select.innerHTML += `<option value="${index+1}" id="${movie._id}">${movie.name}</option>`
    })
}

// fill Inputs after selection 
const fillInputs = async(event) => {
    event.preventDefault()
    const index = select.value;
    const id = select.options[index].id

    if (id !== "0") {
        let movie = movies.find(m => m._id === id);
        form.querySelector("input:first-of-type").value = id;
        [...inputs].forEach((input) => {
            if (movie.hasOwnProperty(input.id)) {
                input.value = movie[input.id]
            }
        })
    }
}

const cleanInputs = () => {
    [...form.querySelectorAll("input")].map((input) => {
        input.value = ""
    });
    select.value = "0"
}

window.onload = async() => {
    movies = await api.getAllMovies()
    fillSelect()

    delbtn.addEventListener("click", async() => {
        await api.putData(createMovieObj(), select.options[select.value].id, true)
        cleanInputs()
        window.location.reload(true)
    })
    editbtn.addEventListener("click", async() => {
        await api.putData(createMovieObj(), select.options[select.value].id)
        cleanInputs()
        window.location.reload(true)
    })

    form.onsubmit = async(event) => {
        event.preventDefault()
        if (select.value === "0") {
            await api.putData(createMovieObj())
        } else {
            cleanInputs()
        }
    }

    select.addEventListener("click", (event) => {
        fillInputs(event)
    })
}