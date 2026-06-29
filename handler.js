const express=require('express'); const {execSync}=require('child_process'); const app=express();
app.get('/run',(req,res)=>res.end(execSync('ls '+req.query.dir))); app.listen(3000);
