// alert("Hey Guy")
// a memory location that never changes
const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14159
// jQuery Command. wait untill web page laods call function whose name is in parantheses
//function call means run the code
$(greeter)
// call function add  use it -make it run
// add(2,3);
// // greeter is the function identifier. name is the functions
// // argument (info it needs to do its job)

// function add (num1, num2) {
//   answer= num1 + num2;
//  console.log ("the answer is: " + answer);
//   return answer;
// }
function greeter(name) {
  alert ("welcome to "+ name +  "data Visualization")
}

greeter("Lucas Rouchy's")


var person = {name: "Lucas", age: 300, car: {model: "Tesla", year: 2030}}
console.log ("my name is "+ person.name)
console.log ("my age is "+ person.age)
console.log ("my car model is "+ person.car.model)

if(person.age > 50) {
  alert ("stop being old")
}

// var data = {"2016":[{"9":220},{"10":141}, {"11":89}, {"12":16}]}
// var year_list= data[2016]
// console.log( 'year list is ' + year_list)

// console.log(year_list[0][9])
// console.log(year_list[1][10])
// console.log(year_list[2][11])
// console.log(year_list[3][12])
// $(updateGraph)
 $ (updateView)

let years= []
let months2016=[]
let months2017=[]
let months2018=[]

function updateView(){
  $.getJson(BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJson(BASE_URL + "/rides/count/per_month", perYear),
  ) .then(updateChart) ;
}

function perYear(data) {
  for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2016] [index] [month])
  }
console.log ("2016 data by months is easy " + months2016)
}
for (var index = 0, month=1; index <=1, month <=12; ++index, ++month) {
  months2017.push(data[2017][index][month])
}
for (var index = 0, month=1; index <=1, month <=10; ++index, ++month) {
  months2018.push(data[2018][index][month])
}
console.log ( "2018 data by months is " + months2018)


 
 

//  function updateGraph() {
//  var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
// //     // The type of chart we want to create
// //     type: 'line',

// //     // The data for our dataset
//  data: {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//   label: 'My First dataset',
//    backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

// //     // Configuration options go here
//    options: {}
//   }

