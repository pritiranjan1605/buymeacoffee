"use server"
import Razorpay from "razorpay"
import payment from "@/models/payment"
import user from "@/models/user"
import connectdb from "@/db/connectdb"

const convertToPlainObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
export const initiate = async (amount,to_username,paymentform)=>{
    await connectdb()
    var instance  = new Razorpay({key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET})

    instance.orders.create({
        amount: 50000,
        currency: "IBR",
        receipt: "receipt#1",
        notes:{
            key1:"value1",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR"
    }
    let x= await instance.orders.create(options)


    // creating a payment object to display the pending payment

    await payment.create({oid:x.id,amount: amount,to_user: to_username,name: paymentform.name, message: paymentform.message })

    return x
}

export const fetchuser = async(username)=>{
    await connectdb()
    let u  = await user.findOne({username: username})
    let users = u.toObject({flattenObjectIds:true})
    console.log(users)
    return users
}
export const fetchpayments = async(username)=>{
    await connectdb()
    let pays  = await payment.find({to_user: username}).sort({amount: -1}).lean()
    
    // let p = pays.toObject({flattenObjectIds:true})
    let payments = convertToPlainObject(pays); // Convert to plain objects

    console.log(payments);
    return pays
}

