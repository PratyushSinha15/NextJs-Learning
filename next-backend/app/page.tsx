//to make it a server side rendered page, we need to use getServerSideProps
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

async function getUserDetails() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}


export default async function Home() {

  const user= await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {user.name}
                </div>
                
                  Email: {user.email}
            </div>
        </div>
    </div>
  );

}

