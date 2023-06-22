const mongoose = require("mongoose")

const Expenseschema = new mongoose.Schema({
    ExpenseName:{type:String,default:""},
    ExpenseAmount:{type:String,default:""},
    PredictedAmount:{type:String,default:""},
    IsPaid:{type:String,default:""},
    Count:{type:String,default:""}
})

module.exports= mongoose.model("expense",Expenseschema)                                                                                                    