const request = require('request');    // Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)


const endpoint = "https://api.thecatapi.com/v1/breeds/search?q=";

const breedName = process.argv[2];  // allows user to specify breed name using command-line arguments
console.log(breedName)

const fetchBreedDescription = function(breedName, callback) {

  request((endpoint + breedName), (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    
    console.log(typeof body);
    const data = JSON.parse(body)[0];
    console.log(data);
    console.log(typeof data); // should say that data is now an object not a string

    // Write code to output an appropriate message if the requested breed is not found.
    if (data === false) {
      callback("Error: Requested breed was not found.");
    }
  })
};






    







