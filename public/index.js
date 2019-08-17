var firebaseConfig = {
    apiKey: "AIzaSyDHZXXqo5s6NPeoN7Z-IcCXCDqdrHSEhpM",
    authDomain: "resturantqueue.firebaseapp.com",
    databaseURL: "https://resturantqueue.firebaseio.com",
    projectId: "resturantqueue",
    storageBucket: "resturantqueue.appspot.com",
    messagingSenderId: "850406156828",
    appId: "1:850406156828:web:ed224801057c0944"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const url = 'localhost:3000/queue'

const submit = document.getElementById('submit');
const phonenumber = document.getElementById('phonenumber');
const people = document.getElementById('people');

const queue = document.getElementById('queue');
const ready = document.getElementById('ready');


submit.onclick = () => {
    MakeRequest();
}


firebase.database().ref('queue').on('value', (snapshot) => {
    document.getElementById('queue').innerHTML = `<h4 class="text-white" id="queueheader">Queue</h4>`;
    snapshot.forEach(function(childSnapshot) {
        var childInfo = childSnapshot.val();
        createListElement(childSnapshot.key, childInfo.phone, childInfo.people);
    })
})


function MakeRequest() {
    if ((phonenumber.value != '') && (people.value != '')) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                phone: phonenumber.value,
                people: people.value
            })
        })
            .then(res => res.json());
    }
}


function createListElement(key, phone, people) {
    
    var listgroup = $("<h5></h5>").text("dab");

    $('queue').append(listgroup);
}

