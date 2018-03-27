'use strict'

const range = require('lodash.range')
const isPlainObject = require('lodash.isplainobject')

function _allPaths (object, previousPath = [], paths = []) {
  let keys

  if (isPlainObject(object)) {
    keys = Object.keys(object)
  } else if (Array.isArray(object)) {
    keys = range(object.length)
  }

  if (!keys) {
    return paths
  }

  keys.forEach(key => {
    const pathWithKey = [].concat(previousPath).concat(key)
    paths.push(pathWithKey)
    _allPaths(object[key], pathWithKey, paths)
  })
  return paths
}

/**
 * Given an object returns list of all possible paths in it
 *
 * @example allPaths({foo: {bar: 42}})
 * // [['foo'], ['foo', 'bar']]
 * @param {*} object Object or Array
 */
function allPaths (object) {
  return _allPaths(object)
}

module.exports = allPaths
