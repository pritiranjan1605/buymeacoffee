"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession,signIn,signOut } from 'next-auth/react'
import Dashboardd from '@/components/Dashboard'
const Dashboard=()=>{
  const {data:session} = useSession()
  // if(!session){
  //   const router = useRouter()
  //   router.push('/login')
  // }
  return (
  
      <Dashboardd/>
    
  )
}

export default Dashboard
