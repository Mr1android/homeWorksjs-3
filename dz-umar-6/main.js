const searchBtn = document.getElementById('searchBtn')
const inputField = document.getElementById('input')
const smallWindow = document.getElementById('smallWindow')
const searchCoctail = async () => {
    try {
        const coctailDb = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputField.value}`)
        const data = await coctailDb.json();
        console.log(data);
        for (let i = 0; i< data.drinks.length; i++) {
        const divMain = document.createElement('div')
            divMain.className = 'coctail'
        const p = document.createElement('p')
            p.setAttribute('id', 'modalWin')
            p.innerText = data.drinks[i].strDrink;
            p.style.cursor = 'pointer'//Название напитка
        const span = document.createElement('span')
            span.className = 'img'
            span.style.backgroundImage = `url(${data.drinks[i].strDrinkThumb})`
            span.style.backgroundSize = 'cover'
            span.style.backgroundPosition = 'center'//Картинка напитка
        const divModal = document.createElement('div')
            divModal.className = 'modalDiv'
            divModal.setAttribute('id','modalDiv')
        const innerModalDiv = document.createElement('div')
            innerModalDiv.className = 'modal-content'
        const modalHeader = document.createElement('div')
            modalHeader.className = 'modal-header'
        const modalBody = document.createElement('div')
            modalBody.className = 'modal-body'
        const modalFooter = document.createElement('div')
            modalFooter.className = 'modal-footer'
        divMain.append(span)
        divMain.appendChild(p)
        divMain.append(divModal)
        smallWindow.append(divMain);
    }
    }
    catch (e) {
        alert("404 Not Found")
    }
}
searchBtn.addEventListener('click', searchCoctail)


const modalOpen = () => {

}