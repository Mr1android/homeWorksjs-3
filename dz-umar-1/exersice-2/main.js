let coloring = () => {
    let myNodelist = document.querySelectorAll(".element");
    for (let i = 0; i < myNodelist.length; i++){
        if (i < 3) {
            myNodelist[i].style.color = "red";
        } else {
            myNodelist[i].style.color = "green";
        }
    }
}
coloring();
