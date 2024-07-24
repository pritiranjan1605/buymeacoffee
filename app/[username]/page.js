
"use client"
import React,{useEffect} from "react";
import { useSession,signIn,signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Paymentpage from "@/components/paymentpage";
const Username = ({ params }) => {

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div className="container m-auto mt-40 w-full flex justify-center items-center"><lord-icon
    src="https://cdn.lordicon.com/cjbuodml.json"
    trigger="loop"
    stroke="bold"
    colors="primary:#ffffff,secondary:#9cf4df"
    style={{width:"250px",height:"250px"}}>
</lord-icon></div>;
  }

  if (!session) {
    return null;
  }


  return (
    <>
      <Paymentpage username={params.username}/>
    </>
  );
};

export default Username;
