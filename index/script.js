fetch("games.json")
.then((response) => response.json())
.then((json) => {
    let infos = JSON.parse(json)
    let inner = ""
    Object.entries(infos).forEach(element=>
    {
        let el = element[1]
        inner += `<div onclick="window.location.href='${element[0]}'" style="${el.color?"--color:"+el.color+";":""}${el.bgcolor?"--bgcolor:"+el.bgcolor+";":""}"><h1>${el.name}</h1><span>${el.description}</span></div>`
    })
    document.querySelector("#games").innerHTML = inner
})