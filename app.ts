import * as express from 'express'
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World 2223335555!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
export default app
