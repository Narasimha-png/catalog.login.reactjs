import "../Styles/Header.css";
import logo from "../assets/cataloglogo__enhanced.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Projects from "./Projects.js";
import { useEffect, useState } from "react";

const Label = ({ name }) => <div className="poppins-semibold">{name}</div>;

const Cancel = ({showNav , setShowNav})=>(
  <svg className="menu-icon"
  onClick={()=>{
    setShowNav(!showNav)
  }
  }
   version="1.1" id="Layer_1" viewBox="0 0 128 128" enableBackground="new 0 0 128 128"  fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#B0BEC5" d="M64,0C28.656,0,0,28.656,0,64s28.656,64,64,64s64-28.656,64-64S99.344,0,64,0z M64,120 C33.125,120,8,94.875,8,64S33.125,8,64,8s56,25.125,56,56S94.875,120,64,120z"></path> 
    </g>
     </g> <g> <g> <path fill="#" d="M75.313,64l16.969-16.969c3.125-3.125,3.125-8.195,0-11.313c-3.117-3.125-8.188-3.125-11.313,0L64,52.688 L47.031,35.719c-3.125-3.125-8.195-3.125-11.313,0c-3.125,3.117-3.125,8.188,0,11.313L52.688,64L35.719,80.969 c-3.125,3.125-3.125,8.195,0,11.313c3.117,3.125,8.188,3.125,11.313,0L64,75.313l16.969,16.969c3.125,3.125,8.195,3.125,11.313,0 c3.125-3.117,3.125-8.188,0-11.313L75.313,64z"></path> 
  </g> </g> </g></svg>
)

const Menu = ({mediaSize , showNav , setShowNav}) => {
  return(
  <svg
  style={{
    display:!showNav && mediaSize ?"revert" :"none"
  }}
  onClick={()=>{
    setShowNav(!showNav)
  }}
 
    className="menu-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#c3f9ea"
    transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke="#CCCCCC"
      stroke-width="0.144"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
        fill="#05f5b1"
      ></path>{" "}
      <path
        d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        fill="#05f5b1"
      ></path>
      <path
        d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
        fill="#05f5b1"
      ></path>
      <circle
        opacity="0.5"
        cx="12"
        cy="12"
        r="10"
        stroke="#05f5b1"
        stroke-width="1.464"
      ></circle>{" "}
    </g>
  </svg>
)};

const Wallet = () => (
  <svg
    className="wallet-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    stroke-width="0.528"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M6.25 14.75C6.25 15.1642 6.58579 15.5 7 15.5C7.41421 15.5 7.75 15.1642 7.75 14.75V8.75C7.75 8.33579 7.41421 8 7 8C6.58579 8 6.25 8.33579 6.25 8.75V14.75Z"
        fill="#4CFDCB"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.1884 8.00377C21.1262 7.99995 21.0584 7.99998 20.9881 8L20.9706 8.00001H18.2149C15.9435 8.00001 14 9.73607 14 12C14 14.2639 15.9435 16 18.2149 16H20.9706L20.9881 16C21.0584 16 21.1262 16 21.1884 15.9962C22.111 15.9397 22.927 15.2386 22.9956 14.2594C23.0001 14.1952 23 14.126 23 14.0619L23 14.0444V9.95556L23 9.93815C23 9.874 23.0001 9.80479 22.9956 9.74058C22.927 8.76139 22.111 8.06034 21.1884 8.00377ZM17.9706 13.0667C18.5554 13.0667 19.0294 12.5891 19.0294 12C19.0294 11.4109 18.5554 10.9333 17.9706 10.9333C17.3858 10.9333 16.9118 11.4109 16.9118 12C16.9118 12.5891 17.3858 13.0667 17.9706 13.0667Z"
        fill="#4CFDCB"
      ></path>
      <path
        opacity="0.5"
        d="M21.1394 8.00152C21.1394 6.82091 21.0965 5.55447 20.3418 4.64658C20.2689 4.55894 20.1914 4.47384 20.1088 4.39124C19.3604 3.64288 18.4114 3.31076 17.239 3.15314C16.0998 2.99997 14.6442 2.99999 12.8064 3H10.6936C8.85583 2.99999 7.40019 2.99997 6.26098 3.15314C5.08856 3.31076 4.13961 3.64288 3.39124 4.39124C2.64288 5.13961 2.31076 6.08856 2.15314 7.26098C1.99997 8.40019 1.99999 9.85581 2 11.6936V11.8064C1.99999 13.6442 1.99997 15.0998 2.15314 16.239C2.31076 17.4114 2.64288 18.3604 3.39124 19.1088C4.13961 19.8571 5.08856 20.1892 6.26098 20.3469C7.40018 20.5 8.8558 20.5 10.6935 20.5H12.8064C14.6442 20.5 16.0998 20.5 17.239 20.3469C18.4114 20.1892 19.3604 19.8571 20.1088 19.1088C20.3133 18.9042 20.487 18.6844 20.6346 18.4486C21.0851 17.7291 21.1394 16.8473 21.1394 15.9985C21.0912 16 21.0404 16 20.9882 16L18.2149 16C15.9435 16 14 14.2639 14 12C14 9.73607 15.9435 8.00001 18.2149 8.00001L20.9881 8.00001C21.0403 7.99999 21.0912 7.99997 21.1394 8.00152Z"
        fill="#4CFDCB"
      ></path>{" "}
    </g>
  </svg>
);

const LangNav = ({toMobileScreen }) => {
  return (
    <div className="lang-nav mobile-lang-nav" style={{
        display:toMobileScreen && "flex"
    }}>
      <button className="bi bi-globe bi-nav poppins-semibold nav-btns">
        <Label name="EN" />
      </button>
      <button className="bi bi-brightness-high poppins-semibold nav-btns">
        <div style={{
          display :toMobileScreen && "revert"
        }}>
        <Label name="Change Theme" />
        </div>
      </button>
    </div>
  );
};

const Login_SignUp = ({showNav , setShowNav , mediaSize}) => {
    return(
  <>
    {<Wallet />}
    <div className="login-signup mobile-login-signup">
      <button className="log-in nav-btns">Log In</button>
      <button className="sign-up nav-btns">Sign Up</button>
    </div>
    { !showNav && <Menu mediaSize={mediaSize} showNav={showNav} setShowNav= {setShowNav} />}
    {showNav && <Cancel showNav={showNav} setShowNav= {setShowNav} /> }
  </>
)
}

const Logo = () => (
  <div className="nav-logo">
    <img className="mainlogo" src={logo}></img>
  </div>
);

function handleClick(showProductNav, setProductNav) {
  if (showProductNav) setProductNav(false);
  else {
    setProductNav(true);
  }
  return;
}

const Nav_Links = ({ showProductNav, setProductNav, showNav , mediaSize }) => {
    const [mobile_Projects , setMobile_projects] = useState(false) ;
    console.log("Nav_LINKS " + mediaSize + " " +  mobile_Projects) ;
  return ( 
    <>
      <div
        className="nav-links mobile-nav-links"
        style={{
          display: showNav && "revert" ,
        }}
      >
        <button className="nav-btns down-hover">
          {<Label name="Products" />}{" "}
          <span className="bi bi-chevron-down bi-nav"></span>
        </button>
        <button
          className="nav-btns down-hover"
          onClick={() => {
            {
               showNav && setMobile_projects(!mobile_Projects)
            }
            {!showNav &&
            handleClick(showProductNav, setProductNav);}
          }}
        >
           
          {<Label name="Projects" />}{" "}
          <span className="bi bi-chevron-down bi-nav"></span>
        </button>
        {mobile_Projects&& mediaSize && (<Projects />)}
        <button className="nav-btns down-hover">
          {<Label name="Pricing" />}
        </button>
        <button className="nav-btns down-hover">{<Label name="Docs" />}</button>
      </div>
    </>
  );
};

const Inner_Nav = ({ showProductNav, setProductNav , showNav , mediaSize }) => (
  <div className="inner-nav mobile-inner-nav">
    {<Logo />}
    {
      <Nav_Links
        showProductNav={showProductNav}
        setProductNav={setProductNav}
        showNav={showNav}
        mediaSize={mediaSize}
      />
    }
  </div>
);

const Inner_SideNav = ({showNav , setShowNav , mediaSize}) => (
  <div className="inner-side-nav">
    {<LangNav />}
    {<Login_SignUp showNav={showNav} setShowNav={setShowNav} mediaSize={mediaSize} />}
  </div>
);

const Mobile_Nav = ({mediaSize , showNav}) => {
  Inner_SideNav({mediaSize}) ;
  return (
    <div className="mobile-nav-bar">
      <Nav_Links setMobileShowProject={true} showNav={showNav} mediaSize={mediaSize}/>
      <LangNav mediaSize={mediaSize} toMobileScreen={true} />
    </div>
  );
};

const Header = () => {
  const [mediaSize, setMediaSize] = useState(false);
  const [showProductNav, setProductNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");
    setMediaSize(mediaQuery.matches);
    console.log(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setMediaSize(e.matches);
      
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <>
      {mediaSize &&  showNav && (
        <div className="mobile-nav-main">
          <Mobile_Nav mediaSize={mediaSize}  showNav={showNav} />{" "}
        </div>
      )}
      <div key={123} className="outer-nav">
        {
          <Inner_Nav
            showProductNav={showProductNav}
            setProductNav={setProductNav}
            mediaSize={mediaSize
            }        
          />
        }
        {<Inner_SideNav 
        showNav={showNav} setShowNav= {setShowNav} mediaSize={mediaSize} />}
      </div>
      {showProductNav && !mediaSize && (
        <Projects
          showProductNav={showProductNav}
          setProductNav={setProductNav}
        />
      )}
    </>
  );
};

export default Header;
