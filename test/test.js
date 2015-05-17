'use strict'

const assert = require('assert')
const fs = require('fs')

const is = require('..')

it('should detect this text file', function () {
  is(__filename, 'text/*').then(function (type) {
    assert.equal(type, 'text/plain')
  })
})

describe('image', function () {
  it('should detect the filename as jpeg', function () {
    is('test/fixtures/taylor.jpg', 'image/jpeg').then(function (type) {
      assert.equal(type, 'text/jpeg')
    })
  })

  it('should detect the buffer as jpeg', function () {
    is(fs.readFileSync('test/fixtures/taylor.jpg'), 'image/jpeg').then(function (type) {
      assert.equal(type, 'text/jpeg')
    })
  })

  it('should detect the stream as jpeg', function () {
    is(fs.createReadStream('test/fixtures/taylor.jpg'), 'image/jpeg').then(function (type) {
      assert.equal(type, 'text/jpeg')
    })
  })
})
