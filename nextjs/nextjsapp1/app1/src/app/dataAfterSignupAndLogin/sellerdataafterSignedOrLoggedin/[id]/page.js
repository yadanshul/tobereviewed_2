"use client";
import style from "./selldataafter.module.css";
import CircularIndeterminate from "@/app/loading";
import { useEffect, useState } from "react";
import Image from "next/image"; //for image optimization
import TextField from "@mui/material/TextField";

import { redirect } from "next/navigation";

export default function sellersAfterloginOrSignup({ params }) {
  console.log(params);
  let user = { name: "unknown" };
  const [session, setSession] = useState(null);
  const [selleruname, setselleruname] = useState(null);
  const [courses, setcourses] = useState([]);
  const [loading, setLoading] = useState(true); // this loading is for ssr loading
  // for csr like fetch requests we have to make some custom loadings
  // like if fetch request is in process we will make it true else false ;

  // regarding userdata for upload-----------------------
  const [name, setname] = useState(null);
  const [sellername, setsellername] = useState(null);
  const [cost, setcost] = useState(null);
  const [imglink, setimglink] = useState(null);
  const [clicks, setupclicks] = useState(0);

  //for edit----------------------------------------
  const [courseID, setcourseID] = useState(0);

  let username = null;
  let authtoken = null;

  useEffect(() => {
    const fetchData = async (username, authtoken) => {
      try {
        const response = await fetch(`http://127.0.0.1:4000/queries/`, {
          method: "GET",
          headers: {
            authorization: "Bearer " + authtoken,
          },
        });
        if (!response.ok) {
          alert("Failed to fetch courses");
          router.push("/");
          return; // Early return to stop further execution
        }
        const data = await response.json();
        setcourses(data.courses);
        console.log(data.courses);
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
      console.warn(username);
      setSession(parsedUser);
      setselleruname(username);
      fetchData(username, authtoken);
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

    if (name == null || cost == null || imglink == null) {
      alert("please fill all required data");
    } else {
      console.warn("==========" + name + " " + cost + " " + imglink);
      try {
        console.warn(authtoken);
        const resp = await fetch("http://localhost:4000/seller/courses", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + authtoken,
          },

          body: JSON.stringify({
            name: name,
            sellername: selleruname,
            cost: cost,
            imglink: imglink,
          }),
        });
        const respData = await resp.json();
        console.warn(respData);
        if (respData.message == "Course with this name already exists.") {
          alert("Course with this name already exists.");
          setname(null);
          setcost(null);
          setimglink(null);
          setcourseID(null);
        } else if (respData.message == "course created successfully") {
          setTimeout(() => {
            setupclicks(clicks + 1);
          }, 2000);
          setname(null);
          setcost(null);
          setimglink(null);
          setcourseID(null);
        }
      } catch (error) {
        console.error("Error in uploading :", error);
      }
    }
  }

  const deleteCourse = async (courseId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { authtoken } = user;

    try {
      const response = await fetch(
        `http://localhost:4000/seller/courses/${courseId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + authtoken,
          },
        }
      );
      if (!response.ok) {
        alert("Failed to delete course");
        return;
      }
      // Remove course from state
      setTimeout(() => {
        setupclicks(clicks + 1);
      }, 1000);
      setCourses(courses.filter((course) => course.courseId !== courseId));
      alert("Course deleted successfully");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  const handleDelete = (courseId) => {
    if (confirm("Are you sure you want to delete this course?")) {
      deleteCourse(courseId);
    }
  };

  const removeeditconsole = () => {
    setname(null);
    setcost(null);
    setimglink(null);
    setcourseID(null);

    document
      .querySelector(`.${style.overlay}`)
      .classList.remove(style.showoverlay);
    document
      .querySelector(`.${style.EditForm}`)
      .classList.remove(style.showEditForm);
    setcourseID(null);
  };

  const editCourse = async () => {
    if (name == null || cost == null) {
      alert("please fill all required data");
      return;
    } else {
      console.warn("==========" + name + " " + cost);
      const user = JSON.parse(localStorage.getItem("user"));
      const { authtoken } = user;
      setTimeout(() => {
        setupclicks(clicks + 1);
      }, 2000);
      try {
        const response = await fetch(
          `http://localhost:4000/seller/courses/${courseID}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + authtoken,
            },
            body: JSON.stringify({
              name: name,
              courseId: courseID,
              sellername: selleruname,
              cost: cost,
              imglink: imglink,
            }),
          }
        );
        if (!response.ok) {
          alert("Failed to edit course");
          return;
        }
        if (respData.message == "course doesent exist") {
          alert("course doesent exist , for any queries contact admin");
        } else if (respData.message == "updated") {
          setTimeout(() => {
            setupclicks(clicks + 1);
          }, 2000);
        }
        removeeditconsole();
        setCourses(
          courses.map((course) =>
            course.courseId === courseID
              ? { ...course, name, cost, imglink }
              : course
          )
        );
      } catch (error) {
        console.error("Error editing course:", error);
      }
    }
  };

  const handleEdit = (courseId) => {
    document
      .querySelector(`.${style.overlay}`)
      .classList.add(style.showoverlay);
    document
      .querySelector(`.${style.EditForm}`)
      .classList.add(style.showEditForm);
    setcourseID(courseId);
    console.log("Editing course with ID:", courseId);
  };

  function resett() {
    document.getElementById("outlined-basic-1").value = "";
    document.getElementById("outlined-basic-2").value = "";
    document.getElementById("outlined-basic-3").value = "";
  }

  if (loading) {
    return <CircularIndeterminate />; // Display the loading component while loading
  }
  return (
    <div>
      <div className={style.overlay}></div>

      <center>
        <div className={style.EditForm}>
          <div className={style.xros} onClick={removeeditconsole}>
            &times;
          </div>

          <div>
            <TextField
              className={style.i1}
              id="standard-basic"
              label="Course Name"
              variant="standard"
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              className={style.i2}
              id="standard-basic"
              label="Cost"
              variant="standard"
              onChange={(e) => setcost(e.target.value)}
            />
            <TextField
              className={style.i2}
              id="standard-basic"
              label="imglink"
              variant="standard"
              onChange={(e) => setimglink(e.target.value)}
            />
            <button className={style.pushb} onClick={editCourse}>
              {" "}
              Push Edit{" "}
            </button>
          </div>
        </div>
      </center>

      <div className={style.handlerslistdiv1in1}>
        <div>
          <h1 className={style.sellerdata}>
            &nbsp; Your dashboard - {selleruname}{" "}
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
          <div className={style.data}>
            {courses.map((querryData, index) => {
              return (
                <div className={style.courses} key={index}>
                  <div className={style.coursedetails}>
                    <div className={style.infopairone}>
                      <h4 className={style.h4name}>Query:</h4>
                      <p className={style.ttt}>{querryData.querry}</p>
                    </div>

                    <div className={style.infopair}>
                      <h4>Name :</h4>
                      <p>{querryData.name}</p>
                    </div>
                    <div className={style.infopair}>
                      <h4>Company :</h4>
                      <p>{querryData.company}</p>
                    </div>
                    <div className={style.infopair}>
                      <h4>E-Mail</h4>
                      <p>{querryData.email}</p>
                    </div>
                    <div className={style.infopair}>
                      <h4>Location :</h4>
                      <p>{querryData.location}</p>
                    </div>

                   
                  </div>
                </div>
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
            <h1>Add more Data here</h1>
            <h6> not yet implemented (this facility is for dayanamic data from admin)</h6>
            <TextField
              className={style.muit1}
              idd="1"
              id="outlined-basic-1"
              label="name"
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
            {/* <TextField
              className={style.muit1}
              id="outlined-basic"
              label="sellername"
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
              onChange={(e) => setsellername(e.target.value)}
            /> */}
            <TextField
              className={style.muit1}
              idd="2"
              id="outlined-basic-2"
              label="cost"
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
              onChange={(e) => setcost(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-3"
              label="imglink"
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
              onChange={(e) => setimglink(e.target.value)}
            />
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" onClick={load}>
                upload
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



// <div className={style.infopairx}>
// <p className={style.p1}>
//   Status :{" "}
//   <span
//     style={{
//       color:
//         querryData.status.toLowerCase() === "pending"
//           ? "red"
//           : "inherit",
//     }}
//   >
//     {querryData.status}
//   </span>
// </p>
// <div className={style.attendedbs}>
//   <button className={style.attendedb}>
//     {" "}
//     mark attended{" "}
//   </button>
// </div>
// </div>