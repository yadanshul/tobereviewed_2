"use client";
import { useState } from "react";
import hidbeforloginsign from "../privatecomponentviaHOC/privcomphoc";
import cardimg from "../../../public/images/cardimg.jpg";
import Image from "next/image";

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
import Enquiry from "../enq/enquiry";
import "./about2.css";

const about2 = () => {
    const router = useRouter();
    return(
        <div className="main">
          <Enquiry/>
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
                  onClick={() => router.push("/")}
                >
                  home
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

  

        <div className="introheadera">
          <div className="cardda">
              <p className="pppa">
             ABOUT
              </p>
              {/* <p className="ppp">
              dsnfksjdfsnfjknsfjjfdnffkjdknkdsjnfkjdfnjdnfdnfdsjfndsfnkjdsfnkjsdfn
              </p>
              <p className="ppp">
              00000000000000000000000000000000000000000000000
              </p> */}
            
          </div>
        </div>

        <section className="hed12">
            <p style={{color:"rgb(66,66,66)"}}>Canadian Legacy Biotech believes in developing technology for Planet, People, & Profit. We excel by challenging ourselves and by promoting human curiosity.</p>
        </section>




        <section className="sec1ab">

            <div className="innerab">
                <h2>Our Purpose</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>
            <div className="innerab">
                <h2>Our Values</h2>
                <p>
                Our values define our actions, and we lead by LEAP. LEAP stands for leadership, empathy, ardent, and persistence. We will work as a leader and create winning situations for all the stakeholders involved in the business. While we are a technology company, our projects shall benefit all our partners alike. Our goal is to be aware of our surroundings and empathize with the people who face challenges but not find answers to their current woes.

                <br></br> <br></br>    We will help those people find the solution to their problems for the betterment of society. We will be persistent in our approach. We will see challenges as a steppingstone and work toward our goal making failure non-permanent.                </p>
            </div>
            

        </section>
        <section className="sec2ab">

            <div className="innerab">
              <Image 
              className="imab"
                src={leadership}
              />
                <h2>Leadership</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>
            <div className="innerab">
              <Image 
              className="imab"
              src={empathy}
              />
            <h2>Empathy</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>

        </section>
        <section className="sec3ab">

            <div className="innerab">
            <Image 
              className="imab"
              src={ard}
              />
            <h2>Ardent</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>
            <div className="innerab">
            <Image 
              className="imab"
                src={pers}
              />
            <h2>persistent</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>

        </section>

          <div className="info">
            <div className="roww">
              <div className="colll1">
                  <h3>ABOUT US</h3>
                  <p >Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.</p>
                  
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
            <div className="linee">

            </div>
            <div className="copyright">
                  <h2 className="cprt1">Copyright by </h2> 
                  
                  <h2 className="cprt">Canadian Legacy Biotech</h2>
            </div>
          </div>
</div> 
    )
}  
export default about2;
















 