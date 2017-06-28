const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      fairytail = new schema({
        name: {type:String, index:1, required:true, unique:true},
        likes: Number,
      }, {strict: true});
// console.log(`required paths: ${fairytail.requiredPaths()}`);
// console.log(`indexes: ${JSON.stringify(fairytail.indexes())}`);

//validate
fairytail.path('likes').validate(
  (val) => {
    console.log(`\nvalidating ${val})`);
    let iVal = Number(val);
    return iVal >= 0;
  }, "can't have a negative amount");



//connect schema to MODEL (MVC) on default conn:
var Fairytail = mongoose.model('Fairytail', fairytail);

module.exports = Fairytail;