
const Opportunity = require('../model/Opportunity')


exports.getopportunity = async (req,res)=>{
    try {
        const data = await Opportunity.find()
        return res.json({errors:false,data:data})
    } catch (error) {
     return res.status(400).json({errors:true,message:error.message})   
    }
}

exports.postopportunity = async (req,res)=>{
    try {
        const data = await Opportunity.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
     return res.status(400).json({errors:true,message:error.message})   
    }
}

exports.putopportunity = async (req,res)=>{
    try {
        const data = await Opportunity.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
     return res.status(400).json({errors:true,message:error.message})   
    }
}

exports.deleteopportunity = async (req,res)=>{
    try {
        const data = await Opportunity.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
     return res.status(400).json({errors:true,message:error.message})   
    }
}