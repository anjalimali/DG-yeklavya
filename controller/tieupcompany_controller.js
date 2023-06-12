

const tieupcompany= require('../model/tieupcompany')

exports.gettieupcompany = async (req,res)=>{
    try {
        const data = await tieupcompany.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.posttieupcompany = async (req,res)=>{
    try {
        const data = await tieupcompany.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.puttieupcompany  = async (req,res)=>{
    try {
        const data = await tieupcompany.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.deletetieupcompany  = async (req,res)=>{
    try {
        const data = await tieupcompany.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

