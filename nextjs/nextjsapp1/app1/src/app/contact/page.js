"use client";
import style from "./contact.module.css";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import conimg from"../../../public/images/conimg.png"
export default function contactus({ params }) {
  console.log(params);
  const [loading, setLoading] = useState(true); // this loading is for ssr loading
  // for csr like fetch requests we have to make some custom loadings
  // like if fetch request is in process we will make it true else false ;

  // regarding userdata for upload-----------------------
  const [name, setname] = useState(null);
  // const [sellername, setsellername] = useState(null);
  const [company, setcompany] = useState(null);
  const [location, setlocation] = useState(null);
  const [email, setemail] = useState(null);
  const [querry, setquerry] = useState(null);
  const [clicks, setupclicks] = useState(0);

  async function load() {
    if (
      name == null ||
      company == null ||
      email == null ||
      location == null ||
      querry == null
    ) {
      alert("fill all data");
    } else {
      console.warn(
        "==========" +
          name +
          " " +
          company +
          " " +
          email +
          " " +
          location +
          " " +
          querry
      );
      try {
        const resp = await fetch("http://localhost:4000/queries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name,
            company: company,
            email: email,
            location: location,
            querry: querry,
          }),
        });
        const respData = await resp.json();
        console.warn(respData.message + "........................");
        if (respData.message === "query not added") {
          alert("query not added");
          setname(null);
          setcompany(null);
          setemail(null);
          setlocation(null);
          setquerry(null);
        } else if (respData.message === "query sent") {
          alert("query sent");

          setname(null);
          setcompany(null);
          setemail(null);
          setlocation(null);
          setquerry(null);
          setTimeout(() => {
            setupclicks(clicks + 1);
          }, 2000);
        } else if (respData.message === "failed to push query") {
          alert("internal server error");
        }
      } catch (error) {
        console.error("Error in uploading :", error);
        alert(error);
      }
    }
  }

  function resett() {
    document.getElementById("outlined-basic-1").value = "";
    document.getElementById("outlined-basic-2").value = "";
    document.getElementById("outlined-basic-3").value = "";
    document.getElementById("outlined-basic-4").value = "";
    document.getElementById("outlined-basic-5").value = "";
  }

  return (
    <div className="main">
      <div className={style.datajimain}>
        <div className={style.lefteside}>
          <center>
            <div className={style.abt}>
              <h1 className={style.head}>Contact Address</h1>
              <div className={style.line}></div>
              <p className={style.abtteam}>
                Address: Edmonton, Alberta, T5J 2S9<br></br>
                <br></br>
                Email Id: info@farmerlegacybiotech.com<br></br>
                <br></br>
                Phone: 2508916663<br></br>
                <br></br>
                <Image src={conimg} className={style.conimg}>

                </Image>
              </p>
            </div>
          </center>
        </div>
        <div className={style.rightside}>
          <div className={style.inn}>
            <style jsx>
              {`
                h1 {
                  text-align: center;
                  color: white;
                }
              `}
            </style>
            <h1 className={style.genq}>Generate querry</h1>
            <TextField
              className={style.muit1}
              idd="1"
              id="outlined-basic-1"
              label="Name"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& label.Mui-focused": {
                    color: "white", // Change label color on focus
                  },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
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
              onChange={(e) => setname(e.target.value)}
            />

            <TextField
              className={style.muit1}
              idd="2"
              id="outlined-basic-2"
              label="Company"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& label.Mui-focused": {
                    color: "white", // Change label color on focus
                  },
                
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
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
              onChange={(e) => setcompany(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-3"
              label="Location"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& label.Mui-focused": {
                    color: "white", // Change label color on focus
                  },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
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
              onChange={(e) => setlocation(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-4"
              label="E-mail"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& label.Mui-focused": {
                    color: "white", // Change label color on focus
                  },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
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
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-5"
              label="Querry"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& label.Mui-focused": {
                    color: "white", // Change label color on focus
                  },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
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
              onChange={(e) => setquerry(e.target.value)}
            />
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" onClick={load}>
                Generate
              </button>
            </div>
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" onClick={resett}>
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
