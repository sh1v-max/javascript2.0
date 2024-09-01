//https://youtu.be/Y1cpFsXrEgY?si=4gESvBJTTcm-rDvH
//for
//check ctrl+d schortcut/ select an item and press ctrl+d

for (let z = 0; z <= 10; z++) {
    const element = z;
    console.log(element);// element can only be accessed inside block scope
}

console.log("============example 2======================");

for (let x = 0; x <= 10; x++) {
    const element = x;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);// element can only be accessed inside block scope
}

console.log("===============example 3====================");

for (let a = 1; a <= 10; a++) {
    console.log(`outer loop value: ${a}`);
    for (let b = 1; b <= 10; b++) {
        // console.log(`inner loop value: ${b} and inner loop ${a}`);
        // for every 1 inner loop, outer loop will be executed 10 times
        console.log(a+ ' * '+b+' = '+a*b );
    }    
}

console.log("===============example 4=====================");

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    //you wont get out of bound exception in js, you will get undefined
}

//break and continue
console.log(`==============break and continue==============`);

for (let index = 1; index < 20; index++) {
    if (index==5) {
        console.log(`5 deteted`);
        // break
        continue
    }
    console.log(`value of 1 is ${index}`);

}
