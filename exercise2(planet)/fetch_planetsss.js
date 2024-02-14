//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////


fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then(response => response.json())
  .then(data => {

    const planets = data;

    document.getElementById("destination").innerHTML = `
      <h3>${planets[0].name}</h3>
      <p>Distance from Earth: ${planets[0].distance}</p>
    `;

    let index = 0;

    function updatePlanetInfo() {
      document.getElementById("destination").innerHTML = `
        <h3>${planets[index].name}</h3>
        <p>Distance from Earth: ${planets[index].distance}</p>
      `;
    }

    // Add event listener to the destination div
    document.getElementById("destination").addEventListener("click", () => {

      index++;

      if (index >= planets.length) {
        index = 0;
      }

      updatePlanetInfo();
    });
  })
.catch(error => console.error("Error fetching planet data:", error));