"use client";
import { useEffect, useState } from "react";
//import styles from "./page.module.css";
import { redirect, useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";

const loginSeller = () => {
  useEffect(() => {
    let session = localStorage.getItem("user");
    if (session) {
      redirect("/");
    }
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dologin = async () => {
    console.warn(username, password);
    let loginresp = await fetch("http://localhost:4000/seller/login", {
      method: "POST",
      headers: {
        username: username,
        password: password,
      },
    });
    let logindata = await loginresp.json();
    console.warn(logindata);
    if (logindata.authtoken) {
      console.warn("pushing");
      localStorage.setItem("user", JSON.stringify(logindata));
      router.push(
        `../dataAfterSignupAndLogin/sellerdataafterSignedOrLoggedin/${logindata.id}`
      );
    }
  };

  const router = useRouter();
  return (
    <main className="mainuser">
      <div className="div1mainuser">
        <div className="div2mainuser">
          <div>
            <h1 className="logininfo"> Login as Admin </h1>
          </div>

          <br></br>
          <div className="div1in2mainuser">
            {/* <input  defaultValue="E-mail" className="t2" id="sellerid" name="sellerkiid"  onChange={(text)=>setUsername(text.target.value)}>
                      
                      </input> */}
            <TextField
              className="muit1"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setUsername(e.target.value)}
            />

            <br></br>
            {/* <input  defaultValue="Password"className="t2" id="sellerpass" name="sellerkapassword" onChange={(text)=>setPassword(text.target.value)}>
                          
                      </input> */}
            <TextField
              className="muit1"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br></br>
        </div>

        <div className="bttndiv">
          <button className="bton" onClick={() => dologin()}>
            Login
          </button>
          <button className="bton" onClick={() => router.push("/")}>
            Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default loginSeller;
