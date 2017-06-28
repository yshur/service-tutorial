const express = require('express'),
      app = express(),
      fairytail = require('./controllers/fairytailController'),
      port = process.env.PORT || 3000;
app.set('port',port);
app.use('/', express.static('./public'));//for API
app.use(
(req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});
/*** All routes ***/
app.get('/bookstore/getFairytailData', fairytail.getData);
//app.get('/bookstore/saveFairytailData', fairytail.saveData);
app.listen(port,
  () => {
    console.log(`listening on port ${port}`);
  });