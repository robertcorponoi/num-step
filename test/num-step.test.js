'use strict'

const test = require('ava');
const Stepper = require('../index');

const numbers = [3000, 8000, 8080];

let stepper;

test.beforeEach(() => stepper = new Stepper(numbers));

test.afterEach(() => stepper = null);

test('it should return 3000 on the first step', t => {

  const num = stepper.step();

  t.is(num, 3000);

});

test('it should return 8000 on the second step', t => {

  const num = stepper.step(2);

  t.is(num, 8000);

});

test('it should return 8080 on the third step', t => {

  const num = stepper.step(3);

  t.is(num, 8080);

});

test('it should return 3001 on the fourth step', t => {

  const num = stepper.step(4);

  t.is(num, 3001);

});

test('it should return 8001 on the fifth step', t => {

  const num = stepper.step(5);

  t.is(num, 8001);

});

test('it should return 8081 on the sixth step', t => {

  const num = stepper.step(6);

  t.is(num, 8081);

});

test('it should return 3005 on the sixteenth step', t => {

  const num = stepper.step(16);

  t.is(num, 3005);

});

test('it should return 8003 on the seventeenth step', t => {

  const num = stepper.step(17);

  t.is(num, 8005);

});

test('it should return 8083 on the eighteenth step', t => {

  const num = stepper.step(18);

  t.is(num, 8085);

});