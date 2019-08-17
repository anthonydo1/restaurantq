const axios = require('axios');
const url = 'localhost:3000/'

$('document').ready(function() {
    $('submit').click(function() {
        if ($('phonenumber').val() != '') {
            axios.post(url, {
                phonenumber: $('phonenumber').val()
            })
        } else {
            console.log('something went wrong');
        }
    })
})
.then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
})
.catch((error) => {
    console.error(error);
})