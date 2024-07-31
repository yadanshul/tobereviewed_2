'use client'
import Link from "next/link";
import './signup.css'
export default function Layout({children}){
    return (   
        <div>
            <div className="divv">
                <div>
                    <h1 className="cheading"> Oilcompxyz </h1>
                    <p className="cbheading" style={{ fontFamily: "Open Sans" }}>
                        {" "}
                        Researh abc{" "}
                    </p>
                </div>
                <ul className="login-menu">
                    <li className="brackets">
                        <Link href="/"> Home</Link>
                    </li>
                    <li className="brackets">
                        <Link  href="/signup/user"> SignUp Users</Link>
                    </li>
                    <li className="brackets">
                        <Link href="/signup/seller"> SignUp Admin</Link>
                    </li>
                    
                    <li className="brackets">
                        <Link href="/login/users"> login</Link>
                    </li>
                    {/* <li className="brackets">
                        <Link href="/about"> about </Link>
                    </li> */}
                </ul>
            </div>


            <div className="divvv">
            {children}
            </div>

        </div>
        
        
  );
}
