"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ms from "../../../public/images/ms.jpg";
import conimg from "../../../public/images/conimg.png";
import "./team.css";
import Enquiry from "../enq/enquiry";

const Team = () => {
  const router = useRouter();

  // State variables for toggling the visibility of text
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  // Toggle functions
  const toggleShowMore1 = () => setShowMore1(!showMore1);
  const toggleShowMore2 = () => setShowMore2(!showMore2);

  return (
    <div className="main">
        <Enquiry/>
      <div className="nav">
        <div className="divhomemain">
          <div className="divhome2" id="inner2">
            <h2 className="cheading" style={{ fontFamily: "Open Sans", color: "white" }}>
            FLB
            </h2>
            <p className="cbheading" style={{ fontFamily: "Open Sans", color: "white" }}>
            Farmer Legacy  Biotech
            </p>
          </div>
          <ul className="ulhometop">
            <li>
              <button className="btonhome" onClick={() => router.push("/")}>
                Home
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push("/about2")}>
                About
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push(`../products`)}>
                Products
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push(`../innovation`)}>
                Innovation
              </button>
            </li>
            <li>
              <button className="btonhome" onClick={() => router.push(`../p_e`)}>
                Partners & investors
              </button>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="introheaders">
        <div className="cardds">
          <p className="ppps">TEAM</p>
        </div>
      </div>

      {/* <section className="hed14">
        <p style={{ color: "rgb(66, 66, 66)" }}>
          Canadian Legacy Biotech believes in developing technology for Planet, People, & Profit. We excel by challenging ourselves and by promoting human curiosity.
        </p>
      </section> */}

<section className="sec2">
      <div className={`inner1 ${showMore1 ? 'expanded' : ''}`}>
        <Image className="im" src={ms} />
        <h2>Dr. Marcus Samuel</h2>
        {showMore1 ? (
          <p>
            Dr. Marcus Samuel is Professor in Department of Biological Sciences & Academic Director of the Greenhouse, at Integrative Cell Biology (Plant Biology), University of Calgary and CSO of AgGene. He is Co-founder and Partner with Farmer's Legacy Biotech. Dr. Samuel leads Plant Transformation and Partnership Development on Breeding side of FLB's Business.
            <br /> <br />
            <button className="btnn" onClick={toggleShowMore1}>Show Less</button>
          </p>
        ) : (
          <button className="btnn" onClick={toggleShowMore1}>Show More</button>
        )}
      </div>

      <div className={`inner2 ${showMore2 ? 'expanded' : ''}`}>
        <Image className="im" src={conimg} />
        <h2>Pankaj Purwar</h2>
        {showMore2 ? (
          <p>
            Pankaj Purwar is co-founder and CEO of Farmer’s Legacy Biotech. Pankaj Purwar has completed Bachelor in Chemical Technology from Harcourt Butler Technological Institute and MBA in Entrepreneurship from University of Victoria. Pankaj has worked for 7 years in multinationals as Marico and Unilever in Process and Product Development. Pankaj leads technology commercialization, fund raising, partnerships and Business development initiative for Farmer’s Legacy Biotech.
            <br /> <br />
            <button className="btnn" onClick={toggleShowMore2}>Show Less</button>
          </p>
        ) : (
          <button className="btnn" onClick={toggleShowMore2}>Show More</button>
        )}
      </div>
    </section>
      <div className="info">
        <div className="roww">
          <div className="colll1">
            <h3>ABOUT US</h3>
            <p>
              Technology is evolving, so is the threat from global climate change. New challenges and using novel technologies to solve these challenges excite us at Farmer’s Legacy Biotech.
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
};

export default Team;
