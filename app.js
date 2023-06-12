const solution = require('./route/solution_route')
const studentinfo = require('./route/student_route')
const tieupcompany = require('./route/tieupcompany_router')
const Vendor = require('./route/vendor_Route')
const JobOpportunity = require('./route/opportunity_route')
const daliytask =  require('./route/daliyTask_route')
const categories =require('./route/categories_route')
const questionBank = require('./route/questioBank_route')
require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

//middleware
app.use(express.json())
app.use(cors())

// default route
app.get('/',(req,res)=>{
    res.send("this is home page")
})

// main route
app.use('/api/questionBank',questionBank)

app.use('/api/categories',categories)

app.use('/api/daliytask',daliytask)

app.use('/api/jobOpportunity',JobOpportunity)

app.use('/api/vendor',Vendor)

app.use('/api/tieupcompany',tieupcompany)

app.use('/api/student',studentinfo)

app.use('/api/solution',solution)

app.listen(process.env.PORT,()=>{
    console.log("listing on port 5000");
})

async function main(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

main()