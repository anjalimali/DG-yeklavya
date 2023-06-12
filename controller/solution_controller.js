

const Solution = require('../model/solution')

exports.getsolution = async (req,res)=>{
    try {
        const data = await Solution.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postsolution = async (req,res)=>{
    try {
        const data = await Solution.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putsolution  = async (req,res)=>{
    try {
        const data = await Solution.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.deletesolution  = async (req,res)=>{
    try {
        const data = await Solution.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

