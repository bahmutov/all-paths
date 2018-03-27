'use strict'

/* eslint-env jest */
const allPaths = require('.')

test('single property', () => {
  const o = {
    foo: 'bar'
  }
  expect(allPaths(o)).toEqual([['foo']])
})

test('plain object', () => {
  const o = {
    foo: { bar: 42 }
  }
  expect(allPaths(o)).toMatchSnapshot()
})

test('complex object', () => {
  const o = {
    foo: { bar: 42 },
    list: ['one', 'two', 'three']
  }
  expect(allPaths(o)).toMatchSnapshot()
})
