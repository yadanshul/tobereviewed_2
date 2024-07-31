'use client';
import { useEffect } from "react";
import hidbeforloginsign from "../privatecomponentviaHOC/privcomphoc";
import Image from 'next/image';
import menu from "../../../public/images/menu.png";
import milk from "../../../public/images/milk.jpg";
import oilll from "../../../public/images/oilll.jpg";
import back from "../../../public/images/back.png";
import { useRouter } from "next/navigation";
import "./products.css";
const Product = () => {
function navtoggle(){
    const menubtn = document.querySelector('.menubtn');
    const navlinks = document.querySelector('.nav-links');
    
    if (menubtn && navlinks) {
      console.log('Menu button and nav links found');
      menubtn.addEventListener('click', () => {
        console.log('Menu button clicked');
        navlinks.classList.toggle('mobile-menu');
      });
    } else {
      console.log('Menu button or nav links not found');
    }
}
const router=useRouter();
  return (
    <div className="main">
      {/* <nav className="navbar">
        <h1 className="logo">what ever client wnat</h1>
        
        <ul className="nav-links">
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 3</li>
        </ul>
        <Image src={menu} className="menubtn" alt="Menu button" onClick={navtoggle} />
      </nav> */}
      <div className="header">
        <div className="headercontent">
          <h2>Products we are offering</h2>
          <div className="line"></div>
          <h1>barmohla xyz</h1>
          <center>
              <div className="headerproddata">
              <p>
                  Product: FLB Proprietary Blend and Brahmola are two flagship products of Farmer’s Legacy Biotech. FLB Blend comprises of 80% Brahmola and 20% other Candian Oil meeting all the regulatory requirements of Codex Alimentarius to be used in Infant Formula. Brahmola is healthy deep frying oil with excellent oxidative resistant capability
              </p>
            </div>
          </center>
          
        </div>
      </div>
        <section className="title">
            <h1>
                Current Products
            </h1>
            <div className="line">

            </div>

        </section>
        <div className="row">
            <div className="col">
                <Image src={oilll} className="imggg">

                </Image>
                <h4 className="prodhead">
                Frying Oil                                       
                </h4>
                <p className="para">
                Brahmola balanced SFA, MUFA and PUFA profile and resistant against oxidation make it suitable for deep frying application. Brahmola is healthy deep frying Oil. You do not need to compromise on oil quality for good taste.
                </p>
            </div>
            <div className="col">
                <Image src={milk} className="imggg">

                </Image>
                <h4 className="prodhead">
                Infant Formula
                    
                </h4>
                <p className="para">
                        FLB Proprietary Blend comprising of 80% Brahmola and 20% other Canadian Oil with  balanced SFA, MUFA and PUFA profile make it ideal Oil to be used for Infant formula Application simplifying current practice of using Palm Oil, Sunflower Oil and Soyabean Oil blend. FLB proprietary blend negligible 3-MCPD and GE content is safe for children and keep the consumption level below safety limits for the infants solely feeding on infant 
                </p>
            </div>
            
        </div>
        <div className="enquirybtndiv">
              <button className="enquirybtn"onClick={()=>{router.push("../contact")}}>
                Enquiry
              </button>
            </div>

    </div>
  );
};

// export default hidbeforloginsign(Product);
export default Product;