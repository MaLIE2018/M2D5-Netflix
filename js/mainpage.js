import * as api from '../js/modules/api.js';

let movies = []
let movierow = document.querySelector(".movierow")

let searchfield = document.querySelector("#searchField")

const filterResults = (input) => {
    let titles = []
    let descriptions = []
    let filteredMovies = [];

    // [...movies].filter(movie => movie[])
    filteredMovies
}

const createMovieCards = () => {
    movies.map((movie) => {
        movierow.innerHTML += `
      <div class="col-2">
                    <div class="card text-white bg-dark mb-3">
                        <img src="${movie.imageUrl}" class="card-img-top" alt="..." style="height:330px">
                        <div class="card-body">
                            <h5 class="card-title">${movie.name}</h5>
                            <p class="card-text">${movie.description}</p>
                            <a href="#" class="btn btn-primary rounded-circle float-right"><ion-icon name="play-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>`
    })
}

window.onload = async() => {
    movies = await api.getAllMovies()
    createMovieCards()

    let SearchContainer = document.getElementById("searchContainer")


    searchField.addEventListener("onkeyup", function() {
            console.log("test")
            filterResults(this.value)
        })
        // Searchfield
    SearchContainer.addEventListener("click", () => {
            setTimeout(function() {
                document.getElementById("searchField").focus()
            }, 20)
            SearchContainer.classList.toggle("border")
            SearchContainer.classList.toggle("border-white")
            SearchContainer.classList.toggle("input-hidden")
            SearchContainer.classList.toggle("input-expanded")

        })
        // Dropdown menu navbar
    let dropdownContainer = document.getElementById("SearchDropDown")
        // let dropdownToggle = document.getElementsByClassName("dropdown-toggle")
    dropdownContainer.addEventListener("mouseover", (event) => {
        let dropdown = document.getElementById("dropDown")
        dropdown.classList.add("show")
        dropdownContainer.classList.add("show")
    })

    dropdownContainer.addEventListener("mouseleave", (event) => {
        let dropdown = document.getElementById("dropDown")
        dropdown.classList.remove("show")
        dropdownContainer.classList.remove("show")
    })
}