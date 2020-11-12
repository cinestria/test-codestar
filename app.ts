import * as express from 'express'
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World 222333!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
export default app
