// Your code at the beginning of the file.
"use strict;"



function Demo() {



// Autogenerated with DRAKON Editor 1.32


function createBar(left, right) {
    var x, y
    x = left + 10
    y = right + 20
    return {
        left : x,
        right : y
    }
}

function doSomething(first, second, third) {
    var bar, fifth, fourth, i, moo, x37
    fourth = first + second
    fifth = second + 10
    third = third || ""
    x37 = fourth +
     fifth * 3
    moo = {
        x : 10 + Math.cos(first),
        y : 20
    }
    third.z = 30
    bar = createBar(
        first,
        444
    )
    console.log(
        fourth,
        fifth,
        x37,
        moo,
        bar
    )
    i = 0;
    while (true) {
        if (i < 2) {
            
        } else {
            break;
        }
        console.log(i)
        i++;
    }
}

function lambdas() {
    var lam, lam2, lam3, p, someVar
    someVar = 900
    lam = function(left, right) {
        console.log(
            left,
            right,
            someVar
        )
    }
    lam(45, 46)
    lam2 = function(value) {
        return value * 2
    }
    console.log(
        lam2(10)
    )
    lam3 = function() {
        return {
            x : 22,
            y : 33
        }
    }
    p = lam3()
    console.log(p)
}

function main() {
    console.log("hello")
    doSomething(
        100,
        2000,
        {x:60000}
    )
    lambdas()
    console.log("bye")
}


// Your code at the end of the file.

this.main = main

} // End of namespace

// Символы Юникод

var demo = new Demo()
demo.main()
