function answer(id){
    e = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = e.style.display; //смотрим, включен ли сейчас элемент
    if (state == 'Лампочка') e.style.display='none'; //если включен, то выключаем
    else e.style.display=''; //иначе - включаем
}