import FirstFooterComponent from "./FirstFooterComponent";
import SecondFooterComponent from "./SecondFooterComponent";
import ThirdFooterComponent from "./ThirdFooterComponent";

import img38 from '../images/38.webP'

function FooterComponent(){

    const divStyle = {
        right: "0%"
    }

    const div1Style = {
        width: "73%", 
        height: "0.5%", 
        backgroundColor: "#E5E5EA", 
        left: "14%", 
        top: "100%"
    }

    const div2Style = {
        left: "40%", 
        top: "100%"
    }

    const pStyle = {
        fontSize: "14px", 
        fontFamily: "'Manrope', sans-serif", 
        color: "#181E4B"
    }

    return(
        <div className="d-flex position-relative footerText">
        <div className="position-absolute footerImage" style={divStyle}>
        <img src={img38} className="img-fluid" alt="" width={629} height={484} />
        </div>
        <div className="container">
         <div className="row d-flex justify-content-center pt-5 footerPadding">
         <FirstFooterComponent/>
         <SecondFooterComponent/>
         <ThirdFooterComponent/>

        </div>
        </div>
        <div className="position-absolute rounded-3 mt-5 emptyDiv" style={div1Style}>   
      </div>

      <div className="position-absolute mt-5 pt-5 text-center Copyright" style={div2Style}>
          <p className="fw-bold"  style={pStyle}>Copyright @ Xpro 2022. All Rights Reserved.</p>
      </div>
        </div>

    );

}

export default FooterComponent;