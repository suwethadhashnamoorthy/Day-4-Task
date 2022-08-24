// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all'); // connection to open

request.send(null) // Request Send 

// Function to process the response
request.onload = function() {
  const countries = JSON.parse(request.responseText);

// Choosing a Needs

  for (var i=0; i<countries.length; i++) {
    const { flag, name:{common} } = countries[i];
     const {region, subregion} = countries[i];
     const {population} = countries[i];
     console.log(flag, "Countries Name is:" + " " + common);
     console.log("Region is:" +" "+ region +"," , "Sub-Region is:" +" "+ subregion);
     console.log("Total Population is:" + " " + population);
   }
}

// var obj1 = {
//     name: "Person1",
//     age : 5
//   }
//   var obj2 = {
//     age: 5,
//     name: "Person1"
//   }
//   // Using For-in
//   for (let key in obj1) {
//     console.log(key +":" , obj1[key]);
//   }
//   for (let key in obj2) {
//     console.log(key +":" , obj2[key]);
//   }
  
//   if (obj1["name"] === obj2["name"])
//   {
//     console.log("Both Object data are Same");
//   }
//   else {
//     console.log("Both Object data are Not same");
//   }