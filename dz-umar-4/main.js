const getData = () => {
    fetch('https://restcountries.com/v3.1/name/kyrgyzstan').then((data) => {
        data.json().then(response => {
            const li = document.createElement('li');

        });
    })
}
