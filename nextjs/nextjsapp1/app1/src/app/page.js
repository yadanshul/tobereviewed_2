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
    router.refresh();  
  }
  function signout () {
    localStorage.removeItem("user");
    setSession(null);
    router.push("/");
    router.refresh();  
  }
  
  const [token_to_dif_u_s, set_token_to_dif_u_s] = useState(null)
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); 
 
    
    

  const [name, setname] = useState(null);
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
  useEffect(() => {
    if (typeof window === 'undefined') {
     }else{
      user = localStorage.getItem("user");
      if (user) {
        setSession(JSON.parse(user)); // Assuming user is a JSON stringified object
        set_token_to_dif_u_s(JSON.parse(user).t);
        console.log(JSON.parse(user).sellerid+"nnmnmnmnmnmnmnmnmnmnmnmnmnmnmnmnnmnnm")
      }
      setLoading(false);
    }
    
  
   






  },[]);

  


  if (loading) {
    return <CircularIndeterminate />;  
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
                FLB
              </h2>
              <p
                className="cbheading"
                style={{ fontFamily: "Open Sans", color: "white" }}
              >
                {" "}
                farmerlegacybiotech{" "}
              </p>
            </div>
            <ul className="ulhometop">
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
              
            </ul>
          </div>
        </div>

        

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
               
              </div>
            </div>

            <div className="cardhome1">
              <div className="cardcontenthome1">
                <h3> Our Values</h3>
                <p>Our values define our actions, and we lead by LEAP.</p>
                <button onClick={()=>{router.push("/about2")}}> know more</button>
                
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
                    <button onClick={()=>{router.push("/p_e")}}> know more </button>
                  </div>
                  <div className="pt">
                    <h2> Partners </h2>
                  </div>
                  <p>
                    {" "}
                    We are looking for partners who share similar values as that of ours. We are looking for expertise in plant breeding, seed multiplication, and seed marketing. We will be connecting with various partners as per the life cycle of our company. We are committed to be transparent in dealing with our partners and share the created value as per contribution to value creation.
                  </p>
                  <div className="inv">
                    <h2> Investors </h2>
                  </div>
                  <p>
                    {" "}
                    We are looking for partners who share similar values as that of ours. We are looking for expertise in plant breeding, seed multiplication, and seed marketing. We will be connecting with various partners as per the life cycle of our company. We are committed to be transparent in dealing with our partners and share the created value as per contribution to value creation.
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







