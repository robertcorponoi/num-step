<div align="center">

# Num Step

num-step steps through an array of numbers increasing the previous value for the next step.

</div>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/num-step.svg?style=flat)](https://www.npmjs.com/package/num-step)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/num-step/badge.svg)](https://snyk.io/test/github/robertcorponoi/num-step)
  ![npm](https://img.shields.io/npm/dt/num-step)
  [![NPM downloads](https://img.shields.io/npm/dm/num-step.svg?style=flat)](https://www.npmjs.com/package/num-step)
  <a href="https://badge.fury.io/js/num-step"><img src="https://img.shields.io/github/issues/robertcorponoi/num-step.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/num-step"><img src="https://img.shields.io/github/license/robertcorponoi/num-step.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

## **Why**

When I was working on [port-scout](https://github.com/robertcorponoi/port-scout) I needed to go through an Array of numbers and each time I got to the end, I needed to increment the numbers and go through them again.

For example, let's say that I had the numbers 3000, 8000, and 8080. For the first, second, and third iteration I needed to get those numbers exactly: 3000, 8000, and 8080. However, for each step after I needed those numbers incremented by 1. So on the fourth step I would get 3001, fifth step 8001, sixth step 8081, and so on.

## **Install**

To install num-step to use in your project, you can use:

```bash
$ npm install num-step
```

and then to use it in your project, use:

```js
// Node
const Stepper = require('num-step');

// Webpack
import Stepper from 'num-step';

// Browser
import Stepper from './path/to/num-step.js';
```

If you're using num-step in the browser you can also use the script available from unpkg:

```html
<script type="module" src="https://unpkg.com/num-step@1.0.2/num-step.js"></script>
```

## **Usage**

To use num-step in your project, you first have to require the module and then initialize it with a series of values:

```js
const Stepper = require('num-step');

const numbers = [3000, 8000, 8080];

const stepper = new Stepper(numbers);
```
Then you can step through the numbers once or as many tiems as you would like:

```js
const num = stepper.step(20);
```

## **API**

### **iteration**

Gets the current iteration of the stepper.

**example:**

```js
console.log(stepper.iteration);
```

### **step**

Steps through the numbers, iterates the previous value, and returns the current value that needs to be returned.

| param 	| type   	| description                                      	| default 	|
|-------	|--------	|--------------------------------------------------	|---------	|
| steps 	| number 	| The amount of steps to take through the numbers. 	| 1       	|

**example:**

```js
const numbers = [3000, 8000, 8080];

const stepper = new Stepper(numbers);

const num = stepper.step(16);

console.log(num) // Prints out 3005
```

## **Test**

To run the tests available for num-step, use:

```bash
$ npm run test
```