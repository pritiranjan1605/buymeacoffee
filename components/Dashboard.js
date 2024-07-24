"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Dashboardd = () => {
  const [form, setform] = useState({});

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
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

  const handleonchange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-center my-5 text-3xl font-bold">
        Welcome {session.user.name}
      </h1>

      <form className="max-w-2xl mx-auto" action="">
        {/* importing for name */}
        <div className="my-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>

          <input
            value={form.name ? form.name : ""}
            onChange={handleonchange}
            type="text"
            name="name"
            id="name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        {/* importing for email */}
        <div className="my-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>

          <input
            value={form.email ? form.email : ""}
            onChange={handleonchange}
            type="email"
            name="email"
            id="email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        {/* importing for username*/}
        <div className="my-2">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>

          <input
            value={form.username ? form.username : ""}
            onChange={handleonchange}
            type="text"
            name="username"
            id="username"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        {/* importing for profile picture link */}
        <div className="my-2">
          <label
            htmlFor="profile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Picture
          </label>

          <input
            value={form.profile ? form.profile : ""}
            onChange={handleonchange}
            type="text"
            name="profile"
            id="profile"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        {/* importing for cover pic */}
        <div className="my-2">
          <label
            htmlFor="cover"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cover Picture
          </label>

          <input
            value={form.cover ? form.cover : ""}
            onChange={handleonchange}
            type="text"
            name="cover"
            id="cover"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        {/* importing for razorpay id */}
        <div className="my-2">
          <label
            htmlFor="razorpayid"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Razorpay Id
          </label>

          <input
            value={form.razorpayid ? form.razorpayid : ""}
            onChange={handleonchange}
            type="text"
            name="razorpayid"
            id="razorpayid"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        {/* importing for razorpay secret */}
        <div className="my-2">
          <label
            htmlFor="razorpaysecret"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Razorpay secret
          </label>

          <input
            value={form.razorpaysecret ? form.razorpaysecret : ""}
            onChange={handleonchange}
            type="text"
            name="razorpaysecret"
            id="razorpaysecret"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>

        <div className="my-6">
          <button
            type="Submit"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboardd;
