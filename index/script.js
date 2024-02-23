fetch("games.json")
.then((response) => response.json())
.then((json) => {
    let infos = JSON.parse(json)
    let inner = ""
    Object.entries(infos).forEach(element=>
    {
        let el = element[1]
        inner += `<div><h1>${el.name}</h1><span>${el.description}</span></div>`
    })
    document.querySelector("main").innerHTML = inner
})