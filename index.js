const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];  // allows user to specify breed name using command-line arguments
console.log(breedName);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
    return;
  }
  console.log("Description: " + desc);
});
