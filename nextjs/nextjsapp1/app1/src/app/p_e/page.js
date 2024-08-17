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
import "./p_e.css";
import Enquiry from "../enq/enquiry";

const pe = () => {
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
                  onClick={() => router.push(`../team`)}
                >
                  Team
                </button>
              </li>
              
            </ul>
          </div>
        </div>

  

        <div className="introheaderp">
          <div className="carddp">
              <p className="pppp">
              PARTNERS & INVESTORS
              </p>
              {/* <p className="ppp">
              dsnfksjdfsnfjknsfjjfdnffkjdknkdsjnfkjdfnjdnfdnfdsjfndsfnkjdsfnkjsdfn
              </p>
              <p className="ppp">
              00000000000000000000000000000000000000000000000
              </p> */}
            
          </div>
        </div>
{/* 
        <section className="hed1">
            <p>Canadian Legacy Biotech believes in developing technology for Planet, People, & Profit. We excel by challenging ourselves and by promoting human curiosity.</p>
        </section> */}




        {/* <section className="sec1">

            <div className="inner">
                <h2>Our Purpose</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>
            <div className="inner">
                <h2>Our Values</h2>
                <p>
                Our values define our actions, and we lead by LEAP. LEAP stands for leadership, empathy, ardent, and persistence. We will work as a leader and create winning situations for all the stakeholders involved in the business. While we are a technology company, our projects shall benefit all our partners alike. Our goal is to be aware of our surroundings and empathize with the people who face challenges but not find answers to their current woes.

                <br></br> <br></br>    We will help those people find the solution to their problems for the betterment of society. We will be persistent in our approach. We will see challenges as a steppingstone and work toward our goal making failure non-permanent.                </p>
            </div>
            

        </section>
        <section className="sec2">

            <div className="inner">
              <Image 
              className="im"
                src={leadership}
              />
                <h2>Leadership</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>
            <div className="inner">
              <Image 
              className="im"
              src={empathy}
              />
            <h2>Empathy</h2>
                <p>
                At Farmer’s Legacy Biotech, we are excited about the limitless possibility technology can offer for a better future.  We are a forward-thinking company that pride itself by working to address the challenges faced by Canadian Farmers. We drive our purpose from the challenges faced by Canadian farmers and use biotechnology to address these challenges. We will focus on finding inefficiencies in agriculture and develop solutions for them.
                <br></br> <br></br>   Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
                </p>
            </div>

        </section> */}
        <section className="sec3">

            <div className="inner">
            <Image 
              className="imf"
              src={ard}
              />
            <h2>Partners</h2>
                <p>
                We are looking for partners who share similar values as that of ours. We are looking for expertise in plant breeding, seed multiplication, and seed marketing. We will be connecting with various partners as per the life cycle of our company. We are committed to be transparent in dealing with our partners and share the created value as per contribution to value creation.
                <br></br> <br></br>   
                </p>
            </div>
            <div className="inner">
            <Image 
              className="imf"
                src={pers}
              />
            <h2>Inversors</h2>
                <p>
                We are a company on a mission to better Canadian lives. We believe that we have the intellectual capability to sustain the test of time. We will strive hard to produce the best in market returns for our investors.The world is evolving, so does market dynamics. The change in market dynamics in agri-business negatively impacts.
                <br></br> <br></br>  
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
              <p>info@farmerlegacybiotech.com</p>
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
export default pe;
















 