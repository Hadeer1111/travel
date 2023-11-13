import img28 from '../images/28.webP'
import img31 from '../images/31.webP'
import img32 from '../images/32.webP'
import img33 from '../images/33.webP'
import img34 from '../images/34.webP'
import img35 from '../images/35.webP'
import img36 from '../images/36.webP'
import img37 from '../images/37.webP'

function ClientsComponent(){

  const div1Style = {
    top:"18%", 
    left:"45%"
  }

  const pStyle = {
    fontFamily: "'Poppins', sans-serif", 
    fontSize: "15px", 
    color: "#DF6951"
  }

  const div2Style = {
    top:"22%", 
    left:"38%"
  }

  const h3Style = {
    fontFamily: "'Volkhov', serif", 
    color: "#181E4B", 
    width: "70%"
  }

  const div3Style = {
    top:"37%", 
    left:"0%"
  }

  const img32S = {
    top:'45%', 
    left:"32%"
  }

  
  const img33S = {
    top:"33%", 
    left:"43.7%"
  }

  
  const img34S = {
    top:"54%", 
    left:"36%"
  }

  
  const img35S = {
    top:"60%", 
    left:'27.5%'
  }

  
  const img36S = {
    top:'60%', 
    left:'68%'
  }

  const img37S = {
    top:'95%', 
    left:'45%'
  }

  const div4Style = {
    top:"60%", 
    left:'36%'
  }

  const p1Style = {
    width: "42%", 
    fontFamily: "'Poppins', sans-serif"
  }

  const div5Style = {
    top:"89%", 
    left:"42%",
    fontFamily: "'Poppins', sans-serif"
  }

    return(
        <div className="secViews">
        <div className="d-flex position-relative views">
          <img src={img28} className="img-fluid" width={1920} height={768} alt="" />    
        <div className="position-absolute text-center pTitle" style={div1Style}>
          <p className="text-uppercase fw-bolder viewsTitle" style={pStyle}>Promotion</p>
        </div>
        <div className="position-absolute text-center viewsText" style={div2Style}>
          <h3 className="text-capitalize text-wrap fw-bold viewsText" style={h3Style}>See What Our Clients Say About Us</h3>
        </div>
        <div className="position-absolute img31" style={div3Style}>
          <img src={img31} className="img-fluid" alt="" />
        </div>
        <div className="">
          <img src={img32} className="img-fluid position-absolute imgSize32 img32" style={img32S} alt="" />
        </div>
        <div>
          <img src={img33} className="img-fluid position-absolute img33" style={img33S} alt="" />
        </div>
        <div>
          <img src={img34}  className="img-fluid position-absolute img34" style={img34S} alt="" />
        </div>
        <div>
          <img src={img35} className="img-fluid position-absolute img35" style={img35S} alt="" />
        </div>
        <div>
          <img src={img36} className="img-fluid position-absolute img36" style={img36S} alt="" />
        </div>
        <div>
          <img src={img37} className="img-fluid position-absolute img37" style={img37S} alt="" />
        </div>
        <div className="text-center position-absolute" style={div4Style}>
          <p className="text-wrap paraText" style={p1Style}>
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
          </p>   
        </div>
        <div className="text-center position-absolute fw-bold name" style={div5Style}>
          <p>Christine Beckam - Designer</p>
        </div>
        </div>
      </div>
    );

}

export default ClientsComponent;