'use strict'

const toArray = require('stream-to-array')
const typeis = require('type-is').is
const assert = require('assert')
const mmm = require('mmmagic')

const magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE)

module.exports = fileis

function fileis(input, types) {
  if (!Array.isArray(types)) types = [].slice.call(arguments, 1)
  assert(types.length, 'You must supply at least 1 type.')
  for (let type of types) assert(typeof type === 'string', 'Each type must be a string')

  if (typeof input === 'string') {
    return new Promise(function (resolve, reject) {
      magic.detectFile(input, function (err, result) {
        if (err) return reject(err)
        if (!result) return resolve(false)
        resolve(typeis(result, types))
      })
    })
  }

  assert(input, 'Input required.')
  assert(Buffer.isBuffer(input) || input._readableState, 'Input must either be a string, buffer, or stream.')

  return Promise.resolve(Buffer.isBuffer(input)
    ? input
    : toArray(input).then(Buffer.concat))
  .then(function (buf) {
    return new Promise(function (resolve, reject) {
      magic.detect(buf, function (err, result) {
        if (err) return reject(err)
        if (!result) return resolve(false)
        resolve(typeis(result, types))
      })
    })
  })
}
