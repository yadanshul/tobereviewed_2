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

import Link from "next/link";
import "./about.css";
const about = () => {
  const router = useRouter();

  return (
    <div className="main">
      <div className="divabout">
        <li>
          <Link className="brackets" href="/about/aboutTeam">
            Our Team{" "}
          </Link>
        </li>
        <br></br>

        {/* <li>
              <Link className="brackets" href="/about/aboutmission">About Mission </Link>
              </li>
              <br>
              </br>
              <li>
              <Link className="brackets" href="/about/aboutvision">About vision </Link>
              </li> */}
      </div>
        <center>
        <div className="cardcontainer">
        <div className="card">
          <Image
            src={cardimg}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <div className="cardcontent">
            <h3 style={{ color: "white" }}> Farmer’s Legacy Biotech</h3>
            <p>
              Farmer’s Legacy Biotech was founded in 2020 to diversify the
              Canadian Canola Industry. By 2024, FLB has developed repurposed
              Canola “Brahmola”, with patent pending MCFA booster technology,
              ideal oil for Infant Formula and Deep frying application. Brahmola
              is undergoing field trials and will be ready for commercialization
              in 2027. FLB has raised $200,000 for product development and fund
              raising is underway for undertaking field trials for
              Brahmola.Farmer’s Legacy Biotech was founded in 2020 to diversify
              the Canadian Canola Industry. By 2024, FLB has developed
              repurposed Canola “Brahmola”, with patent pending MCFA booster
              technology, ideal oil for Infant Formula and Deep frying
              application. Brahmola is undergoing field trials and will be ready
              for commercialization in 2027. FLB has raised $200,000 for product
              development and fund raising is underway for undertaking field
              trials for Brahmola.
            </p>
            {/* <a href="" class="btn"> Read More</a> */}
          </div>
        </div>
        <div className="card">
          <Image
            src={cardimg}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <div className="cardcontent">
            <h3 style={{ color: "white" }}> Mission</h3>
            <p>
              Our mission is to introduce multifunctional medium chain fatty
              acids acid in Canola. We achieved our objective with Academic,
              Industry and Government Collaboration and our unconventional
              Business model that believes in benefitting every stakeholder in
              the Canola Industry from Consumers, Breeders, and Farmers to
              Processors.
            </p>
            {/* <a href="" class="btn"> Read More</a> */}
          </div>
        </div>
        <div className="card">
          <Image
            src={cardimg}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <div className="cardcontent">
            <h3 style={{ color: "white" }}> Vision</h3>
            <p>
              Our Vision is to diversify the Canola industry and grow it by 20%
              by 2030 by both Volume and Value. We want to make Canola efficient
              for multiple applications and grow sustainably in Canada. We want
              to limit the deforestation in the Palm oil industry and carbon
              footprint of the petroleum industry benefitting consumers and
              industry alike.Partnerships: Brahmola is result of partnership
              among Farmer’s Legacy Biotech, University of Calgary and National
              Research Council.
            </p>
            {/* <a href="" class="btn"> Read More</a> */}
          </div>
        </div>
      </div>
        </center>
      
    </div>
  );
};
// export default hidbeforloginsign(about);
export default about;
