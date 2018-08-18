/** 1 - reverseArray() **/

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i > -1; i--) {
    result.push(arr[i]);
  }
  return result;
}

reverseArray(sentence);


/** 2 - greetAliens() **/

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(arr) {
  for (let i = 0; i < aliens.length; i++) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
}

greetAliens(aliens);


/** 3 - convertToBaby() **/

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

function convertToBaby(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`baby ${arr[i]}`);
  }
  return result;
}

convertToBaby(animals);


/** 4 - Fix The Broken Code! **/

const testNums = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let n = 1;
    while (n < arr[i]) {
      n = n * 2;
    }
    results.push(n);
  }
  return results;
}
smallestPowerOfTwo(testNums);

/** 5 - declineEverything() and acceptEverything() **/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

function declineEverything(arr) {
  arr.forEach(item => {
    politelyDecline(item);
  });
}

function acceptEverything(arr) {
  arr.forEach(item => {
   console.log(`Ok, I guess I will eat some ${item}.`);
  });
}

declineEverything(veggies);
acceptEverything(veggies);

/** 6 - squareNums() **/

function squareNums(arr) {
  return arr.map(num => num*num);
}

squareNums([2,3,4,5]);

/** 7 - shoutGreetings() **/

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

function shoutGreetings(arr) {
  return arr.map(str => `${str.toUpperCase()}!`);
};

console.log(shoutGreetings(greetings));


/** BONUS **/

/** 8 - sortYears() **/

const years = [100, 543, 66, 20, 69, 700, 600];

function sortYears(arr) {
  return arr.sort((a, b) => {
    return b-a;
  });
}

sortYears(years);

/** 9 - justCoolStuff() **/

let arr1 = ['this','that', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'that', 'this'];

function justCoolStuff(arrA, arrB) {
  return arrA.filter(str => arrB.indexOf(str) > -1);
}

justCoolStuff(arr1, arr2);

/** 10 - isTheDinnerVegan() **/

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

function isTheDinnerVegan(arr) {
  let isVegan = true;
  arr.forEach(item => {
    if (item.source !== 'plant') {
      isVegan = false;
    }
  });

  return isVegan;
}

isTheDinnerVegan(meal);

/** 11 - dogFactory() **/

function dogFactory(name, breed, weight) {
  if (typeof weight !== 'number') {
    return {};
  }

  if (typeof name !== 'string' || typeof breed !== 'string') {
    return {};
  }

  return { name, breed, weight };
}

dogFactory('Joe', 'Pug', 27);