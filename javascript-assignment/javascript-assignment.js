let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
//Q1: Write the code to sum all salaries and store in the variable sum.
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log("sum is " + sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

//Q2: Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
function multiplyNumeric(obj) {
  for (var elem in menu) {
    if (typeof menu[elem] == "number") {
      menu[elem] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// Q3: Write a function checkEmailId(str) that returns true if str contains '@' and '.', otherwise false. Make sure
// '@' must come before '.' and there must be some characters between '@' and '.' The function must be case insensitive.
function checkEmailId(str) {
  let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  return regex.test(str.toLowerCase());
}

let email = "YOUWEICHEN@GMAIL.COM";
console.log(checkEmailId(email));

// Q4: Create a function truncate(str, maxlength) that checks the length of the str and, if it excceeds maxlength - replaces the
// end of str with ellipsis character "...", to make its length equal to maxlength.

function truncate(str, maxlength) {
  let result = str;
  if (str.length > maxlength) {
    result = str.slice(0, maxlength - 3);
    result += "...";
  }
  return result;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// Q5: Let's try 5 array operations.
// Create an array styles with items "James" and "Brennie"
let styles = ["James", "Brennie"];
console.log(styles);
// Append "Robert" to the end
styles.push("Robert");
console.log(styles);
// Replace the value in the middle by "Calvin"
styles[Math.floor(styles.length / 2)] = "Calvin";
console.log(styles);

//Remove the first value of the array
styles.shift();
console.log(styles);

// Prepend "Rose" and "Regal" to the array
styles.unshift("Rose", "Regal");
console.log(styles);
