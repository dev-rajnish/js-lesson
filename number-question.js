  // Q1. Base Conversion Practice:

  //     Write a function that converts any decimal number to binary, octal, and hexadecimal formats.
  //      Use toString(base) and make sure it works for negative numbers too.
  //*solution
  function decToNum(n, base) {
    console.log(n.toString(base))
  }
  decToNum(255, 16)

  // ==========

  // Q2. Floating-Point Precision:

  //     You know 0.1 + 0.2 !== 0.3.
  //      Write a function that demonstrates another case where floating-point precision breaks.
  //       Can you think of a solution to this issue?
  //*solution
  function floatIsBreaked(decNum) {
    console.log(decNum.toFixed(25))
  }

  floatIsBreaked(0.2)

  // ==============

  // Q3. Rounding Numbers:

  //     Write a function roundTo(n, decimals) that rounds any number n to a
  //     specific number of decimal places decimals using Math.round or another method.
  //     For example, roundTo(1.23456, 2) should return 1.23.
  //*solution
  function roundTo(n, dec) {
    console.log(Number(n.toFixed(dec)))
  }
  roundTo(4567.75432, 2)