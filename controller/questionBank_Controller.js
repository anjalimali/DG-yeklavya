
const Question = require('../model/questionBank')

exports.getquestionbank = async (req,res)=>{
    try {
        const data = await Question.find().populate('questiontype')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postquestionbank = async (req,res)=>{
    try {
        const data = await Question.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putquestionbank = async (req,res)=>{
    try {
        const data = await Question.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deletequestionbank = async (req,res)=>{
    try {
        const data = await Question.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
