require('dotenv').config();

const express = require('express')
const mongoInterface = require('mongoose');
const app = express();

const eventRouter = require('./router/event-router');
const userRouter = require('./router/user-router');

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

//routes
app.use('/api/events', eventRouter);
app.use('/api/user', userRouter);

mongoInterface.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & Listening on PORT ${process.env.PORT}`)
        });
    })
    .catch((error)=> {
        console.log(error);
    });
