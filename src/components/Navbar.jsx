// //
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { useFirebaseAuth } from "../Firebase/Context/FirebaseContext";
import SidebarComp from "./SidebarComp";
import SearchProducts from "./SearchProduct";
import { MdSavedSearch } from "react-icons/md";






const Navbar = ({name}) => {
  // //useSelector is works as "Subscriber". It gives all data from state, When data is changed or updated.
  const productCount = useSelector((state) => state.cart);
  const location = useLocation();
  const navigate = useNavigate();

  const user = 12;


  const logOut = useFirebaseAuth();
  const getUserDataFromStore = useFirebaseAuth();

  const selectUserData = useSelector((state) => state.userData);

  // console.log("selectUserData", selectUserData);
  //   console.log(getUserDataFromStore.getUserData())

  // const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  const [search, setSearch] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const displayName = async () => {
  //   let data = await getUserDataFromStore
  //     .getUserData(selectUserData.currentUser)
  //     .then((resp) => resp);
  //   // console.log("data", data);
  //   setUserData(data)
  //   setUser((data.first_Name + " " + data.last_Name).toUpperCase());
  // };







  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/cart";
  // const isSelectCart = useSelector()

  // const handleSignout = () => {
  //    logOut.handlesignOut().then(() =>navigate("/signin") )
  //    console.log("logOut",logOut);
  //  }


  // useEffect(() => {
  //   const displayName = async () => {
  //     let data = await getUserDataFromStore
  //       .getUserData(selectUserData.currentUser)
  //       .then((resp) => resp);
  //     // console.log("data", data);
  //     setUserData(data)
  //     // setUser((data.first_Name + " " + data.last_Name).toUpperCase());
  //   };
  //   displayName();
  // }, [ isHome, isCart])

  // useEffect(() => {
  //   getUserDataFromStore.getUserData();
  //   logOut.getUserData(selectUserData.currentUser);
  // }, [isHome, isCart]);

  // console.log("user", user);
  const renderName = useMemo(() => ( name
    // <>
    // <h1 style={{ color: '#51347e' }}>{name}</h1>
    // </>
), [user])

console.log("qwer", renderName);





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

        className=" max-w-md mx-auto "
      >
        {/* <span className='logo' style={{marginLeft:"20px"}}><SiReactivex style={{ height: "60px", width: "60px", color: "#51347e" }} /></span> */}
        <SidebarComp user = {name} />
        {/* {nameUser}   */}
        {/* {renderName
         && (
          <div>
            <h1 style={{fontWeight:"bolder", color:"brown", width:"max-content", padding:"2rem"}}> {user}</h1>
          </div>
        )} */}

        {/* {renderName} */}
         <span style={{ color: '#51347e', paddingLeft:"5px", width:"100%" }} className="navbar_name">{name}</span>


       

        {/* <button onClick={() => handleSignout()} style={{background:"red", border:"none", borderRadius:"10px", padding:"0.5rem", color:"white", boxShadow:"inset #790c0c 1px 0px 9px 4px"}}>Logout</button> */}
    
      {
        search &&  <SearchProducts />
      } 

        <div
          className="navbar_last"
        >
           {/* <div style={{display:"flex"}}> */}
          {/* <MdSavedSearch className="searchIcon" />  */}
        {/* </div> */}
          {/* <Category /> */}
          <Link className="navLink" to="/" onClick={() => setSearch(true)}>
            <h2 style={{ display: "flex" }}>
              Home{" "}
              <span>
                <SiHomeassistantcommunitystore
                  style={{ color: isHome ? "#7335d3" : "black" }}
                />
              </span>{" "}
            </h2>
          </Link>
          <Link className="navLink" to="/cart" onClick={() => setSearch(false)}>
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

export default Navbar;



// ########################################################################## 


