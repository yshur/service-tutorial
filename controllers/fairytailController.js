const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var FT = require('../models/fairytail');

// console.log("db connection object can be used" + conn);

//for route /bookstore/getFairytailData
exports.getData = function(req, res) {
  FT.find({},
    (err, docs) => {
      if(err) console.log(`query error: ${err}`);
      console.log(docs);
      res.json(docs);
      return;
    });
}