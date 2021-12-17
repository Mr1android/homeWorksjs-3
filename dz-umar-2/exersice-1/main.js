document.getElementById("add-item-btn").addEventListener("click", btn_click);

function btn_click() {
    let element = document.createElement("div");
    element.className = "element";
    element.innerText = "Element";
    document.getElementById("container").appendChild(element);
}