
const express =require('express')
const app = express();

app.get('/', (req, res)  => req.json({messgae:'hello my name is vaibhav'}))

app.listen(process.env.PORT  || 8000, ()  => console.log('Server Started')); 


