const name = "shiv"
const repoCount = 50

//another way to declare string
const gameName = new String('shiv-gc')
/*
first method only define variable and store sting
while second method store its information also
==see refrence image

now you can easily perform operations on 
'gameName'
*/
console.log(gameName); //it wont pring string name
// see output  [String: 'shivgc']
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t")); //-1
console.log(gameName.indexOf("v")); //3

const newString=gameName.substring(0,2) // here you can only give +ve arg
console.log(newString);

const anotherString = gameName.slice(-5,5) //here you can give -ve arg also
console.log(anotherString);

const newStringOne="    shiv    "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes backspace

const url="https://shiv.com/shiv%20shingh"
// u want to replace 
console.log(url.replace('%20','_'));
console.log(url.includes('shiv'));
// to check if paramtr is presend or not
console.log(gameName.split('-'));


console.log(name + repoCount + "value");
/*
we are normally concatinating using ++
this line doesnt look good in prduct buildup perspective
ie its not much readable and to make it more readable, we will use
string interpolation.
and from now on we will always use same method
*/

console.log(`hello my name is ${gameName} and my repo count is ${repoCount}`);

/*
here we are using backtick(`) and placeholders(using ${}) while 
writing desired content alongside
this look more readable and industry friendly
*/


/*-------OUTPUT
[String: 'shiv-gc']
s
{}
7
SHIVGC
shiv50value
hello my name is shivgc and my repo count is 50
*/

/* additionla knowledge:
template strings: use backticks(``) rather than quotes(""), 
1. backtick allow both single and double quotes inside string
2. also allow multiline strings, and interpolations(${}),
        let firstName = "John";
        let lastName = "Doe";

        let text = `Welcome ${firstName}, ${lastName}!`;

3. expressions in string:
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

4. HTML template:
    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
    html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    */