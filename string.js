import {c} from `./see`

let single = 'single quote string';

let double = "double quote string"

let backticks = `backticks string`

//* Backticks expression in string

let expString = `${backticks} in : expString`
c(12,expString);

//* Backticks allow multi line string
let multiLine = `
Guests :
*Jhon
*Pete
*Mary
`;
c(21,multiLine)

//* String Length is a numeric property
c(`24-->`, "Hello".length)

//?[] Accessing Character
//* method 1 using [position]
let str = "hello"
c(`29-->`, str[0])

//* Method 2 using .at() method
c(`32-->`, str.at(3));
//also access negative value;
c(`34-->`, str.at(-1))

c(`36-->`, str.charAt(3));

//* accessing last character using []
c(`39-->`, str[str.length - 1])
c(`40-->`, str.at(-1))

c(`42-->`, str[-2]); // -> undefined

//* iterate over character
// for...of(){}

for (let char of str) {
  c(48,char)
}

//* string can't be changed
let strIm = `Hi`;
c(`53-->`, strIm)
//strIm[0] = 'h'; // gives error : Attempted to assign to readonly property.

strIm = 'h' + strIm[1]
c(`57-->`, strIm)

//?[] .toUpperCase and .toLowerCase
//* .toUpperCase()
c(`61-->`, 'raJnisH'.toUpperCase())

//* .toLowerCase()
c(`64-->`, 'RAJnISH'.toLowerCase())

//* single convert
c(`67-->`, 'Hi'[1 - 1].toLowerCase())

//=========
//?[] .indexOf("substring", startingPosition)
let longStr = 'widget with id'

c('73-->', longStr.indexOf('id')); // 1 coz id start from 1 in widget

//*after that it get next occuring of id
c('76-->', longStr.indexOf('id', 2));

//let str = 'As sly as a fox, as strong as an ox';

let strAs = 'As sly as a fox, as strong as an ox'
let target = 'as'
let pos = -1;
let counter = 0;

while ( (pos = strAs.indexOf(target,pos + 1)) != -1 ) {
c(86,pos , ++counter)
}
c(88,`"as" found ${counter} Times`)
c()