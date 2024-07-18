import UserModel from "../models/UserModel.js";
import foodModel from "../models/FoodModel.js";
import OrderModel from "../models/OrderModel.js";

const dashboardShow= async (req,res)=>{
    try{
        const user=await UserModel.countDocuments();
        const food=await foodModel.countDocuments();
        const order=await OrderModel.countDocuments();
        return res.json({success:true,user,food,order})
      }catch(err){
          return res.json(err)
      }
}
export {dashboardShow};