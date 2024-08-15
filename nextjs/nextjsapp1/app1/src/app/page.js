//1
"use client";
//import hidbeforloginsign from "./privatecomponentviaHOC/privcomphoc";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import cardimg from "../../public/images/cardimg.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";//for image optimization
import crophome from "../../public/images/crophome.jpg"
import pe from "../../public/images/pe.jpg"
import NMN from '../../public/images/NMN.jpg'
//import Loader from './loading'; 
import CircularIndeterminate from './loading';
import Enquiry from "./enq/enquiry";
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





  return (
    <div>
      <Enquiry/>

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
              {/* <li>
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
              </li> */}
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push("/about2")}
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
                  onClick={() => router.push(`../innovation`)}
                >
                  innovation
                </button>
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../sustainablity`)}
                >
                  sustainablity
                </button>
              </li>
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../p_e`)}
                >
                  Partners & investors
                </button>
              </li>
              
              <li>
                <button
                  className="btonhome"
                  onClick={() => router.push(`../team`)}
                >
                  Team
                </button>
              </li>
              {/* <li>
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
              </li> */}
            </ul>
          </div>
        </div>

        {/* 1,2 common */}
        {/* <div className="introheader">
        <div className="card">
          <div className="slide" >
            <p>FLB Introducing Brahmola for Better, Healthy and Sustainable World</p>
          </div>
          <div className="slide" >
            <p>Slide 2 Text</p>
          </div>
          <div className="slide" >
            <p>Slide 3 Text</p>
          </div>
        </div>
      </div> */}

        <div className="introheader">
          <div className="cardd">
            <p className="ppp">
              FLB Introducing Brahmola for Better, Healthy and Sustainable World
            </p>
            <p className="ppp">
              dsnfksjdfsnfjknsfjjfdnffkjdknkdsjnfkjdfnjdnfdnfdsjfndsfnkjdsfnkjsdfn
            </p>
            <p className="ppp">
              0000000000000000000000000000000000000000000000
            </p>
          </div>
        </div>

        <div className="aboutushome">
          <h1> About Us </h1>
          <div className="cardcontainerhome1">
            <div className="cardhome1">
              <div className="cardcontenthome1">
                <h3>Our Aim</h3>
                <p>New challenges and using novel technologies</p>
                <button onClick={()=>{router.push("/about2")}}> know more</button>
                {/* <div className="bgimgblr"></div> */}
              </div>
            </div>

            <div className="cardhome1">
              <div className="cardcontenthome1">
                <h3> Our Purpose</h3>
                <p>
                  At Farmer’s Legacy Biotech, we are excited about the limitless
                  possibility...
                </p>
                <button onClick={()=>{router.push("/about2")}}> know more</button>
                {/* <div className="bgimgblr"></div> */}
              </div>
            </div>

            <div className="cardhome1">
              <div className="cardcontenthome1">
                <h3> Our Values</h3>
                <p>Our values define our actions, and we lead by LEAP.</p>
                <button onClick={()=>{router.push("/about2")}}> know more</button>
                {/* <div className="bgimgblr"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pagemain">
        <div className="middleside">
          <div className="sustainablityhome">
            <h1> Sustainablity </h1>
            <div className="sustainablitycardcontainerhome">
              <div className="sustainablitycardhome">
                <Image
                  src={cardimg}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
                <div className="sustainablitycardcontenthome">
                  <h3 > Impact on Canadian Farmers</h3>
                  <p>Farmer’s harvest cycle depends on the rotation of the crop, and few plants impact the health of other crops and the farm.</p>
                  <a href="/sustainablity" className="btn">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
              <div className="sustainablitycardhome">
                <Image
                  src={cardimg}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
                <div className="sustainablitycardcontenthome">
                  <h3 > Impact on Consumers</h3>
                  <p>Our most of day to day products use for household and home care is based on non-renewable sources.</p>
                  <a href="/sustainablity" className="btn">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
              <div className="sustainablitycardhome">
                <Image
                  src={cardimg}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
                <div className="sustainablitycardcontenthome">
                  <h3 > Impact on forthcoming generations</h3>
                  <p>We are looking for solutions that will able to reduce energy and resource consumption.</p>
                  <a href="/sustainablity" className="btn">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="ourproductshome">
            <h1> Our Products </h1>
            <div className="rowhome">
              <div className="cardcontainerourproductshome">
                <div className="colhome">
                  <Image src={crophome} className="crophome"></Image>
                </div>
                <div className="colhome2">
                  <div>
                    <button onClick={()=>{router.push("/products")}}> know more </button>
                  </div>
                  <p>
                    {" "}
                    Seeds: We will develop farm seeds that are optimum in
                    agronomic and nutritional value properties. The seed
                    products will find multiple applications. These numerous
                    applications will able to diversify the current usage and
                    reduce reliance on a few consumption patterns. We will be
                    modifying the seeds with the latest technology routes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="partnersAndInversorshome">
            <h1> Partners And Inversors </h1>
            <div className="rowhome">
              <div className="cardcontainerourproductshome">
                <div className="colhome">
                  <Image src={pe} className="crophome2"></Image>
                </div>
                <div className="colhome2">
                <div>
                    <button onClick={()=>{router.push("/products")}}> know more </button>
                  </div>
                  <div className="pt">
                    <h2> Partners </h2>
                  </div>
                  <p>
                    {" "}
                    Seeds: We will develop farm seeds that are optimum in
                    agronomic and nutritional value properties. The seed
                    products will find multiple applications. These numerous
                    applications will able to diversify the current usage and
                    reduce reliance on a few consumption patterns. We will be
                    modifying the seeds with the latest technology routes.
                  </p>
                  <div className="inv">
                    <h2> Investors </h2>
                  </div>
                  <p>
                    {" "}
                    Seeds: We will develop farm seeds that are optimum in
                    agronomic and nutritional value properties. The seed
                    products will find multiple applications. These numerous
                    applications will able to diversify the current usage and
                    reduce reliance on a few consumption patterns. We will be
                    modifying the seeds with the latest technology routes.
                  </p>
                </div>
                
              </div>
              
            </div>
            
          </div>
        </div>
      </div>

      <div className="info">
        <div className="roww">
          <div className="colll1">
            <h3>ABOUT US</h3>
            <p>
              Technology is evolving, so is the threat from global climate
              change. New challenges and using novel technologies to solve these
              challenges excite us at Farmer’s Legacy Biotech.
            </p>
          </div>
          {/* <div className="colll2">
              <h3>IMPORTANT LINKS</h3>
                  <p>Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.</p>
                 
              </div> */}
          <div className="colll3">
            <h3>GET IN TOUCH</h3>
            <div>
              <p>info@farmerlegacybiotech.com</p>
            </div>
            <div>
              <p>+1 (250) 891-6663</p>
            </div>
          </div>
        </div>
        <div className="linee"></div>
        <div className="copyright">
          <h2 className="cprt1">Copyright by </h2>

          <h2 className="cprt">Canadian Legacy Biotech</h2>
        </div>
      </div>
    </div>
  );
}







