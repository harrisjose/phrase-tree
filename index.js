var flatten = function (input) {
  return input.split('').filter(function (n) {
    return n !== '\n'
  }).join('').replace(/\s\s+/g, ' ').trim()
}

function Node (tag, text, children) {
  this.tag = tag || ''
  this.text = text || ''
  this.children = children || []
  this.size = function () {
    var temp = tag.length + text.length + 2
    if (this.children.length !== 0) {
      for (var i = 0; i < this.children.length; i++) {
        temp += this.children[i].size() + 1
      }
      temp += this.children.length - 1
    }
    return temp
  }
}

function treeify (ptree, start) {
  start = start || 0
  var tpos = start + 1
  while (ptree[tpos] !== ' ') {
    tpos++
  }
  var tag = ptree.slice(start + 1, tpos)
  var text = ''
  var children = []
  if (ptree[tpos + 1] !== '(') {
    var dpos = tpos + 1
    while (ptree[dpos] !== ')') {
      dpos++
    }
    text = ptree.slice(tpos + 1, dpos)
    // console.log('slice :' + ptree.slice(start, dpos + 1))
    return new Node(tag, text, children)
  } else {
    var pos = tpos + 1
    while (ptree[pos] !== ')') {
      var cnode = treeify(ptree, pos)
      pos += cnode.size() + 1
      if (ptree[pos] === ' ') {
        pos += 1
      }
      children.push(cnode)
    // console.log('slice :' + ptree.slice(pos, pos + 5))
    }
    if (ptree[pos + 1] === ' ') {
      pos += 2
    }
    // console.log('slice :' + ptree.slice(start, pos ))
    return new Node(tag, text, children)
  }
}

module.exports = function (inputTree) {
  return JSON.parse(JSON.stringify(treeify(flatten(inputTree))))
}
