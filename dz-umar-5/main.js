
    const spinner = document.querySelector('.spinner-border');
    const input = document.querySelector('#country-name');
    const button = document.querySelector('#show');
    const elements = document.getElementsByTagName('p');
    const name = document.getElementById('name');
    const region = document.getElementById('region');
    const subregion = document.getElementById('subregion');
    const capital = document.getElementById('capital');
    const flag = document.getElementById('flag');
    button.onclick = function() {
        spinner.style.display = 'block';
        fetch('https://restcountries.com/v3.1/name/' + input.value).then(response => {
            response.json().then(data => {
                spinner.style.display = 'none';
                flag.innerHTML = '';
                // for(element of elements) {
                //     console.log(element)
                // }
                name.innerText = data[0].name.common;
                region.innerText = data[0].region;
                subregion.innerText = data[0].subregion;
                capital.innerText = data[0].capital;
                const img = document.createElement('img');
                img.setAttribute('src', data[0].flags.svg);
                flag.append(img);
            }).catch(e => {
            console.log(e.message);
        })
    });
}

</script>