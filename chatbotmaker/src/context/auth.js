// we are telling next js that we only want your react 
"use client"

import { isUserLoggedIn } from "@/helpers/auth";

// islogedin state 
const { useState,createContext, useEffect } = require("react");

export const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    
    useEffect(()=>{
        setIsLoggedIn(isUserLoggedIn())
    },[])

    return (

    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}} >
        {children}
    </AuthContext.Provider>

    );

}
export default AuthProvider;