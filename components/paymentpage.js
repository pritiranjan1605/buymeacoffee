"use client";
import React, { useState,useEffect } from "react";
import Script from "next/script";
import { fetchpayments, fetchuser, initiate } from "@/action/useractions";
import { useSession } from "next-auth/react";
const Paymentpage = ({ username }) => {
  const { data: session } = useSession();
  const [paymentform, setpaymentform] = useState({});
  const [currentuser, setcurrentuser] = useState({})
  const [payments, setpayments] = useState([])
  const [sumtotal, setsumtotal] = useState(0)

  useEffect(() => {
    getdata()
  },[])

  const getdata= async()=>{
      let u = await  fetchuser(username)
      setcurrentuser(u)
      let dbpayments = await fetchpayments(username)
      if (dbpayments && !Array.isArray(dbpayments)) {
        dbpayments = [dbpayments];
      }
      setpayments(dbpayments)
      console.log(u,dbpayments)
      
      
  }

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform);
    let orderid = a.id;
    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID, 
      amount: amount, 
      currency: "INR",
      name: "Buy Me A Coffee",
      description: "Test Transaction",
      image: "/logo.jpeg",
      order_id: orderid, 
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        
        name: "Gaurav Kumar", 
        email: "gaurav.kumar@example.com",
        contact: "8117977360", 
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover w-full  relative ">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=SQw2vomQ_P7OcANpjfmkdMsk0Sc5NO4pzBSNrywRYOM%3D"
          alt=""
        />
        <div className="absolute -bottom-12 right-[46%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={100}
            height={100}
            src="https://imgs.search.brave.com/IG2C7gLft6NshaMGTGTmzs-EGUyb9_7xAuSQ_UKSt0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWVs/bG93LWJlbHVnYS1j/YXQtdzVtOXNic252/NHQ0b3Nqci5qcGc"
            alt=""
          />
        </div>
      </div>
      <div className="container m-auto mt-16 text-white flex flex-col justify-center items-center">
        <div>@{username}</div>
        <div className="text-slate-400">
          Lorem ipsum, dolor sit amet consectetur
        </div>
        <div className="text-slate-400 text-sm">
          9,719 members . 82 posts . $15,450/release
        </div>
        <div className="payments flex gap-3 w-[80%] text-black mt-11 mb-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-14 flex justify-center items-center flex-col gap-3">
            <h1 className="text-2xl font-bold flex justify-center items-center">Supporters<img src="/fans.gif" alt="" srcset="" style={{width:"60px", height:"60px"}}/></h1>
            
            
            <ul className="mx-5 my-6 flex flex-col gap-1 items-center max-h-60 overflow-y-auto custom-scrollbar" style={{
    border: "2px solid darkslategray",
    padding: "57px",
    height: "231px",
    borderRadius: "15px",
    paddingTop: "15px"
}}>
            {Array.isArray(payments) && payments.length > 0 ? (
                payments.map((p, i) => (
                  <li key={i} className="my-2 flex gap-4 justify-center items-center text-white" >
                    <div className="gap-2" style={{display:"flex",justifyContent:"flex-start",alignItems:"center",width:"345px"}}>
                    <img src="/avatar.gif" alt="" className="w-[30px] h-[30px]" />
                    <div style={{width:"312px"}}>{p.name} donated ₹{p.amount} with a message "{p.message}"</div>
                    </div>
                  </li>
                ))
              ) : (
                <li className='text-white'>No payments found</li>
              )}
              
              
            </ul>
          </div>
          <div className="makepayment w-1/2  bg-slate-900 rounded-lg text-white p-14">
            <h2 className="text-2xl font-bold my-5 flex justify-center items-center gap-3">Make a Payment 
<lord-icon
    src="https://cdn.lordicon.com/noobabzt.json"
    trigger="loop"
    delay="2000"
    colors="primary:#9cf4a7,secondary:#d1f3fa,tertiary:#9cf4df"
    style={{width:"60px",height:"60px"}}
    >
</lord-icon></h2>
            <div className="flex flex-col gap-2">
              <input
                onChange={handlechange}
                value={paymentform.name}
                type="text"
                name="name"
                id=""
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                onChange={handlechange}
                value={paymentform.message}
                type="text"
                name="message"
                id=""
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                onChange={handlechange}
                value={paymentform.amount}
                type="text"
                name="amount"
                id=""
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button onClick={()=>{pay(paymentform.amount)}}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Pay Now
              </button>
            </div>
            {/* {or choose from these amounts} */}
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentpage;
