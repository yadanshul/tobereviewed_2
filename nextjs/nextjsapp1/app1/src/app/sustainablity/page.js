"use client";
import { useState } from "react";
import hidbeforloginsign from "../privatecomponentviaHOC/privcomphoc";
import cardimg from "../../../public/images/cardimg.jpg";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import leadership from "../../../public/images/leadership.png"
import empathy from "../../../public/images/Empathy.webp"
import ard from "../../../public/images/ard.webp"
import pers from "../../../public/images/pers.webp"
import Link from "next/link";
import "./sus.css";
import Enquiry from "../enq/enquiry";

const sustainablity = () => {
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

  

        <div className="introheaders">
          <div className="cardds">
              <p className="ppps">
              SUSTAINABLITY
              </p>
             
            
          </div>
        </div>

        <section className="hed14">
            <p style={{color:"rgb(66, 66, 66)"}}>Canadian Legacy Biotech believes in developing technology for Planet, People, & Profit. We excel by challenging ourselves and by promoting human curiosity.</p>
        </section>




     
        <section className="sec2ss">

            <div className="inner1ss">
              <Image 
              className="imss"
                src={leadership}
              />
                <h2>Impact on Canadian Farmers</h2>
                <p>
                Farmer’s harvest cycle depends on the rotation of the crop, and few plants impact the health of other crops and the farm. We are committed to help strike the right balance between different crops so that resources used in farming are optimized. We recognize global climate change and are committed to developing products that help meet Paris climate agreement goals.
                <br></br> <br></br>  
                </p>
            </div>
            <div className="inner2ss">
              <Image 
              className="imss"
              src={empathy}
              />
            <h2>Impact on Consumers</h2>
                <p>
                Our most of day to day products use for household and home care is based on non-renewable sources. Our goal is to reduce the reliance on non-renewable sources for making household and home care products. Consumers will get the best products with ingredients in their product from renewable sourcing with minimum chances of contamination from dangerous chemicals.
                 <br></br> <br></br>  
                </p>
            </div>
            <div className="inner3ss">
              <Image 
              className="imss"
                src={leadership}
              />
                <h2>Impact on forthcoming generations</h2>
                <p>
                We are looking for solutions that will able to reduce energy and resource consumption. Currently, we are reliant on processes to make modified products that involve high energy consumption. Our goal is to use bioreactors to produce those modified products and reduce our reliance on non-renewable sources so that we have resources left for our future generations.<br></br> <br></br>  
                </p>
            </div>

        </section>
       

          <div className="info">
            <div className="roww">
              <div className="colll1">
                  <h3>ABOUT US</h3>
                  <p >Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.</p>
                  
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
export default sustainablity;
















 