
//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
//var arrayBoo = ["Boo", "11435", "54000", 3];
//var arrayScout = ["Scout", "6243", "74750", 5];

var objAtticus = {
  name: "Atticus",
  emplNum: "2405",
  beforeSalary: "47000",
  emplRating: 3
};

var objJem = {
  name: "Jem",
  emplNum: "62347",
  beforeSalary: "63500",
  emplRating: 4
};
var objBoo = {
  name: "Boo",
  emplNum: "11435",
  beforeSalary: "54000",
  emplRating: 3
};
var objScout = {
  name: "Scout",
  emplNum: "6243",
  beforeSalary: "74750",
  emplRating: 5
};

//var allEmps = {
//  emp1: objAtticus, 
//  emp2: objJem, 
//  emp3: objBoo, 
//  emp4: objScout
//};

//console.log(allEmps);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'

//var x;
//for(x in objAtticus) {
  //console.log(x);
	var empObjNew1 = calculateSTI(objAtticus);
  calculateSTI(objJem);
  calculateSTI(objBoo);
  calculateSTI(objScout);
 	newEl = document.createElement('li');
	newText = document.createTextNode(empObjNew1.name);
  // empObjNew.percentSTI, empObjNew.incomeTotal, empObjNew.bonus);
	newEl.appendChild(newText);
	position.appendChild(newEl);
//}


function calculateSTI(myObject){
  var newObject = {};
  //console.log(myObject.name);
  newObject.name = myObject.name;
  //console.log(newObject.name);

  var employeeNumber = myObject.emplNum;
  var baseSalary = parseInt(myObject.beforeSalary);
  //console.log(baseSalary);
  var reviewScore = myObject.emplRating;
  //console.log(employeeNumber + " " + baseSalary + " "+ reviewScore);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.percentSTI = (bonus.toFixed(2));
  //console.log(newArray[1]);
  
  newObject.incomeTotal = Math.round(baseSalary * (1.0 + bonus));
  newObject.bonus = (baseSalary * bonus);
  //console.log(newArray[2]);

  
  //console.log(newArray[3]);

  //console.log(newArray[0] + " " + newArray[1] + " " + newArray[3] + " " + newArray[2]);
  console.log(newObject);

  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
  console.log(basePercent);//
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}