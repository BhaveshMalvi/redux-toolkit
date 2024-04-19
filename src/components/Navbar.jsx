// //
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { useFirebaseAuth } from "../Firebase/Context/FirebaseContext";
import SidebarComp from "./SidebarComp";
import { memo } from "react";

const Navbar = () => {
  // //useSelector is works as "Subscriber". It gives all data from state, When data is changed or updated.
  const productCount = useSelector((state) => state.cart);
  const location = useLocation();
  const navigate = useNavigate();

  const logOut = useFirebaseAuth();
  const getUserDataFromStore = useFirebaseAuth();

  const selectUserData = useSelector((state) => state.userData);

  // console.log("selectUserData", selectUserData);
  //   console.log(getUserDataFromStore.getUserData())

  const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const displayName = async () => {
    let data = await getUserDataFromStore
      .getUserData(selectUserData.currentUser)
      .then((resp) => resp);
    // console.log("data", data);
    setUserData(data)
    setUser((data.first_Name + " " + data.last_Name).toUpperCase());
  };


  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/cart";
  // const isSelectCart = useSelector()

  // const handleSignout = () => {
  //    logOut.handlesignOut().then(() =>navigate("/signin") )
  //    console.log("logOut",logOut);
  //  }

  useEffect(() => {
    displayName();
    getUserDataFromStore.getUserData();
    logOut.getUserData(selectUserData.currentUser);
  }, []);

  if (true) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "5px",
          background: "#dadee8",
          padding: "0 10px 0 10px",
          position: "sticky",
          top: "0px",
          boxShadow: "10px 10px 15px #4d2c81",
          zIndex: "1",
          height: "5rem",
        }}
      >
        {/* <span className='logo' style={{marginLeft:"20px"}}><SiReactivex style={{ height: "60px", width: "60px", color: "#51347e" }} /></span> */}
        <SidebarComp user = {{userData, user}} />
        {/* {nameUser}   */}
        {user && (
          <div>
            <h1 style={{fontWeight:"bolder", color:"brown"}}> {user}</h1>
            {/* Render other user data as needed */}
          </div>
        )}

        <div></div>

        {/* <button onClick={() => handleSignout()} style={{background:"red", border:"none", borderRadius:"10px", padding:"0.5rem", color:"white", boxShadow:"inset #790c0c 1px 0px 9px 4px"}}>Logout</button> */}

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "70%",
            alignItems: "center",
            padding: "10px 0 10px 0",
          }}
        >
          {/* <Category /> */}
          <Link className="navLink" to="/">
            <h2>
              Home{" "}
              <span>
                <SiHomeassistantcommunitystore
                  style={{ color: isHome ? "#7335d3" : "black" }}
                />
              </span>{" "}
            </h2>
          </Link>
          <Link className="navLink" to="/cart">
            <h2 style={{ display: "flex" }}>
              Cart{" "}
              <span className="cartCount" style={{ marginLeft: "10px" }}>
                <span
                  style={{
                    marginLeft: "7px",
                    color: "red",
                    position: "absolute",
                    top: "0",
                    right: "10px",
                  }}
                >
                  <h6>{productCount.length} </h6>{" "}
                </span>
                <div>
                  <FaCartPlus
                    style={{
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      color: isCart ? "#7335d3" : "black",
                    }}
                  />
                </div>
              </span>
            </h2>
          </Link>
        </div>
      </div>
    );
  }
};

export default memo(Navbar);



// ########################################################################## 


