"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);
  const router = useRouter();

  

  const handleDashboardRedirect = () => {
    console.log("Redirecting to /dashboard");
    router.push("/dashboard");
  };

  return (
    <div>
      <nav className="bg-gray-900 text-white flex justify-between h-16 items-center px-4">
        {/* <div className='logo font-bold text-lg'>Navbar</div> */}
        <Link href="/">
          <span className="flex justify-center items-center logo font-bold text-lg gap-3 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/kcoawjon.json"
              trigger="loop"
              delay="1000"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
            BuyMeaCoffee
          </span>
        </Link>

        <div className="relative">
          
          {session && (
            <>
              <button
              disabled
                
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className=" bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2 "
                type="button" 
              >
                Welcome {session.user.name}
                
              </button>

              
            </>
          )}
          {session && (
            <Link href="/dashboard">
              <button 
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                DashBoard
              </button>
            </Link>
          )}

{session && (
            <Link href={`/${session.user.name}`}>
              <button 
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Your Page
              </button>
            </Link>
          )}
          
          {session && (
            <Link href="/">
              <button onClick={()=>{
                signOut()
              }}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                LogOut
              </button>
            </Link>
          )}

          {!session && (
            <Link href="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                LogIn
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
