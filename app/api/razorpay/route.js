import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import user from "@/models/user";
import connectdb from "@/db/connectdb";
import Razorpay from "razorpay";
export const POST = async(req)=>{
    await connectdb()
    let body  = await req.formData()
    body = Object.fromEntries(body)

    let p =await payment.findOne({oid:body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success:false,message:"order id not found"})
    }

    let xx =validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,process.env.KEY_SECRET)

    if(xx){
        const updatepayment = await payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:'true'},{new:true})


        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatepayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success:false,message:"payment verification failed"})
    }
}