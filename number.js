'use strict'
let c = (...s) => console.log(...s);
//. 2 type of numbers
//. regular number - 64bit num - double precision floating point number
//? limit -> 2^53 to -2^53

//* writing billion

let billion = 1000000000;
c("l10-->", billion);

billion = 1e9;
c("l13-->", billion)


let billion7 = 7.3e9;
c("l17-->", billion7)

//! e multiply number by 1 and given zero

//* same with decimal writing
//* 0.0003 by -e

let ms = 3e-4
c("l25-->", ms)

//-----
//. hex , binary, octal numbers

c("l30-->", 0xff) //* hex
let b = (0o377) //*octal
let a = (0b11111111) //*binary

c("l34-->", a === b)
c("l35-->", a == b)

//? toString (base) output is string

let num = 255;

c("l41-->", num.toString(2))
c("l42-->", num.toString(16))
c("l43-->", num.toString(36))

c("l45-->", 8..toString(2))
//or
c("l47-->", (8).toString(2))

//? Rounding
//* Math.floor
c("l51-->", Math.floor(3.4));
c("l52-->", Math.floor(3.9));

//* Math.ceil
c("l55-->", Math.ceil(3.1))
c("l56-->", Math.ceil(3.9))

//* Math.round
c("l59-->", Math.round(3.4))
c("l60-->", Math.round(3.5))

//* Math.trunc
c("l63-->", Math.trunc(323.234567))
c("l64-->", Math.trunc(1.5434))

//? Convert 1.23456 to 1.23
//* method 1

c("L69-->", Math.round((1.2345) * 100) / 100)

//* method 2 --> toFixed(n)
let dnum = 1.234567
c("L73-->", dnum.toFixed(2)) // --> string

//. Imprecise calculation
//? if the number is huge
c("l77-->", 1e400);

//? adding 0.1 + 0.2 true false
c("l80-->", 0.1 + 0.2 == 0.3)

//! why
c("l83-->", 0.1 + 0.2)

c("l85-->", (0.1 + 0.2).toFixed(2)) //.string

//? [*] Test : isNaN and isFinite

//*isNaN , Number.isNaN
c("l90-->", isNaN("str")) // conerted to Number then checked

c("l92-->", Number.isNaN("str")) // just check dont convert to number
c("l93-->", Number.isNaN(NaN))

//*  isFinite and Number.isFinite
c("l96-->", isFinite("2345"), isFinite("  ")) // converted to number

c("l98-->", Number.isFinite("23456")) // "23456" IS NOT A NUMBER

//? Object.is (value) works like === checks if internally same or not

c("l102-->", Object.is(NaN, NaN), Object.is(0, -0)) // techinally 0 , -0 is different bcuz of sign

//? [*] parseInt and parseFloat

c("l106-->", parseInt("1044px"), parseInt("e23"), parseInt("1234w234"), parseInt("2345.98.32"))

c("l108-->", parseFloat("34567.4567dac",))

console.log("l110-->", parseFloat("4.4.4"))

//* parseInt optional second argument
c("113-->", parseInt("FF", 16))
c("114-->", parseInt("2n9c", 36))

//?[Math].random , max, min,pow

c("118-->", Math.random(), Math.max(2, 45, 6, 2), Math.min(-1, 3, 4, 434), Math.pow(2, 3))

//????
//.random(min,max) make this

//*solution
function random(max, min) {
  return Math.trunc((Math.random() * (max - min) + min))
}
c("127-->", random(10, 20))