var convert = require('../index')
var fs = require('fs')
var assert = require('assert')

describe('Test with phrase tree from ip1.txt', function () {
  it('Should return text in op1.txt', function () {
    var ptree = fs.readFileSync('./test/ip1.txt', 'utf8')
    var jstree = JSON.stringify(convert(ptree))
    var testop = fs.readFileSync('./test/op1.txt', 'utf8')
    assert.strictEqual(testop, jstree, 'Does not match')
  })
})
