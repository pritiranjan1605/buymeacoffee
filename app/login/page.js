// "use client";
// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// export default function Login() {
//     const {data:session} = useSession()
//     // if(session){
//     //     const router = useRouter()
//     //     router.push('/dashboard')
//     // }
//   return (
//     <div className="text-white text-center py-14">
//       <h1 className="font-bold text-3xl">
//         Login/Signup to Get Your fans to support you
//       </h1>
//       <div className=" container m-auto  mt-7 flex flex-col justify-center items-center gap-2">
//         <button
//         style={{width:"240px"}}
//           onClick={() => {
//             signIn("github");
//           }}
//           className="inline-flex  h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
//         >
//           <img
//             src="https://www.svgrepo.com/show/512317/github-142.svg"
//             alt="GitHub"
//             className="h-[18px] w-[18px] "
//           />
//           Continue with GitHub
//         </button>

//         <button style={{width:"240px"}} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
//           <img
//             src="https://www.svgrepo.com/show/475656/google-color.svg"
//             alt="Google"
//             className="h-[18px] w-[18px] "
//           />
//           Continue with Google
//         </button>

//         <button style={{width:"240px"}} className="inline-flex h-10  items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
//           <img
//             src="https://www.svgrepo.com/show/448234/linkedin.svg"
//             alt="Google"
//             className="h-[18px] w-[18px] "
//           />
//           Continue with LinkedIn
//         </button>
//       </div>
//     </div>
//   );
// }
"use client"

import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  if (status === "loading") {
    return <div className="container m-auto mt-40 w-full flex justify-center items-center"><lord-icon
    src="https://cdn.lordicon.com/cjbuodml.json"
    trigger="loop"
    stroke="bold"
    colors="primary:#ffffff,secondary:#9cf4df"
    style={{width:"250px",height:"250px"}}>
</lord-icon></div>;
  }

  return (
    <div className="text-white text-center py-14">
      <h1 className="font-bold text-3xl">
        Login/Signup to Get Your fans to support you
      </h1>
      <div className="container m-auto mt-7 flex flex-col justify-center items-center gap-2">
        <button
          style={{ width: "240px" }}
          onClick={() => signIn("github")}
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="GitHub"
            className="h-[18px] w-[18px]"
          />
          Continue with GitHub
        </button>

        <button
          style={{ width: "240px" }}
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-[18px] w-[18px]"
          />
          Continue with Google
        </button>

        <button
          style={{ width: "240px" }}
          className="inline-flex h-10 items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/448234/linkedin.svg"
            alt="LinkedIn"
            className="h-[18px] w-[18px]"
          />
          Continue with LinkedIn
        </button>
      </div>
    </div>
  );
}
