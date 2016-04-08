# Phrase Tree

Converts the penn tagged phrase structure tree from the Stanford parser to a regular Javascript object tree.

# Install
```bash
npm install phrase-tree
```
# Usage
```javascript
// inputFromParser =
//  (S
//    (NP (DT The) (NN boy))
//    (VP (VBD saw)
//      (NP (DT a) (NN dog)))))

var convert = require('phrase-tree')
var tree = convert(inputFromParser)

console.log(JSON.stringify(tree, null, 2))
//{
//  "tag": "S",
//  "tex": "",
//  "children": [
//    {
//      "tag": "NP",
//      "tex": "",
//      "children": [
//        {
//          "tag": "DT",
//          "tex": "The",
//          "children": []
//        },
//        {
//          "tag": "NN",
//          "tex": "boy",
//          "children": []
//        }
//      ]
//    },
//    {
//      "tag": "VP",
//      "tex": "",
//      "children": [
//        {
//          "tag": "VBD",
//          "tex": "saw",
//          "children": []
//        },
//        {
//          "tag": "NP",
//          "tex": "",
//          "children": [
//            {
//              "tag": "DT",
//              "tex": "a",
//              "children": []
//            },
//            {
//              "tag": "NN",
//              "tex": "dog",
//              "children": []
//            }
//          ]
//        }
//      ]
//    }
//  ]
//}
```

# License
MIT © [Harris Jose](http://harrisjose.github.io/)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)