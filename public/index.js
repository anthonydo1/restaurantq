const url = 'localhost:3000/queue'

window.onload = function() {
    const submit = document.getElementById('submit');
    const phonenumber = document.getElementById('phonenumber');

    submit.addEventListener('click', function() {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(phonenumber.value)
        }).then(res => res.json());
    })
}
