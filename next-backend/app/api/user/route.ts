//next route for user

import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


export function GET(){
    //logic

    return Response.json({
        name:"Pratyush",
        email:"pratyushsinha@gmail.com"
    })
}

export async function POST(req: NextRequest){
   //extract the body 

   const body= await req.json();

   //store the body in database
    await client.user.create({
         data:{
              username:body.name,
              password:body.password
            }
    })
   

   //return the response
    return Response.json({
         message:"User created"
    })
}