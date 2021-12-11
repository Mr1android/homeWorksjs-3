window.onload = func = () => {
    let parent = document.getElementById("parent");
    let before = document.getElementById("string-1");
    let temp = document.getElementById("string-3");
    parent.insertBefore(temp, before);
    temp = document.getElementById("string-5");
    parent.insertBefore(temp, before);
    temp = document.getElementById("string-2");
    parent.insertBefore(temp, before);
    temp = document.getElementById("string-6");
    parent.insertBefore(temp, before);
    temp = document.getElementById("string-4");
    parent.insertBefore(temp, before);
}
