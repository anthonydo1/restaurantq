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

const url = 'https://restaurantqueuesystem.herokuapp.com/queue'

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
        createListElement("queue", childInfo.table, childInfo.phone, childInfo.people);
    })
})

firebase.database().ref('ready').on('value', (snapshot) => {
    document.getElementById('ready').innerHTML = `<h4 class="text-white" id="queueheader">Table Ready</h4>`;
    snapshot.forEach(function(childSnapshot) {
        var childInfo = childSnapshot.val();
        createListElement("ready", childInfo.table, childInfo.phone, childInfo.people);
    })
})


function MakeRequest() {
    if ((phonenumber.value != '') && (people.value != '')) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                phone: phonenumber.value,
                people: people.value
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.text())
        .then(text => console.log(text));
        phonenumber.value = '';
        people.value = '';
    }
}


function createListElement(type, table, phone, people) {
    var listgroup = document.createElement('div');
        listgroup.className = "listgroup";

    var a = document.createElement('a');
        a.href = "#";
        a.className = "list-group-item list-group-item-action flex-column align-items-start mt-2";

    var div = document.createElement('div');
        div.className = "d-flex w-100 justify-content-between";

    var h5 = document.createElement('h5');
        h5.className = "mb-1";
        h5.innerText = "Table " + table;

    var small = document.createElement('small');
        if (type == "queue") {
            small.className = "text-danger";
            small.innerText = "Not Ready";
        } else {
            small.className = "text-success";
            small.innerText = "Ready";
        }

    var p = document.createElement('p');
        p.className = "mb-1";
        p.innerText = people + " People";

    div.appendChild(h5);
    div.appendChild(small);
    a.appendChild(div);
    a.appendChild(p);
    listgroup.appendChild(a);
    queue.appendChild(listgroup);
}


