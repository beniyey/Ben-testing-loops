function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 7
    }
    else if (num % 5 === 0) {
        return 2
    } else if (num % 3 === 0) {
        return 4
    } else {
        return 5
    }
}

// return from a loop 
function loopReturn() {
    for (let index = 1; index < 10; index++) {
        if (index % 7 === 0) {
            return "the loop is ended..."
        }
    }
}

// console.log(loopReturn())

// loop continue - stop all proceeding actions and go to the next value
for (let index = 1; index < 15; index++) {
    if (index % 7 === 0) {
        // console.log("Boom")
        continue
    }
    // console.log(index)
}

// loop continue - stop all proceeding actions and go to the next value
for (let index = 1; index < 111; index++) {
    if (index % 7 === 0) {
        // console.log("Boom")
        break
    }
    // console.log(index)
}

function returnCondition() {
    const time = new Date().getMilliseconds()

    return time % 2 === 0
}

// while loop - infinite loop with break points
while (false) {
    const condition = returnCondition()
    console.log("iterated...", condition)

    if (condition === false) {
        break
    }
}

// while loop - conditional 
while (returnCondition()) {
    console.log("iterated...")
}

// The fizz buzz game - while loop instead of for
// run a loop from 1 to the provided parameter number
// if the number is divided by 3 console.log("fizz")
// if the number is divided by 5 console.log("buzz")
// if the number is divided by 3 and 5 console.log("fizz buzz")
// if none of the conditions ocurred, console the number

let num = 1;
let temp = 100;

while (num <= temp) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizz buzz")
    } else if (num % 5 === 0) {
        console.log("buzz")
    } else if (num % 3 === 0) {
        console.log("fizz")
    } else {
        console.log(num)
    }
    num++
}



// 1. run a js loop from 1 to "stop" specified by a function parameter, return the sum of odd and even numbers