import mongoose from "mongoose"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Payment from "@/models/payment"
import User from "@/models/user"
import connectdb from "@/db/connectdb"

connectdb();
export const authOptions = NextAuth({
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
    callbacks:{
      async signIn({user,account,profile,email,credentials}){
        if(account.provider=="github"){
          

          const currentuser = await User.findOne({email: email})
          if(!currentuser){
            const newuser  = new User({
              email: user.email,
              prfilepic: user.image,
              username: user.name
              
            })
            await newuser.save()
            
          }
          
          return true
        }
        return false
      },
        
      async session({session,user,token}){
            const dbuser = await User.findOne({email: session.user.email})
            if (dbuser) {
              session.user.name = dbuser.username;
              session.user.id = dbuser._id;
              session.user.profilepic = dbuser.profilepic;
            }
            return session
      }
    }
  })

export {authOptions as GET , authOptions as POST}