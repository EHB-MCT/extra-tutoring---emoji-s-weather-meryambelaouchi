"use strict";

let emojis = [];


// TODO: fetch your data
fetch('https://emoji-api.com/emojis?access_key=63208d1b122d03aca3fe6e31ff21b23bd07db905')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
// TODO: use then to wait for the result

// TODO: load the json from the reponse
// TODO: in the final then function, process the data and add it to the HTML