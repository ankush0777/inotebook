const connectToMongo=require('./db');
const express = require('express')
const path=require('path');
var cors=require('cors')
connectToMongo();
const app = express()
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`iNotebook backend app listening on port ${port}`)
})
