

const Daliytask = require('../model/daliyTask')

exports.getdaliytask = async (req,res)=>{
    try {
        const data = await Daliytask.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postdaliytask = async (req,res)=>{
    try {
        const data = await Daliytask.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putdaliytask  = async (req,res)=>{
    try {
        const data = await Daliytask.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.deletedaliytask  = async (req,res)=>{
    try {
        const data = await Daliytask.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

