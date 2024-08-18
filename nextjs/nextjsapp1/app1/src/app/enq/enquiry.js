"use client";
import { useState } from "react";
import hidbeforloginsign from "../privatecomponentviaHOC/privcomphoc";
import cardimg from "../../../public/images/cardimg.jpg";
import Image from "next/image";
import TextField from "@mui/material/TextField";

//import like down here when ---------x
// import {hidbeforloginsign} from "../privatecomponentviaHOC/privcomphoc";
//---------x exported like down here in file - /privatecomponentviaHOC/privcomphoc
// const x=function(){
//   console.log("x")
// }
// export {hidbeforloginsign,x}

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import leadership from "../../../public/images/leadership.png"
import empathy from "../../../public/images/Empathy.webp"
import ard from "../../../public/images/ard.webp"
import pers from "../../../public/images/pers.webp"
import Link from "next/link";
import "./enq.css";

const Enquiry = () => {


  
  // }, []);
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



    function formtoggle(){
        const enqyirybtn = document.querySelector('.enqbutton');
        const form = document.querySelector('.sideform-enc');
        
        if (enqyirybtn && form) {
          console.log('enqyirybtn and  form found');
          enqyirybtn.addEventListener('click', () => {
            console.log('enqyirybtn clicked');
            form.classList.toggle('sideformappear');
          });
        } else {
          console.log('enqyirybtn or form not found');
        }
      }
    const router = useRouter();
    return(
        <div >
            <div className="sideform-enc">
                <div className="sideform">
                <h3> Enquiry </h3>
                <div className="form">
                    <TextField
                    className="muit1"
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
                    className="muit1"
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
                    className="muit1"
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
                    className="muit1"
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
                    className="muit1"
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
                </div>
                <div className="btns">
                    <div>
                    <button style={{backgroundColor:"rgb(66,66,66)" , color :"white"}} onClick={load}>Post</button>
                    </div>
                    <div>
                    <button  style={{backgroundColor:"rgb(66,66,66)" , color :"white"}} onClick={resett}>Reset</button>
                    </div>
                </div>
                </div>
                <div className="enqbutton">
                <button
                
                    className="slide-btn"
                    onClick={() => {
                    formtoggle();
                    }}
                >
                    Enquiry
                </button>
                </div>
            </div>
        </div> 
    )
}  
export default Enquiry;
















 