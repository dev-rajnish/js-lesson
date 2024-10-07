import { c } from './see'

//? 1 two methods to create array

//*
let arr1 = [1, 2, 3, 4];
c(7, arr1)

//*
let arr2 = new Array(1, 2, 3); //! used very rarely
c(11, arr2)

//* Accessing array
let fruits = ['apple', 'mango', 'pulm']

c(16, fruits[0])
c(17, fruits[2])

//* changing array
fruits[1] = 'banana'
c(21, fruits[1])
c(22, fruits)

//* adding new Entery to array
fruits[3] = 'peach'
c(26, fruits)

//* length of array by length
c(29, fruits.length)

//* can add mix value to array, but not reccomended

let arr3 = ['apple', { name: 'jhon', age: 20 }, true, function hello() { return 'hello' }]

c(35, arr3[0])
c(36, arr3[1].name)
c(37, arr3[2])
c(38, arr3[3]())

//? getting last element
//* using at() negative allowed

c(43, arr3.at(-1))
//or
c(45, arr3[arr3.length - 2])

//? push and pop
//*
let arr4 = ['i', 'read', 'js']
let arr4Push = arr4.push('nice')
c(51, arr4Push); //returns length array after push
c(52, arr4)

//*
let arr4pop = arr4.pop()
c(56, arr4pop); // return poped items
c(57, arr4)

//? shift unshift
//* shift
let arr5 = ['cat', 'dog']

let arr5shift = arr5.shift()
c(64, arr5shift); // removes cat first element
c(65, arr5)

//* unshift
let arr5unshift = arr5.unshift('bat', 'rat')
c(69, arr5unshift)
c(70, arr5)

//? array loops is done using for ...of loop

for (let animals of arr5) {
  c(75, animals)
}
c('-------------')
//* or using for loop ?? but not preferred
for (let i = 0; i < arr5.length; i++) {
  c(80, arr5[i])
}

//? array.length
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
c(85, arr10.length)
arr10.length = 5; // truncated not revertable
c(87, arr10.length)
c(88, arr10)
arr10.length = 8
c(90, arr10.length)
c(arr10)

//? new array()
let arrnew = new Array('i', 'am', 'fine')

c(96, arrnew)

// * but if given single number
let arraySingleNum = new Array(2)
c(100, arraySingleNum) //! no items single array
c(101, arraySingleNum.length); // 2

//? multidimensional array

let multiarr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
c(110, multiarr)
c(111, 'length is', multiarr.length) // 3 outer mostt length

c(113, multiarr[1][1]);

//? toString ()
let arrString = [1, 2] + 'str'
c(117, arrString)

c(119, multiarr + "")

// ? dont compare with ==

let arrc = []
c(124, arrc == "")
c(125, String(arrc))
c(126, 0 == [0]) // true
c(127, [0] == [0]) // felse

//! to compare insted use for...of loop

//? Array Methods
//* splice -- for adding , deleting ,

let arrSplice = [4, 7, 9]

let arrSpliceDel = arrSplice.splice(0, 1, 1, 2) // return deleted item
c(137, arrSpliceDel)
c(arrSplice)

//* just adding using splice ()

let arrSpliceAdd = arrSplice.splice(2, 0, 3, 4, 5, 6) // returns  nothing -- empty string
c(143, arrSpliceAdd == '')
c(arrSplice)
// negative index are allowed in splice


//? slice (start, end)

let arrSlice = [1, 3, 4, 5]
c(151, arrSlice.slice(1, 2)) // retun start to end not end
c(152, arrSlice)

//? array concat

let arrConcat = [1, 2, 3].concat([4, 5, 6], [{ name: 'jhon' }])

c(158, arrConcat)

let arrCon1 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

c(167, arrCon1.concat(arrayLike))

//. but if object has special Symbol.isConcatSpreadable then it behave like array

arrayLike = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 2
}

c(178, arrCon1.concat(arrayLike))