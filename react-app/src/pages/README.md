# 1. Provide an overview and description of your source control process.
## (Provide an overview and description of a standard source control process for a large project) Provides an extensive overview and description of a standard source control process

Answer:

The source control process we used on Real Code was to use git locally, and github as the remote management interface. We worked on collaborative git repositories, and made feature branches corresponding to the trello tasks. There was a separate repository for the front and back-end, to improve separation of concerns,  reduce chances for code conflicts and increase modularity of our project. We had a team policy to make pull requests to master when pushing code changes, and for another team member to review the code before merging the feature branch changes into master.

If the project was larger, we would do the above with a few extra strategies. We would have a production branch (master) and a development branch. We would have the production branch deployed for user testing, whilst we work on dev to implement new features for upcoming releases. This means that we can make changes to the dev branch and if they break it will not affect the deployed site. Once dev in in good shape to be released, we would then do a merge to master and the new release code would become live.

# 2. What are the most important aspects of quality software?
## List discuss and demonstrate 6 software quality characteristics.


Answer:

Reliability - The software should behave as expected and consistently, with minimal errors and any errors should be handled gracefully with intuitive next steps for the user. 

Understandability - The source code should be as easy as possible for new developers to undersand, and the application architecture should be clear and easy to understand when working with  business stakeholders. The code should be “self documenting” in the sense that developers should not be confused and need to seek clarity from previous engineers.

Modifiability - Splitting the code out into well-modularised components, means that it will be easy to extend and even change the underlying implementation of a given component, without affecting the rest of the code base. This reduces future development time and minimises application impact, it also reduces the need for testing for new features (as tests can be run on the new module only with minimal extra integration tests). An example would be changing the database used from Mongo to a SQL database, if an abstraction module is used for the database calls this would be a simple task, whereas if Mongo queries are used within the business logic it becomes a large and cumbersome project.

Testability - The software should be easily testable, to achieve maximum code coverage and confidence in the code base. Writing modular code and thinking about testing during the software design phase will facilitate this. Making an architecture decision based on testability can be a valid choice in order to achieve a quality software solution.

Efficiency - High quality software must be efficient, and minimise the use of physical resources. A focus on the particular system will determine whether CPU speed or memory resources are the most important axis for optimisation, but as a general rule of thumb consuming an efficient amount is best practice. If it is particularly difficult to optimise for a particular resource, however, it can be a valid architectural decision to be less efficient if the future scope will not include a load that will exhaust the resources. For example it can be a decision to embed data rather than store by reference, in cases where a fast lookup is more important than memory usage. This case would be acceptable if the data stored and the parent structure are never going to amount to a high number (e.g less than billions).



# 3. Demonstrate sound design Architecture
## (Outline a standard high level structure for a MERN stack application and explain the components) Shows almost flawless understanding of the high level structure of the app


Answer:

A MERN stack application is a web application built using the following technologies:

Mongo - a noSQL database, running on a server somewhere (can be a cloud service or a server that we maintain ourselves)

Express - a javascript web server library that is used by node in order to serve HTTP requests, this runs on a backend server where node is running

React - a front end javascript framework that runs in the browser, used to implement the user interface for the app and create a more seamless experience for the user. The use of React moves the “view” aspect of MVC architecture into the browser, and is known as “client side rendering”, as the rendered HTML pages are served from the react process in the browser. This is different to “server side rendering” where the HTML displayed is sent to the browser from a backend server.

Node - a runtime environment for javascript that is run on a backend server. In a MERN web application the node process will use express to serve HTTP routes and provide the backend data (JSON) that the front end will use to construct the HTML displayed to the user. Any business logic is handled here. The Controller aspect of MVC is handled in the node process, and also contains an abstraction layer that is used to interact with the database Model.


# 4. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
## (A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?) Effectively describes a range of skills and knowledge required by IT workers to complete a quality web development project

Answer:

Knowledge and Skills required for a Website project for a small business (I will assume it is a web application rather than a static site):

- Database design and evaluation of the options for the stack technologies. This is more for a tech lead or senior engineer, these skills are needed at the start of a project when the software design is taking place.
- Restful route design: knowledge around how to design your project routes such that they confirm to standard industry paradigms, including restful routing
- Basic UX design (assuming you don’t have assigned UX people), IT workers will need to use skills to decide on the site flow and layout of action items, even trying some basic user testing and responding to feedback
- Knowledge about how to implement of either a SQL or noSQL database, including representing associations in the most efficient (or suitable for the project) manner
- Knowledge about using a web server framework or library, and the associated coding language to utilise the framework or library. E.g. ruby on rails with ruby, or express with node.js (javascript). 
- It might be useful to use a frontend framework such as react or angular, and separate the views out to be rendered on the client side rather than using server side rendering. This is not essential but may result in a more modern feel for the site (as the pages will not need to be reloaded as frequently and the data can be displayed more quickly as fewer API calls are needed)
- They need to know about source control and git flows, and a development methodology will be useful (such as Agile). These things will facilitate ease of working in teams but can be learned on the job as they are often tailored to a particular project or team. 
- They ideally need to know about testing practices and how to make sure their code has test coverage, if there is no assigned test team. Things like unit tests, integration tests, edge cases, white box and black box testing, performance testing (though this might be overkill for a small business) 
- They would also need to know about how to deploy the site to a server, including any database and otehr assets (possibly using AWS or GCP).


# 5. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
## (With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges) Effectively describes a range of skills and knowledge used to complete a project.

Answer:

Knowledge required to complete me project: Knowledge of web applications and MVC software architecture , coding abilities (javascript mapping arrays etc), the http protocol, restful design, database design, project planning and task timelines to ensure we were all able to be productive and did not become blocked on one another, debugging skills (problem solving), research skills (to figure out how to do file management from node on heroku)

Explain each one. (See question 4)


# 6. Evaluate how effective your knowledge and skills were this project, and suggest changes or improvements for future projects of a similar nature?
## (With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature) Evaluates effectiveness of knowledge and skills accurately, providing examples, and providing an insightful improvement on each skill

Answer:

I had a good overview of the project and the parts, but the specifics of how to deploy and set up the database I was not strong on. In future I hope to have more experience and be better in these areas.

# 7. Explains the concept of control flow in programming
## (Explain control flow, using an example from the JavaScript programming language) Provides a thorough explanation of control flow in programming

Answer:

Control flow is the order of statements that are executed by the CPU.

In programming a statement is the smallest standalone element of a program that expresses some action to be carried out. It is an instruction that commands the computer to perform a specified action. A program is formed by a sequence of one or more statements. (e.g. x = 5 + 2)

There are 3 types of control flow: sequential, conditional, iterative, examples of each are given below.

- Sequential
```
var a = 1
func()
```
- - The value 1 is assigned to a variable called a, and then the function func() is called

- Iterative
```
for (i = 0; i < 5; i++) {
	console.log(i)
}
```
- - This will execute the “console.log(i)” line 5 times, printing 0, 1, 2, 3, 4

- Conditional
```
Var x = 1
If (x===1) {
	console.log(“it’s one!”)
} else {
	console.log(“its not one !”)
}
```
- - This will assign the value 1 to the variable a, then it will console log “its one”. If we assigned a different value to a it would console log “its not one”. This is conditional branching,


# 8. Explains the concept of type coercion in programming
## (Explain type coercion, using examples from the JavaScript programming language)

Answer:

Type coercion is the automatic conversion from one data type to another within an expression. The data type can be converted, depending on the context of the expression. Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6)

Many programming languages, including javascript and java, allow type coercion as a convenience to the programmer. Languages that do not allow type coercion include C and C++. 

Javascript examples below:
- Comparison operators: == will type coerce, but if you use === it will compare types too, e.g.
```
var num = 1 
var str = "1"

console.log(num == str) // true
console.log(num === str) //false
```

# 1. Explains the concept of data types in programming
## (Explain data types, using examples from the JavaScript programming language)


Answer:

In programming, data types refer to the type of data stored in a variable. At a low level, it allows the interpreter to know whether to interpret the value of a byte as an integer, character, or boolean, for example. In javascript, as everything is an object, a datatype determines the type of value an object can have and which operations can be performed on it.

There are two main collections of datatypes - primitive and composite

The primitive data types in javascript are: number, string, boolean, null, undefined + Symbol (added in ES6).

- Strings consist of one or more characters, which can include letters, numbers(“1”) and other types of characters (as defined in the ASCII table)
```
var str = “hello”
```

- Numeric data types contain values that we can perform mathematical operations on.
```
var int = 1
```
- Boolean data types can represent one of two states, for example “on” and “off”. Conditional operators work with boolean data types.
```
var on = true
```

Composite datatypes are obtained by combining more than one primitive data type, they can also be referred to as data structures. Common examples of a composite data type are arrays and objects(inJS)
```
var myArray = [1, 2, 3]
var myObject = {firstKey: 2, otherKey: 3}
```

# 10. Demonstrates an ability to manipulate arrays
## (Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language) Demonstrates an extensive ability to manipulate arrays
Answer:

You create an array like this:
```
const myArr = [] 
//or 
const myArr = new Array()
```
Access element: 
```
const myArr = [1, 2, 3]
console.log(myArr[0])// 1
```
Javascript provides array methods that can be used to easily perform a wide range of operations on an array datastructure:

- Iterate an array:
```
var fruits = new Array ( "apple", "pear", "orange", "banana", "peach", "strawberry" );

for ( i=0; i < fruits.length; i++ )
{
  console.log ( fruits[i] );
}
```
Can also use forEach to iterate: 
```
myArr.forEach
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);


function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
```

- Extract sections of arrays: 

slice() returns a new array made of the section
```
var fruits = new Array ( "apple", "pear", "orange", "banana" );
console.log ( fruits.slice ( 1, 3 ) )  // Displays "pear,orange"
console.log ( fruits.slice ( 0, -2 ) ) // Displays "apple,pear"
console.log ( fruits.slice ( 2 ) )     // Displays "orange,banana"
```

- Print array contents as one string: join
```
var fruits = new Array ( "apple", "pear", "orange", "banana" );
fruits.join ( ) ;      // displays "apple,pear,orange,banana"
```

- Adding and removing: pop, push, unshift
- - Remove from end of an array and return the removd element: 
```
console.log(fruits.pop())//”banana”
```
- - Add to end of array: 
``` 
fruits.push(“pineapple”)
```

- Splice (add remove from middle of an array)
```
var fruits = [ "apple", "pear", "orange", "banana" ];
var removedElements = fruits.splice ( 1, 2 );
console.log ( fruits );  // displays "apple,banana"
console.log ( removedElements );  // displays "pear,orange"
```

- Map The map() method creates a new array with the results of calling a provided function on every element in the calling array.
```
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log(x)//[2, 3, 4, 5]
```



# 11. Demonstrates an ability to manipulate objects
## (Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language) Demonstrates an extensive ability to manipulate objects


Answer:

- Create object in two ways:
1. using object initialisers
```
var obj = { property_1:   1,
            property_2:   2}; 
```
2. Using a constructor function (this used to be what they used as a workaround before ES6 classes)
```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);
var myOtherCar = new Car('Yaris', 'Toyota', 2001);
```

- access object values
```
var obj = { property_1:   1,
            property_2:   2}; 
console.log(obj.property_1)// displays 1
```
- object methods, javascript provides some object methods that can be used to work with objects
1. Get an array of the values from an object
```
var obj = { property_1:   1,
            property_2:   2}; 
console.log(Object.keys(obj))//["property_1", "property_2"]
```
2. Get an array of the keys from an object
```
console.log(Object.keys(obj))//[1, 2]
```

# 12. Demonstrates an ability to manipulate JSON 
## (Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language) Demonstrates an extensive ability to manipulate JSON


Answer:
JSON is a data format that is based around the Javascript object syntax. It is a string which is useful for passing data across networks, and can be used independently of javaascript as a standardised data format.

 It needs to be converted to a native JavaScript object when you want to access the data from within Javascript code. JavaScript provides a global JSON object that has methods available for converting between the two.

 Valid JSON is a combination of object and arrays, and the keys must always be quoted strings e.g.
 ```
 [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  }
 ]
 ```
Within javascript code, the fllwign methods are provided to parse JSON into a JS object, and to convert a JS object to JSON. Examples:

1. parse JSON to a JS object
```
  const javascriptObject = JSON.parse(JSONstring)
```
2. convert JS object to JSON
```
let myJSONObject = { "name": "Chris", "age": "38" };
let myJSONString = JSON.stringify(myJSONObject);
```


# 13. Recognise functions, ranges and classes & PRG1006-4.2 Identify functions, ranges and classes
## (For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes) Demonstrates an extensive ability to recognise functions, ranges and classes

Answer:

```
// (For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognise and identify functions, ranges and classes)

class Car { // a class defining a Car 
  constructor(brand) {//The constructor function, this is called when we use 'new Car(brand)' and whatever is passed as 'brand' will be used in this consturctor scope
    this.carname = brand;//defining a class variable/attribute to the instance of Car and assigning the passed in 'brand' to the this.carname attribute
  }
  present() {// a method that can be called on an instance of the Car class
    return 'I have a ' + this.carname;// this will return a string that will be different depending on the brand that was passed into the constructor. Examples:
    //"I have a Holden" or "I have a Toyota"
  }
}

class Model extends Car {// a class defining a Model, based off the Car class. Model instances will have access to the same methods and attributes as the Car class
  constructor(brand, mod) {//The constructor function, this is called when we use 'new Model(brand, mod)' and whatever is passed as 'brand' and 'mod' will be used in this consturctor scope
    super(brand);// this invokes the parent class's constructor function using the 'brand' argument
    this.model = mod;//defining a class variable/attribute to the instance of Car and assigning the passed in 'brand' to the this.carname attribute
  }
  show() {// a method that can be called on an instance of the Model class
    return this.present() + ', it was made in ' + this.model;// this concatonates the Car class's .present() return string wih the string "it was made in 1981" , as an example. this.model is whatever was stored in the model attribute. The whole .show() method will return the following strings, as examples:
    //"I have a Holden, it was made in 1980" or "I have a Toyota, it was made in 1981"
  }
}

let makes = ["Ford", "Holden", "Toyota"] // this definines an array of three strings and assigns it to the variable makes
let models = Array.from(new Array(40), (x,i) => i + 1980)// This is how to do a rangein javascript, it creates an array of 40 elements with each element representing a year between 1980 and 2019. Array.from() creates a new array based on an input array (new Array(40)), the second argument is a mapFn ((x, i) => i + 1980)) that describes how to map from the elements of new Array(40) to the new elements in 'models'. i is the index of the array, so it writes 0 + 1980 to the first element, 1 + 1980 to the second element, and so on until it reaches the 40th element, when it will write 39 + 1980.

// This is a function which will return a random integer from between a given maximum and minimum number
function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min);//Math is a javascript library, here we are using the floor method to round to the nearest integer. The random method is used to generate a "random" number between 0 and 1 (as much as possible given comp sci contraints). This random number is multiplied by the min max range to create a range of numbers of the correct length, and then it is added to min so that these numbers begin at min and then can range all the way up to the max number.
}

for (model of models) {//This is a loop that iterated over the array 'models', and makes the local scope variable 'model' available to the loop code to work with. Model will be a year represented by an integer, beginning with 1980

  make = makes[randomIntFromInterval(0,makes.length-1)]//this picks a make at random from the options "Ford" "Holden" and "Toyota". The returned number from randomIntFromInterval will be between 0 - 3, and this index is accessed in the 'makes' array to return the make string.
  model = models[randomIntFromInterval(0,makes.length-1)]// this picks a model at random from the first three elements of the models array. So 'model' will be either 1980, 1981 or 1982. I am not sure if this is an intentional bug or not, I would have thought you would want to select at random from the entire models array, in order to do that you would change the code to:
  //model = models[randomIntFromInterval(0,models.length-1)]
    
  mycar = new Model(make, model);// this creates a new car based on the random make and model generated above. It is an instance of the Model class, with attributes 'model' and 'carname'.
  console.log(mycar.show())//This invokes the .show() method from the Model instance, which will print "I have a Holden, it was made in 1981" (as an example). Depending on the make and model chosen it will print different stings, e.g. "I have a Ford, it was made in 1980"
}
```