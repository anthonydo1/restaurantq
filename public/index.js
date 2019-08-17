const url = 'localhost:3000/queue'

window.onload = function() {
    const submit = document.getElementById('submit');
    const phonenumber = document.getElementById('phonenumber');
    const people = document.getElementById('people');

    submit.onclick = () => {
        MakeRequest();
    }

    function MakeRequest() {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ 
                phone: phonenumber.value,
                people: people.value
            })
        }).then(res => res.json());
    }
}
