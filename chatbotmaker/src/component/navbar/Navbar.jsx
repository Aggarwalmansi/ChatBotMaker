"use client"
import Link from "next/link";
import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "@/context/auth";


const Navbar = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);

    return (
      <>
      <div className="nav">
      
        <Link  href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Dashboard</Link>
        <button>Logout</button>
      
      </div>
      </>
       
    )
  }
  
export default Navbar;
