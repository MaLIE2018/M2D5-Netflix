window.onload = (event) => {
    let lens = document.getElementById("standardLens")
    let insideSearchLens = document.getElementById("lensInSearchBox")
    let dropdownContainer = document.getElementsByClassName("nav-item dropdown")[0]
    let dropdownToggle = document.getElementsByClassName("dropdown-toggle")
    console.log('dropdownToggle:', dropdownToggle)


    // Collapse of the searchfield
    lens.addEventListener("click", () => {
        setTimeout(function() {
            document.getElementById("searchField").focus()
        }, 20)
        lens.classList.toggle("d-none")
    })

    insideSearchLens.addEventListener("click", () => {
        lens.classList.remove("d-none")
    })

    // Dropdown menu navbar
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