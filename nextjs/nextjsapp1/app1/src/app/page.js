//1
"use client";
//import hidbeforloginsign from "./privatecomponentviaHOC/privcomphoc";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import { useRouter } from "next/navigation";
import Image from "next/image";//for image optimization
import logo from '../../public/images/logo.png'
//import Loader from './loading'; 
import CircularIndeterminate from './loading';
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



export default function Home() {
  let user ={name:"unknown"}
  const router = useRouter();
   function logout() {
    localStorage.removeItem("user");
    setSession(null);
    router.push("/");
    router.refresh();  //not necessary
  }
  function signout () {
    localStorage.removeItem("user");
    setSession(null);
    router.push("/");
    router.refresh();  //not necessary
  }
  
  // const [courses, setcourses] = useState([]);
  const [token_to_dif_u_s, set_token_to_dif_u_s] = useState(null)
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // this loading is for ssr loading 
  // for csr like fetch requests we have to make some custom loadings 
  // like if fetch request is in process we will make it true else false ;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:4000/home/");
  //       if (!response.ok) {
  //         alert("Failed to fetch courses")
  //         router.push("/")
  //       }
  //       const data = await response.json();
  //       setcourses(data.courses); 
  //       // console.warn(data);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   };
    
  //     fetchData();
      
    
    
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
  // const session = localStorage.getItem("user");
  useEffect(() => {
    if (typeof window === 'undefined') {
      //if window is undefined means ssr is running and not csr, so don't access localstorage
      // and keep loading true
      ////// but due to loading we wont get the ssr loaded page (which is the advantage of Next.js's ssr)   
      ////// to get that advantage we have to remove loading logic but loading is good as ssr return generic data only if we use headers instead of cookies
      ////// but if we will use cookies in upcomming modifications we will use ssr rendered pages instaed of loading page 
    }else{
      user = localStorage.getItem("user");
      if (user) {
        setSession(JSON.parse(user)); // Assuming user is a JSON stringified object
        set_token_to_dif_u_s(JSON.parse(user).t);
        console.log(JSON.parse(user).sellerid+"nnmnmnmnmnmnmnmnmnmnmnmnmnmnmnmnnmnnm")
      }
      setLoading(false);
    }
    
  
    // explainantion

    // useEffect(() => {
    //   // effect logic
    // }, []);
    // The first argument is a function (the effect) that contains the logic you want to run.
    // The second argument is an array of dependencies. An empty array [] means the effect runs only once, after the initial render.

    // if (typeof window !== 'undefined') {
    //   // client-side logic
    // }
    // typeof window !== 'undefined' is a check to determine if the code is running in a browser environment (client-side) rather than on the server.
    // In server-side rendering (SSR) or during the initial server-side rendering in Next.js, window is not defined. This check ensures that the code inside the if block runs only on the client side.

    // const user = localStorage.getItem("user");
    // localStorage is a Web API available only in the browser.
    // localStorage.getItem("user") retrieves the value associated with the key "user" from localStorage. If there is no such key, it returns null.


    // setSession(user);
    // setSession is a state setter function returned by useState.
    // It updates the session state variable with the value retrieved from localStorage.
    // If a user is found in localStorage, session will be set to that value. Otherwise, it will be set to null.
    
  },[]);

  // if (loading) {
  //   return <Loader />;  // Display the loading component while loading
  // }


  if (loading) {
    return <CircularIndeterminate />;  // Display the loading component while loading
  }


  // console.warn(courses)





  return (
    <div>
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
                <button onClick={load}>
                    upload
                  </button>
              </div>
              <div>
              <button onClick={resett}>
                reset
              </button>
              </div>
                  
            </div>
          </div>
          <div className="enqbutton">
                <button className="slide-btn" onClick={()=>{formtoggle()}}>
                   Enquiry
                </button>
          </div>

      </div>


      <div className="main">
        <div className="nav">
          <div className="divhomemain">
            <div className="divhome2" id="inner2">
              <h2
                className="cheading"
                style={{ fontFamily: "Open Sans", color: "white" }}
              >
                {" "}
                Oilcompxyz
              </h2>
              <p
                className="cbheading"
                style={{ fontFamily: "Open Sans", color: "white" }}
              >
                {" "}
                Researh abc{" "}
              </p>
            </div>
            <ul className="ulhometop">
              <li>
                {!session ? (
                  <button
                    className="btonhome"
                    onClick={() => router.push("/login/users")}
                  >
                    login
                  </button>
                ) : (
                  <button className="btonhome" onClick={logout}>
                    logOut
                  </button>
                )}
              </li>
              <li>
                {!session ? (
                  <button
                    className="btonhome"
                    onClick={() => router.push("/signup/user")}
                  >
                    signup
                  </button>
                ) : (
                  <button className="btonhome" onClick={signout}>
                    signOut
                  </button>
                )}
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push("/about")}
                >
                  about
                </button>
              </li>

              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../products`)}
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../contact`)}
                >
                  contact us
                </button>
              </li>
              <li>
                {session ? (
                  <button
                    className="btonhomeuser"
                    onClick={() =>
                      token_to_dif_u_s == "s"
                        ? router.push(
                            `../dataAfterSignupAndLogin/sellerdataafterSignedOrLoggedin/${session.id}`
                          )
                        : router.push(
                            `../dataAfterSignupAndLogin/userdataafterSignedOrLoggedin/${session.id}`
                          )
                    }
                  >
                    {session.name}
                  </button>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="introheader">
          <div className="card">
            <p>
              FLB Introducing Brahmola for Better, Healthy and Sustainable World
            </p>
          </div>
        </div>
      </div>
      <div className="pagemain">
        <div className="middleside">
          <div className="data1">
            <Image src={logo} className="logoimg"></Image>
          </div>
          <div className="data2">
            <p>
              {" "}
              Farmer’s Legacy Biotech repurposed Canola “Brahmola” with the
              goodness of Medium Chain Fatty Acid (MCFA) will provide
              multi-functional Oil to North American Consumers Sustainably.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="roww">
          <div className="coll">
            
            </div>
          </div>

      </div>
    </div>
  );
}






































//2
//ssr
// async function fetchCourses() {
//   const response = await fetch("http://127.0.0.1:4000/courses/");
//   if (!response.ok) {
//     throw new Error('Failed to fetch courses');
//   }
//   const data = await response.json();
//   return data.courses;
// }

// export default async function CourseList() {
//   const courses = await fetchCourses();

//   return (
    
//     <div className="middleside">
//       <div className="data">
//         {courses.map((item) => (
//           <div
//             key={item.courseId}
//             className="courses"
//           >
//             <div className="courseimage">
//               <Image
//                 className="imagecourse"
//                 src={item.imglink}
//                 width={120}
//                 height={120}
//               />
//             </div>
//             <div className="coursedetails">
//               <h4 style={{ fontFamily: "nunito" }} className="h4name">
//                 Course Name: {item.name}
//               </h4>
//               <p className="p2">
//                 Course Cost:{" "}
//                 <span style={{ color: "wheat" }} className="rsspan">
//                   {item.cost} Rs
//                 </span>
//               </p>
//               <p className="p3">Seller Name: {item.sellername} </p>
//               <p className="p1" style={{ fontFamily: "Roboto" }}>
//                 Course Id: {item.courseId}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






























//3
//ssr csr mixed
// this is working completely fine as courses are loaded via server side 
//but csr rendered right side is not visibe becouse it is dependent on middelside(ssr renderd ) 
//so it is visible but bit destructured whe need redefinition of css 
// we lost click on course functionality but we can impliment it via loading csr rendered buttons 
// which will be mapped on each course with course id
// so when ever the button will be clicked we willget to the course details



// import Image from "next/image";
// // import Home from "./home";
// import dynamic from 'next/dynamic';
// const Home = dynamic(() => import('./home'), { ssr: false });



// async function fetchCourses() {
//   const response = await fetch("http://127.0.0.1:4000/courses/");
//   if (!response.ok) {
//     throw new Error('Failed to fetch courses');
//   }
//   const data = await response.json();
//   return data.courses;
// }


// export default async function CourseList() {
  
//   let courses = await fetchCourses();
//   return (
//     <div suppressHydrationWarning={true}>
//           <div className="middleside">
//           <div className="data">
            
//             {courses.map((item) => (
//               <div
//                 className="courses"
//                 // onClick={() => router.push("/coursedetail/" + item.courseId)}
//               >
//                 <div className="courseimage">
//                   {/* //one way */}
//                   {/* <img className="imagecourse" src={item.imglink}
//                                 width={100}
//                                 height={100}
                                
//                                 /> */}
//                   {/* //second way */}
//                   <Image
//                     className="imagecourse"
//                     src={item.imglink}
//                     width={120}
//                     height={120}
//                   />
//                 </div>
//                 <div className="coursedetails">
//                   <h4 style={{ fontFamily: "nunito" }} className="h4name">
//                     Course Name: {item.name}
//                   </h4>
//                   <p className="p2">
//                     Course Cost:{" "}
//                     <span style={{ color: "wheat" }} className="rsspan">
//                       {" "}
//                       {item.cost} Rs{" "}
//                     </span>
//                   </p>
//                   <p className="p3">Seller Name: {item.sellername} </p>
//                   <p className="p1" style={{ fontFamily: "Roboto" }}>
//                     Course Id: {item.courseId}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
    
        
//         <Home suppressHydrationWarning={true}/>
      

//     </div>
    
//   );
// }












