"use client";
import style from "./usdataafter.module.css";
import CircularIndeterminate from "@/app/loading";
import { useEffect, useState } from "react";
import Image from "next/image"; //for image optimization
import TextField from "@mui/material/TextField";
import { redirect, useRouter } from "next/navigation";
import { Alert } from "@mui/material";

export default function usersAfterloginOrSignup({ params }) {
  console.log(params);
  let user = { name: "unknown" };
  const [session, setSession] = useState(null);
  const [useruname, setuseruname] = useState(null);
  
  const [courses, setcourses] = useState([]);
  const [loading, setLoading] = useState(true); // this loading is for ssr loading
  // for csr like fetch requests we have to make some custom loadings
  // like if fetch request is in process we will make it true else false ;

  // regarding userdata for upload-----------------------
  const [name, setname] = useState(null);
  // const [sellername, setsellername] = useState(null);
  const [company, setcompany] = useState(null);
  const [location, setlocation] = useState(null);
  const [email, setemail] = useState(null);
  const [querry, setquerry] = useState(null);
  const [clicks, setupclicks] = useState(0);

  //for edit----------------------------------------
  const [courseID, setcourseID] = useState(0);
  const router = useRouter
  let username = null;
  let authtoken = null;

  useEffect(() => {
    const getqueries = async (username, authtoken) => {
      try {
        const response = await fetch("http://127.0.0.1:4000/user/queries", {
          method: "GET",
          headers: {
            authorization: "Bearer " + authtoken,
          },
        });
        if (!response.ok) {
          alert("Failed to fetch queries");
          router.push("/");
          return; // Early return to stop further execution
        }
        const data = await response.json();
        setcourses(data.queries);
        console.log("hreeeeeeeeee---------" + courses);
      } catch (error) {
        console.log("00000000000000000000");
        console.error("Error fetching courses:", error);
      }
    };
    user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      username = parsedUser.name;
      authtoken = parsedUser.authtoken;
      console.warn("++++++++++++++" + authtoken);
      console.warn(username);
      setSession(parsedUser);
      setuseruname(username);
      getqueries(username, authtoken);
    } else {
      redirect("/");
    }
    // fetchData(username, authtoken);
    setLoading(false);
  }, [clicks]);

  async function load() {
    user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    username = parsedUser.name;
    authtoken = parsedUser.authtoken;
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
        console.warn(authtoken);
        const resp = await fetch("http://localhost:4000/user/queries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + authtoken,
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
        if (respData.message === "User not found or query not added") {
          alert("User not found or query not added");
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
        }
      } catch (error) {
        console.error("Error in uploading :", error);
        alert(error);
      }
    }
  }

  //   // const deleteCourse = async (courseId) => {
  //   //   const user = JSON.parse(localStorage.getItem("user"));
  //   //   const { authtoken } = user;

  //   //   try {
  //   //     const response = await fetch(
  //   //       `http://localhost:4000/seller/courses/${courseId}`,
  //   //       {
  //   //         method: "DELETE",
  //   //         headers: {
  //   //           Authorization: "Bearer " + authtoken,
  //   //         },
  //   //       }
  //   //     );
  //   //     if (!response.ok) {
  //   //       alert("Failed to delete course");
  //   //       return;
  //   //     }
  //   //     // Remove course from state
  //   //     setTimeout(() => {
  //   //       setupclicks(clicks + 1);
  //   //     }, 2000);
  //   //     setCourses(courses.filter((course) => course.courseId !== courseId));
  //   //     alert("Course deleted successfully");
  //   //   } catch (error) {
  //   //     console.error("Error deleting course:", error);
  //   //   }
  //   // };
  //   // const handleDelete = (courseId) => {
  //   //   if (confirm("Are you sure you want to delete this course?")) {
  //   //     deleteCourse(courseId);
  //   //   }
  //   // };

  // const removeeditconsole=() =>{
  //     setname(null)
  //     setcost(null)
  //     setimglink(null)
  //     setcourseID(null)

  // document
  // .querySelector(`.${style.overlay}`)
  // .classList.remove(style.showoverlay);
  // document
  // .querySelector(`.${style.EditForm}`)
  // .classList.remove(style.showEditForm);
  // setcourseID(null);
  // }

  //   // const editCourse = async () => {
  //   //   if (name==null || cost==null) {

  //   //     alert("please fill all required data");
  //   //     return;
  //   //   } else {
  //   //     console.warn("=========="+name+" "+cost)
  //   //     const user = JSON.parse(localStorage.getItem("user"));
  //   //     const { authtoken } = user;
  //   //     setTimeout(() => {
  //   //       setupclicks(clicks + 1);
  //   //     }, 2000);
  //   //     try {
  //   //       const response = await fetch(
  //   //         `http://localhost:4000/seller/courses/${courseID}`,
  //   //         {
  //   //           method: "PUT",
  //   //           headers: {
  //   //             "Content-Type": "application/json",
  //   //             Authorization: "Bearer " + authtoken,
  //   //           },
  //   //           body: JSON.stringify({
  //   //             name : name,
  //   //             courseId : courseID,
  //   //             sellername : selleruname,
  //   //             cost : cost,
  //   //             imglink : imglink
  //   //           })
  //   //         }
  //   //       );
  //   //       if (!response.ok) {
  //   //         alert("Failed to edit course");
  //   //         return;
  //   //       }
  //   //       if(respData.message == "course doesent exist"){
  //   //         alert("course doesent exist , for any queries contact admin")
  //   //       }else if(respData.message=="updated"){
  //   //         setTimeout(() => {
  //   //           setupclicks(clicks + 1);
  //   //         }, 2000);
  //   //       }
  //   //       removeeditconsole()
  //   //       setCourses(
  //   //         courses.map((course) =>
  //   //           course.courseId === courseID
  //   //             ? { ...course, name, cost, imglink }
  //   //             : course
  //   //         )
  //   //       );
  //   //     } catch (error) {
  //   //       console.error("Error editing course:", error);
  //   //     }
  //   //   }

  //   // };

  //   const handleEdit=(courseId) =>{
  //     document
  //     .querySelector(`.${style.overlay}`)
  //     .classList.add(style.showoverlay);
  //   document
  //     .querySelector(`.${style.EditForm}`)
  //     .classList.add(style.showEditForm);
  //   setcourseID(courseId);
  //   console.log("Editing course with ID:", courseId);
  //   }

  function resett() {
    document.getElementById("outlined-basic-1").value = "";
    document.getElementById("outlined-basic-2").value = "";
    document.getElementById("outlined-basic-3").value = "";
    document.getElementById("outlined-basic-4").value = "";
    document.getElementById("outlined-basic-5").value = "";
  }

  console.log(params.id + "--=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-");

  if (loading) {
    return <CircularIndeterminate />; // Display the loading component while loading
  }
  return (
    <div>
      <div className={style.handlerslistdiv1in1}>
        <div>
          <h1 className={style.sellerdata}>
            &nbsp; Your dashboard - {useruname}{" "}
          </h1>
        </div>
        <div>
          <h3 className={style.handlisttop}>
            &nbsp;&nbsp;&nbsp;&nbsp; {params.id}
          </h3>
        </div>
      </div>

      <div className={style.datajimain}>
        <div className={style.lefteside}>
          <div className="data">
            {courses.map((item, index) => {
              const querryData = item.querry; // Extract the `querry` object
              return (
                <div className="courses" key={index}>
                  <div className="coursedetails">
                  <div className={style.infopairone}>
                      <h4 className={style.h4name}>Query:</h4>
                      <p className={style.ttt}>{querryData.querry}</p>
                    </div>
                    
                    {/* <h4 className={style.h4name}>Query:</h4>
                    <p
                      style={{
                        width: "850px",
                        overflowWrap: "break-word", // Ensures text breaks correctly
                      }}
                    >
                      {querryData.querry}
                    </p> */}
                    {/* <p className={style.p1}>
                      Status:{" "}
                      <span
                        style={{
                          color:
                            querryData.status.toLowerCase() === "pending"
                              ? "red"
                              : "inherit",
                        }}
                      >
                        {querryData.status}
                      </span>
                    </p> */}
                  </div>
                </div>

                // <div className="courses" key={index}>
                //   <div className="coursedetails">
                //     <h4 className={style.h4name}>Query:</h4>
                //     <p className={style.querryParagraph}>
                //       {querryData.querry}
                //     </p>
                //     <p className={style.p1}>
                //       Status:{" "}
                //       <span
                //         style={{ color: querryData.status.toLowerCase() === "pending" ? "red" : "inherit" }}
                //       >
                //         {querryData.status}
                //       </span>
                //     </p>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
        <div className={style.rightside}>
          <div className={style.inn}>
            <style jsx>
              {`
                h1 {
                  text-align: center;
                  color: white;
                }
              `}
            </style>
            <h1>Generate querry</h1>
            <TextField
              className={style.muit1}
              idd="1"
              id="outlined-basic-1"
              label="Name"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setname(e.target.value)}
            />

            <TextField
              className={style.muit1}
              idd="2"
              id="outlined-basic-2"
              label="Company"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setcompany(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-3"
              label="Location"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setlocation(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-4"
              label="E-mail"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-5"
              label="Querry"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setquerry(e.target.value)}
            />
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" onClick={load}>
                Generate
              </button>
            </div>
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" onClick={resett}>
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
