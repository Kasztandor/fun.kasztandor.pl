//check if device is mobile or pc

if((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)){
    document.body.classList.add("mobile");
} else {
    document.body.classList.add("pc");
}

fetch("games.json")
.then((response) => response.json())
.then((json) => {
    let infos = JSON.parse(json)
    let inner = ""
    Object.entries(infos).forEach(element=>
    {
        let el = element[1]
        inner += `<div onclick="window.location.href='${element[0]}'" class="platform-${el.device}" style="${el.color?"--color:"+el.color+";":""}${el.bgcolor?"--bgcolor:"+el.bgcolor+";":""}"><h1>${el.name}</h1><span>${el.description}</span></div>`
    })
    document.querySelector("#games").innerHTML = inner
})