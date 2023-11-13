import homeImg from '../images/homePage.webP'
import img30 from '../images/30.webP'
import img29 from '../images/29.webP'
import img53 from '../images/53.webP'
import img55 from '../images/55.webP'
import img56 from '../images/56.webP'
import {Link} from 'react-router-dom' 


function NavComponent(){

    const navStyle = {
        width: "100%"
    }

    const spanStyle = {
        fontSize: "70px", 
        fontWeight: "700",
        fontFamily: "'Volkhov', serif", 
        marginLeft: "200px",
        flexGrow:"1"
    }

    const div1Style = {
        marginTop: "-1%",
        width: "6%", 
        marginLeft: "17%"
    }

    const font = {
        fontFamily: "'Circular Std', sans-serif"
    }

    const ulStyle = {
        border: "none", 
        fontFamily: "'Poppins', sans-serif", 
        backdropFilter: "blur(17.760618209838867px)", 
        backgroundColor: "rgba(217, 217, 217, 0.58)"
    }

    const color = {
        color: "white"
    }

    const aStyle = {
        fontSize: '17px', 
        fontFamily: "'Circular Std', sans-serif",
        backgroundColor: "#DF6951"
    }

    const img1Style = {
        top:"32%", 
        left:"17%"
    }

    const p1Style = {
        width: "28%", 
        top:"34%", 
        left:"17%"
    }

    const div2Style = {
        width: "45%", 
        top: "65%", 
        left:"17%", 
        backgroundColor: "#F3F3F399", 
        backdropFilter: "blur(17.760618209838867px)", 
        height: '10%'
    }

    const div3Style = {
        paddingLeft: "1%",
        width: "20%",
        zIndex: "1"
    }

    const input1Style = {
        color: "white", 
        fontFamily: "'Poppins', sans-serif", 
        border: "none", 
        backgroundColor: "transparent"
    }

    const div4Style = {
        paddingLeft: "21%"

    }

    const div5Style = {
        marginLeft: "27%", 
        marginTop: "-1%",
        zIndex: "1"
    }

    const btn1Style = {
        color: 'white', 
        fontFamily: "'Poppins', sans-serif", 
        border: "none", 
        backgroundColor: "transparent",
        zIndex: "1"
    }

    const div6Style = {
        marginLeft: "50%"
    }

    const img2Style = {
        height: "1%"
    }

    const div7Style = {
        marginLeft: "54%"
    }

    const btn2Style = {
        color: "white", 
        fontFamily: "'Poppins', sans-serif", 
        border: "none", 
        backgroundColor: "transparent"
    }

    const div8Style = {
        marginLeft: "75%" 
    }

    const btn3Style = {
        display: "inline-flex", 
        padding: "10px 35px 11px 42px", 
        border: "#DF6951", 
        backgroundColor: "#DF6951", 
        color: "white", 
        fontFamily: "'Poppins', sans-serif"
    }

    const div9Style = {
        top: "76%",
        left:"17%"
    }

    const div10Style = {
        top: "90%",
        left:"45%"
    }

    function displayNone(){

      if (document.getElementById("search").classList.contains("visible")) {
        document.getElementById("search").classList.remove("visible");
        document.getElementById("search").classList.add("hidden");
      }

   else if (document.getElementById("search").classList.contains("hidden")) {
        document.getElementById("search").classList.remove("hidden");
        document.getElementById("search").classList.add("visible");
      }
    }

    return(
<div className="d-flex position-relative">
  <img src={homeImg} className="img-fluid" width={1920} height={976} alt="" />
    <nav className="position-absolute d-flex justify-content-between navbar navbar-expand-md navbar-light p-5 navBar" style={navStyle}>
   
       
        <div className="logoButton">
        <a className="navbar-brand"  href="#intro">
          <span className="fs-4 text-white logo" style={spanStyle}>
            Travel
          </span>
        </a>

        <button className="navbar-toggler navButton clicked" onClick={displayNone} type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="position-absolute logoImg displayNone" style={div1Style} >
        <img src={img30} className="img-fluid " alt="" />
      </div>
        </div>
        <div className="collapse navbar-collapse justify-content-center align-center" id="main-nav">
          <ul className="navbar-nav ulStyling">
            <li className="nav-item">
              <a className="nav-link text-white navItems aStyling" style={font}  href="#topics">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white navItems" style={font}  href="#reviews">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white navItems" style={font} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu rounded" style={ulStyle}>
                <li><a className="dropdown-item" style={color} href="#">Honeymoon Packages</a></li>
                <li><a className="dropdown-item" style={color} href="#">Tours Packages</a></li>
                <li><a className="dropdown-item" style={color} href="#">Musical Events</a></li>
                <li><a className="dropdown-item" style={color} href="#">Build Package</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white navItems" style={font}  href="#pricing">Upcomming Packages</a>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white navItems" style={font}  href="#pricing">Dashboard</Link>
            </li>
            
          </ul>
        </div>
        
        <div className="d-flex justify-content-center displayNone">
            <a className="btn text-white" style={aStyle}  href="#pricing">Get in Touch</a>
        </div>
    </nav>
  

  <img src={img29} className="position-absolute img-fluid img29" style={img1Style}  alt="" />
  <p className="text-wrap position-absolute text-white fw-bold fs-1 pt-2 navText" style={p1Style}>No matter where you’re going to, we’ll take you there</p>

   <div className="d-flex position-absolute align-items-center rounded-3 searchDiv input-group visible" id='search' style={div2Style}>
    

        <div className="d-flex position-absolute input" style={div3Style}>
          <input type="text" className="form-control text-white textSize" style={input1Style} placeholder="Where to?"/>
        </div>

        <div className="d-flex position-absolute img53" style={div4Style}>
          <img src={img53} className="img-fluid p-0 m-0 " alt="" />
        </div>

        <div className="d-flex position-absolute sDd1" style={div5Style}>
          <div className="dropdown">
            <button className="btn dropdown-toggle ps-0 pe-0 pb-0 searchDropdown1" style={btn1Style} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Travel Type
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>

        <div className="d-flex position-absolute img53" style={div6Style}>
          <img src={img53} className="img-fluid p-0 m-0" style={img2Style} alt="" />
        </div>

        <div className="d-flex position-absolute sDd2" style={div7Style}>
          <div className="dropdown">
            <button className="btn dropdown-toggle searchDropdown1" style={btn2Style} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Duration
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>

        <div className="d-flex position-absolute " style={div8Style}>
          <button type="button" className="btn text-center searchButton" style={btn3Style}>Submit</button>
        </div>

      
   </div>

   <div className="position-absolute d-flex justify-content-start align-items-start displayNone" style={div9Style}>
    <img src={img55} className="img-fluid pe-3 img55" alt="" />
    <p className="text-white pt-2 img55Text">2,500 people booked Tommorowland Event in last 24 hours</p>
   </div>

   <div className="position-absolute img56 displayNone" style={div10Style}> 
  <img src={img56} className="img-fluid" alt="" />  
  </div>

</div>

    );

}

export default NavComponent;