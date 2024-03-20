require('dotenv');
const router = require('express').Router();
router.get('/',(req,res)=>{
    res.json({
        message:"Hello World!"
    });
})

router.get('/test',(req,res)=>{
    res.json({
        message:`Hello ${process.env.shared.DB_PASS} ${process.env.DB_PASSWORD}`
    });
})


const postRoute = require('./post')
const userRoute = require('./users')

router.use('/post',postRoute);
router.use('/users',userRoute)

module.exports = router;