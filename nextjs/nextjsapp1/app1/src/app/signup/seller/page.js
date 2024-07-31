'use client'
import { useEffect, useState } from "react";
//import styles from "./page.module.css";
import { redirect, useRouter } from "next/navigation";
import CircularIndeterminate from "@/app/loading";




const signStudent=()=>{

  
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  let user =null;

  useEffect(() => {
    if (typeof window === 'undefined') {
    
    }else{
      user = localStorage.getItem("user");
      if (user) {
        setSession(JSON.parse(user));
      }
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    
    if (user) {
    redirect("/");
    }
  },[]);


  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [age,setAge]=useState("");
  const [masterkey,setMasterKey]=useState("");

const dosign = async()=>{
  // const router = useRouter();
  console.warn(username,password,age);

  if(username=="" || password=="" || age=="" || masterkey==""){
    alert("filll")
  }else{
      let signinresp=await fetch("http://localhost:4000/seller/signup" ,{
      method: 'post',
      body: JSON.stringify({username,password,age,masterkey}),
      headers:{
        'Content-Type':'application/json'
      }
      })
      signinresp = await signinresp.json()
      console.warn("---" + JSON.stringify(signinresp));
      console.warn("+++"+signinresp.message)
      console.warn("tyqwerytqweytwqetqwyeqt"+signinresp.id)
      if (signinresp.message === "invalid masterkey") {
        console.warn(signinresp.message)
        alert("Invalid master key");
      } else if (signinresp.id) {
        console.warn(signinresp.message+"909009")
        console.warn(signinresp.id+"----")
        localStorage.setItem("user",  JSON.stringify(signinresp));
        router.push(`../dataAfterSignupAndLogin/sellerdataafterSignedOrLoggedin/${signinresp.id}`);
      } else if(signinresp.message === "seller created"){
        console.warn(signinresp.message)
        alert("seller created")
      }
      else {
        console.log("[[[[[[[[["+signinresp.message)
        alert("Seller already exists");
      }
    }
  };
//

const router=useRouter();
if (loading) {
  return <CircularIndeterminate />;  // Display the loading component while loading
}

  return (
    <main className="mainuser">
      <div className="div1mainuser">
          <div className="div2mainuser">
              <div>
                    <h1 className="logininfo"> SignUp as Admin </h1>
              </div>
              
                <br>
                </br>
                <div className="div1in2mainuser">
                  <input  defaultValue="E-mail" className="t1" id="sellerkiid" name="userkiid" onChange={(text)=>setUsername(text.target.value)} >
                      
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="Password"className="t1" id="userpass" name="userkapassword" onChange={(text)=>setPassword(text.target.value)}>
                          
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="age"className="t1" id="userage" name="userkiage" onChange={(text)=>setAge(text.target.value)}>
                          
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="Master Key"className="t1" id="sellermasterkey" name="masterkikey" onChange={(text)=>setMasterKey(text.target.value)}>
                          
                      </input>
                </div>
                
                <br>
                </br>
          </div>
          
          <div className="bttndiv">
                  <button className="bton" onClick={()=>dosign()}>
                      signup
                  </button>
                  <button className="bton" onClick={()=>router.push("/")}>
                      Back
                  </button>
          </div>
      </div>


    </main>
  );
}

export default signStudent;