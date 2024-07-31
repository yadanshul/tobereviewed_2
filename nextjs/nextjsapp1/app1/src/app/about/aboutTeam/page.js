"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../about.css";
import home from "../../../../public/images/home.png";

const aboutStudent = () => {
  const router = useRouter();
  return (
    <main className="m">
      {/* <h1 className="subabout" > about Team </h1> */}
      <div className="homebtn">
        <Image
          src={home}
          className="homeimgbtn"
          onClick={() => {
            router.push("/");
          }}
        ></Image>
      </div>

      <center>
        <div className="abt">
          <h1 className="head">Our Team</h1>
          <div className="line"></div>
          <p className="abtteam">
            Dr. Marcus Samuel: Dr. Marcus Samuel is Professor in Department of
            Biological Sciences & Academic Director of the Greenhouse, at
            Integrative Cell Biology (Plant Biology), University of Calgary and
            CSO of AgGene. He is Co-founder and Partner with Farmer's Legacy
            Biotech. Dr. Samuel leads Plant Transformation and Partnership
            Development on Breeding side of FLB's Business. Pankaj Purwar:{" "}
            <br></br> <br></br> Pankaj Purwar is co-founder and CEO of Farmer’s
            Legacy Biotech. Pankaj Purwar has completed Bachelor in Chemical
            Technology from Harcourt Butler Technological Institute and MBA in
            Entrepreneurship from University of Victoria. Pankaj has worked for
            7 years in multinationals as Marico and Unilever in Process and
            Product Development. Pankaj leads technology commercialization, fund
            raising, partnerships and Business development initiative for
            Farmer’s Legacy Biotech.
          </p>
        </div>
      </center>
    </main>
  );
};

export default aboutStudent;
