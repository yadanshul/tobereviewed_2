"use client";
import "./about.css";
export default function Layout({ children }) {
  return (
    <div>
      {/* <div className="divvv">
                <h1> About Us </h1>
            </div> */}
      <div>{children}</div>
    </div>
  );
}
