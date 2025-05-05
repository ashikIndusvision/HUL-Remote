import { Menu, Button, notification, Modal } from "antd";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthToken, baseURL } from "../../API/API";
import { IndusvisionLogo } from "../../config";
import ButtonComponent from "../Button";
import useApiInterceptor from "../../hooks/Interceptor";





function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const naviagte = useNavigate();
  const [active, setActive] = useState("");
  const apiCallInterceptor = useApiInterceptor();

  const [modal1Open, setModal1Open] = useState(false);
  const [refreshTokens, setrefreshTokens] = useState(() => 
    JSON.parse(localStorage.getItem('refreshToken')) || null
  );
 const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message:<div style={{fontWeight:"600",fontSize:"1.1rem"}}>Logout Successful</div> ,
   
    });
  };
   const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
      fill={
        active === ("dashboard-home" || "/") || page === ("dashboard-home" || "/")
          ? "#fff"
          : "#bfbfbf"
      }
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={
          active ===  ("dashboard-home" || "/") || page ===  ("dashboard-home" || "/")
            ? "#fff"
            : "#bfbfbf"
        }
      ></path>
    </svg>,
  ];

  const camera = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      width="20px"
      version="1.1"
      viewBox="0 0 74.207 74.207"
      fill={active === "camera" || page === "camera" ? "#fff" : "#bfbfbf"}
    >
      <path d="M57.746,14.658h-2.757l-1.021-3.363c-0.965-3.178-3.844-5.313-7.164-5.313H28.801c-3.321,0-6.201,2.135-7.165,5.313   l-1.021,3.363h-4.153C7.385,14.658,0,22.043,0,31.121v20.642c0,9.077,7.385,16.462,16.462,16.462h41.283   c9.077,0,16.462-7.385,16.462-16.462V31.121C74.208,22.043,66.823,14.658,57.746,14.658z M68.208,51.762   c0,5.769-4.693,10.462-10.462,10.462H16.462C10.693,62.223,6,57.53,6,51.762V31.121c0-5.769,4.693-10.462,10.462-10.462h8.603   l2.313-7.621c0.192-0.631,0.764-1.055,1.423-1.055h18.003c0.659,0,1.23,0.424,1.423,1.057l2.314,7.619h7.204   c5.769,0,10.462,4.693,10.462,10.462L68.208,51.762L68.208,51.762z" />
      <path d="M37.228,25.406c-8.844,0-16.04,7.195-16.04,16.04c0,8.844,7.195,16.039,16.04,16.039s16.041-7.195,16.041-16.039   C53.269,32.601,46.073,25.406,37.228,25.406z M37.228,51.486c-5.536,0-10.04-4.504-10.04-10.039c0-5.536,4.504-10.04,10.04-10.04   c5.537,0,10.041,4.504,10.041,10.04C47.269,46.982,42.765,51.486,37.228,51.486z" />
      fill={active === "camera" || page === "camera" ? "#fff" : "#bfbfbf"}
    </svg>,
  ];

  const smartView = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="30px"
      height="30px"
      viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet"
      fill={
        active === "ai-smart-view" || page === "ai-smart-view"
          ? "#fff"
          : "#bfbfbf"
      }
    >
      <g
        transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill={
          active === "ai-smart-view" || page === "ai-smart-view"
            ? "#fff"
            : "#bfbfbf"
        }
        stroke="none"
      >
        <path d="M1106 1985 c-200 -42 -418 -151 -608 -306 -154 -126 -368 -358 -368 -399 0 -28 100 -147 222 -266 327 -317 647 -466 973 -451 225 10 448 100 682 276 172 129 423 392 423 443 0 47 -254 311 -419 436 -158 119 -311 198 -476 247 -113 34 -319 43 -429 20z m342 -81 c201 -41 424 -163 634 -348 91 -81 258 -259 258 -276 0 -17 -167 -195 -258 -276 -272 -240 -544 -363 -800 -364 -259 0 -530 123 -804 364 -91 81 -258 259 -258 276 0 17 167 195 258 276 211 186 422 302 636 349 85 18 242 18 334 -1z" />
        <path d="M1166 1754 c-242 -59 -408 -305 -368 -546 44 -265 290 -448 549 -411 264 38 454 289 416 550 -41 284 -320 474 -597 407z m196 -75 c162 -34 288 -166 319 -333 50 -272 -205 -521 -477 -466 -217 44 -364 255 -325 466 42 231 258 380 483 333z" />
        <path d="M1148 1487 c-7 -8 -40 -100 -72 -205 -63 -205 -64 -222 -10 -222 19 0 26 8 37 46 l13 47 69 1 69 1 14 -47 c11 -40 17 -48 36 -48 54 0 53 18 -9 223 -32 106 -63 198 -68 205 -13 16 -62 15 -79 -1z m82 -258 c0 -13 -10 -16 -47 -15 -27 0 -47 6 -46 11 1 6 12 46 24 90 l23 80 23 -75 c13 -41 23 -82 23 -91z" />
        <path d="M1462 1478 c-12 -35 -7 -397 5 -409 6 -6 21 -9 34 -7 l24 3 3 209 c3 219 1 225 -41 226 -10 0 -21 -10 -25 -22z" />
      </g>
    </svg>,
  ];

  const tables = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={active === "reports" || page === "reports" ? "#fff" : "#bfbfbf"}
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={active === "reports" || page === "reports" ? "#fff" : "#bfbfbf"}
      ></path>
    </svg>,
  ];

  const billing = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={active === "settings" || page === "settings" ? "#fff" : "#bfbfbf"}
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
        fill={active === "settings" || page === "settings" ? "#fff" : "#bfbfbf"}
      ></path>
    </svg>,
  ];

  const rtl = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={
        active === "organization" || page === "organization"
          ? "#fff"
          : "#bfbfbf"
      }
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
        fill={
          active === "organization" || page === "organization" ? "#fff" : ""
        }
      ></path>
    </svg>,
  ];

  const menuConfig = [
    {
      key: "1",
      label: "Dashboard",
      path: "/dashboard-home",
      icon: dashboard,
      id: "dashboard-home",
    },
    {
      key: "2",
      label: "Reports",
      path: "/reports",
      icon: tables,
      id: "reports",
    },
    {
      key: "3",
      label: "AI Smart View",
      path: "/ai-smart-view",
      icon: smartView,
      id: "ai-smart-view",
    },
    {
      key: "4",
      label: "Machine Parameter",
      path: "/machine-parameter",
      icon: billing,
      id: "machine-parameter",
    },
    {
      key: "5",
      label: "System Status",
      path: "/system-status",
      icon: camera,
      id: "system-status",
    },
    {
      key: "6",
      label: "Settings",
      path: "/settings",
      icon: billing,
      id: "settings",
      fontWeightId: "organization", // Optional special case
    },
    {
      key: "7",
      label: "Plant",
      path: "/plant",
      icon: rtl,
      id: "plant",
    },
  ];

  useEffect(() => {
    if (pathname === "/") {
      setActive("dashboard-home")
      naviagte("dashboard-home")
    }
  }, [pathname]);

  const logout = async()=>{
    try {
    await apiCallInterceptor.post(`logout/`,{
        refresh_token:refreshTokens
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout  = async ()=>{
    setModal1Open(false)
   openNotification()

     navigate('/login');
    logout()
    localStorage.clear();

}
const Clock=()=>{
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span >
      {date.toLocaleTimeString()}
    </span>
  );
}
const DateContainer=()=>{
  const date = new Date().toLocaleDateString();
  return(<>
  {date}

  </>)
}

  return (
    <>
        {contextHolder}
      <Modal
        title={<div style={{textAlign:'center',padding:'1rem 0',fontWeight:'600',fontSize:'1.2rem'}}>Are You Sure You Want To Logout?</div>}
        style={{
          top: 20,
        }}
        open={modal1Open}
        onCancel={() => setModal1Open(false)}
        footer={null}
      >
        <div className="" style={{display:'flex',justifyContent:'center'}}>
          <ButtonComponent handleClick={handleLogout} title="LOGOUT" />
        </div>
      </Modal>
      <div style={{display:"flex" , justifyContent:"space-between" , flexDirection:"column" , height:"100%"}}>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
gap:"2rem",
          width: "100%",
        }}
      >
        <div
          className="brand"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexDirection: "column",
           
          }}
        >
          <img
            src={IndusvisionLogo}
            style={{ height: "50px"  }}
            alt=""
          />
                    <span style={{  height:"0.2px" , width:"100%", background:"#fff"}}></span>

        </div>
      <Menu theme="light" mode="inline">
    {menuConfig.map(({ key, label, path, icon, id, fontWeightId }) => (
      <Menu.Item key={key}>
        <NavLink
          to={path}
          onClick={() => setActive(id)}
          style={{
            background: active === id || page === id ? "#fff" : "",
            boxShadow:
              active === id || page === id
                ? "0 20px 27px rgb(0 0 0 / 5%)"
                : "",
          }}
        >
          <span
            className="icon"
            style={{
              background: active === id || page === id ? color : "",
            }}
          >
            {icon }
          </span>
          <span
            className="label"
            style={{
              color: active === id || page === id ? color : "#fff",
              fontWeight:
                active === fontWeightId || page === fontWeightId ? 600 : "600",
            }}
          >
            {label}
          </span>
        </NavLink>
      </Menu.Item>
    ))}
  </Menu>
      </div>
  <div onClick={()=>setModal1Open(true)} className="" style={{padding:"0.5rem 2rem", borderRadius:'10px',cursor:'pointer',background:'#fafafa',boxShadow:'rgba(0, 0, 0, 0.1) 0px 2px 4px',border:'0.5px solid #8080806e',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src="https://w7.pngwing.com/pngs/253/714/png-transparent-logout-heroicons-ui-icon-thumbnail.png" style={{height:'30px',width:'30px'}} alt="" />

         <span style={{color:"#000",fontWeight:'700'}}> Logout</span>
        </div>
        <div className="" style={{display:"flex",gap:"2rem", fontSize:"1rem",fontWeight:"500",justifyContent:"center"}}> 
          <div className="" style={{padding:'0.5rem 1rem',display:"flex",gap:"2rem", fontSize:"1rem",fontWeight:"500",border:'0.5px solid #c6c6c6',alignItems:'center',justifyContent:'center',borderRadius:'10px' , background:"#fff"}}>
          <DateContainer/>
          <Clock />
          </div>
      
          </div>
      </div>
    </>
  );
}

export default Sidenav;
