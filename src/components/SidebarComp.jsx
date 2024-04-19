import React from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { SiInteractiondesignfoundation, SiReactivex } from "react-icons/si";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../Firebase/Context/FirebaseContext";
import Category from "./Category";
import imageuser from "./AnimatedIcon/output-onlinegiftools.gif"


function SidebarComp({user}) {
  const [toggled, setToggled] = React.useState(false);
  const navigate = useNavigate()
  const signOut = useFirebaseAuth()
  // console.log(signOut);
  console.log(user.user);



  return (
    
    <div style={{ display: "flex", height: "100%", zIndex:"2" , justifyContent:"center", alignItems:"center", borderRadius: "0px 40px 40px 0px" }}>
      <main style={{ display: "flex", padding: 10 }}>
        
        <div>
          {!toggled ? (
              <GoSidebarCollapse style={{fontSize:"40", }}  onClick={() => setToggled(!toggled)} />
          ) : (
            <>
              <Sidebar
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="always"
                style={{backgroundColor:"white"}}
              >
                <div style={{margin:"10px", padding:"10px"}}>
            <span className='logo' style={{margin:"5px"}}><SiReactivex style={{ height: "60px", width: "60px", color: "#51347e" }} /></span>
            <span><SiInteractiondesignfoundation style={{ height: "60px", width: "60px", color: "#51347e" }} /></span>
            <span><GoSidebarExpand style={{fontSize:"40", marginLeft:"20px" }}  onClick={() => setToggled(false)} /></span>
                </div>

                <Menu style={{fontSize:"1.5rem", padding:"10px"}}>
                  <h1>
                    <span>
                   
                        <span> <input type="image" src={imageuser} alt=""  width="60" height="60" style={{marginLeft:"5px"}}/>
                        </span>
                      <span style={{fontWeight:"bolder", color:"red"}}><br/>
                      {(user.user)}
                      </span>
                      <h1 style={{fontSize:"large"}}>
                      {user.userData.email}
                      </h1>
                       </span>
                     </h1>
                    
                  <MenuItem className="menubar" onClick={() => navigate("/")}> Home</MenuItem>
                  <Menu
                    renderExpandIcon={({ open }) => (
                      <span>{open ? "-" : "+"}</span>
                    )}
                  >
                    {/* <SubMenu label="Products" onChange={() => filterProduct()}>
                      <MenuItem className="manubar"  > Men</MenuItem>
                      <MenuItem className="menubar" > women</MenuItem>
                      <MenuItem className="menubar" > jewelery</MenuItem>
                      <MenuItem className="menubar" >electronics</MenuItem>
                    </SubMenu> */}
                    <Category/>
                  </Menu>
                  <MenuItem className="menubar" onClick={() => navigate("/signin")}> Sign-in</MenuItem>
                  <MenuItem className="menubar" onClick={() => navigate("/signup")}> Sign-up</MenuItem>
                  <MenuItem className="menubar" onClick={() => signOut.handlesignOut(navigate("/signin"))}>Sign-out</MenuItem>
                </Menu>
              </Sidebar>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default SidebarComp;
