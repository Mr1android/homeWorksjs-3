const input = document.getElementById("input")
const button = document.getElementById("button")
const getFrom = () => {
    const fun1 = new Promise(function (resolve) {
        fetch('https://restcountries.com/v3.1/name/' + input.value).then(name => {
            name.json().then(e => {
                const [{name}] = e
                const name_country = document.getElementById("name_country")
                const name_push = document.createElement("div")
                const img = document.createElement("img")
                img.setAttribute("src", e[0]["flags"].png)
                img.style.width = "50px"
                name_push.setAttribute("id", "name")
                name_push.innerText = name["common"]
                name_country.append(name_push, img)
            })
        })
        resolve()
    })
    const fun2 = new Promise(function (resolve) {
        fetch('https://restcountries.com/v3.1/name/' + input.value).then(border => {
            border.json().then(bor => {
                const all_country = document.getElementById("all_country")
                const [{borders}] = bor
                borders.forEach(country => {
                    fetch("https://restcountries.com/v3.1/alpha/" + country).then(name => {
                            name.json().then(names => {
                                const [{name}] = names
                                const from_country = document.createElement("div")
                                from_country.setAttribute("class", "borders")
                                from_country.innerText = name["common"]
                                all_country.append(from_country)
                                const img = document.createElement("img")
                                img.setAttribute("src", names[0]["flags"].png)
                                img.style.width = "50px"
                                all_country.append(img)
                                const el = document.getElementsByClassName("borders").length
                                if (el === borders.length) {
                                    resolve()
                                }
                            })
                        }
                    )
                })
            })
        })
    })
    Promise.all([fun1, fun2]).then(function () {
        const display = document.getElementById("all_country_all")
        display.style.display = "block"
        console.log('success!');
    });
}
button.onclick = () => {
    const name_country = document.getElementById("name_country")
    const all_country = document.getElementById("all_country")
    if (name_country != null || all_country != null) {
        const display = document.getElementById("all_country_all")
        display.style.display = "none"
        name_country.innerText = ""
        all_country.innerText = ""
        getFrom()
    } else getFrom()
}