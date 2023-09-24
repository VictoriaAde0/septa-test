alert('hello world');
document.write('hi people');
console.log('hey')
let age= 10
let newage= 15
  

console.log(age+newage)


let name1= "Ann"
let name2=  "Tom"


console.log(name1 + " " + name2)


const website = "google";
const url = "https://www." + website + ".com"


console.log(url)

const Name = "Victoria";
const school = "Lautech"


console.log("hello my name is" + " "  + Name + " " + "and"  +  " " + "i attended" + " " + school)

// Assignment

// Difference between var, let and const

// var element represents the name of a variable in a mathematical expression or a programming context. It is a statement that declares a variable that can be treated as any other variable
// let element represents another variable in javascript. It is a statement used to declare a variable that is block scoped.
// const element declares  creates a fixed reference to a value. It does not mean the value it holds is unchangeable meaning that the variable identifier cannot be reassigned to another.



let car = "toyota"


console.log(car)



function greet() {
console.log("hello my people");
} 

greet()


function welcome(name3){
console.log(name3)
}

welcome("Victoria")
welcome("Bolu")





function Country1(){
 console.log("Nigeria, NIG")
}

Country1("Nigeria, NIG")


function Country2(){
    console.log("Ghana, GHA")
   }
Country2("Ghana, GHA")


function Country3(){
    console.log("Turkey, TUR")
   }
Country3("Turkey, TUR")


function Country4(){
    console.log("Russia, RUS")
   }
Country4("Russia, RUS")


function Country5(){
    console.log("Ukraine, UKR")
   }

   
Country5("Ukraine, UKR")




function add(a, b){
    console.log(a + b)
    console.log(a + " + " + b  +  " = ",  a+b);
}

add(2,3)



function add(a, b){
    console.log(a + b)
    console.log(a + " + " + b  +  " = ",  a+b);
}

add(5,10)




function add(a, b){
    console.log(a + b)
    console.log(a + " + " + b  +  " = ",  a+b);
}

add(12,8)

// Assignment


function subtract(a, b){
    console.log(a - b)
    console.log(a + " - " + b + " = ", a-b)
}

subtract(70,13)

function subtract(a, b){
    console.log(a - b)
    console.log(a + " - " + b  +  " = ",  a-b);
}

subtract(10,2)

function multiply(a, b){
    console.log(a * b)
    console.log(a + " * " + b  +  " = ",  a*b);
}

multiply(2,3)

function multiply(a, b){
    console.log(a*b)
    console.log(a + " * " + b + " = ", a*b);
}

multiply(5,12)







// objects
// objects are properties which can be key and a value








let vehicle = {
    colour:"white",
    model:"edge",
    year:"2020",
    brand:"ford",
}


console.log(vehicle)


console.log(vehicle.model)


vehicle.model = "explorer"


console.log(vehicle.model)

console.log(vehicle)

let vehicles = ["toyota", "benz", "lexus", "bently"]
console.log(vehicles);




let profile = [
    {
        gender: 'female',
        ageBracket: "15-20",
        school: "queens college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    {
        gender: 'male',
        ageBracket: "15-20",
        school: "Kings college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    "Adebayo"
]
console.log(profile);






let person = [
    {
        gender: 'female',
        ageBracket: "15-20",
        school: "queens college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    {
        gender: 'male',
        ageBracket: "15-20",
        school: "Kings college",
        address: {
            street: "adekunle street",
            city: "lagos"
        }
    },
    "Adebayo"
]

console.log (person)

person[0].address.city = "ogun";
person[1].address.city = "ogun";
person[2] = "Micheal"




function nation(){
    console.log("Ukraine, UKR");
    console.log("Russia, RUS");
    console.log("Nigeria, NIG");
    console.log("Ghana, GHA");
    console.log("Turkey TUR")
}
nation()






   

//conditional statement


//if (condition){
    //made to be true





//let date = 90;

//if (date = 50) {
 //   console.log("yes date is greater");
//}


let date = 5;
if (date > 10){
    console.log("date is greater than 10")
}else if (date < 4) {
    console.log("date is less than 4")
}else{
    console.log("no")
}


let dogbark = true;
let lionroar = false 


if (!dogbark) {
    console.log("age is greater than 20")
}else if (!!dogbark){
    console.log("maybe")


}else if  (!lionroar) {
    console.log("age is less than 3")

}else {
    console.log("no")
}


if(2!=2) {
    console.log("yes")
}else{
    console.log("no")
}





let UsersAge = prompt("Please enter your age");
console.log(UsersAge)
let Citizenship = prompt("Are you a Citizen?")
console.log(Citizenship)

if (UsersAge >= 18 && Citizenship == "yes") {
    alert ("You are eligible to vote");
} else {
    alert ("Ineligible to vote");
}

