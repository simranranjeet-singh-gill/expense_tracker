const data = require('../model/usermodule')

const addDetail = async(req,res)=>{
    let ExpenseName = req.body.ExpenseName                                
    let ExpenseAmount = req.body.ExpenseAmount
    let PredictedAmount= req.body.PredictedAmount
    let IsPaid= req.body.IsPaid
    let Count = await data.countDocuments()

    const newdata = new data()
    newdata.ExpenseName = ExpenseName
    newdata.ExpenseAmount = ExpenseAmount
    newdata.PredictedAmount = PredictedAmount
    newdata.IsPaid = IsPaid
    newdata.Count = Count
    newdata.save()
.then(()=>{
    console.log("data entered succcessfully")
    res.json({
        successs:true,
        message: newdata,
        
    })
}).catch(()=>{
    console.log("not send data")

    res.json({
        status:200,
        successs:true,
        message: "not updated"
    })
})
}
module.exports=addDetail