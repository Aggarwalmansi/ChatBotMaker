"use client"
import { AuthContext } from '@/context/auth';
import React,{useContext, useState} from 'react';

const Dashboard = ({}) => {
  const [name,setname] = useState("");
  const [context,setContext] = useState("");
  const [data,setData] = useState({
    Name: "" ,
    Context:""
  }
 
  );
  function handlename(e){
    setname(e.target.value)
  }
  function handleContext(e){
    setContext(e.target.value)
  }
  function handleData() {
    setData({Name:name,Context:context})
  }
  const globalData = useContext(AuthContext)
  console.log(globalData)
  const isLoggedIn = globalData.isLoggedIn
  if (!isLoggedIn){
    return <>Please login first</>
  }
 
  return (
    <>
    <input type='text' placeholder='chatbot name' onChange={handlename}/>
    <input type='text' placeholder='Context' onChange={handleContext}/>
    <button onClick={handleData}>Add Chatbot</button>
    <p>{data.Name}</p>
    <p>{data.Context}</p>

    </>

  )
 

}

export default Dashboard;
