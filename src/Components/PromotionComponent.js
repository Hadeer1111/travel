import img20 from '../images/20.webP'
import img21 from '../images/21.webP'
import img22 from '../images/22.webP'
import img23 from '../images/23.webP'
import img25 from '../images/25.webP'
import Button from "./Button";
import Tours from './Tours'

function PromotionComponent(){

    const tours = [
        {
            img: img20,
            price:"700"
        },
        {
            img: img21,
            price:"800"
        },
        {
            img: img22,
            price:"500"
        }
    ]

    const h6Style = {
        fontFamily: "'Poppins', sans-serif", 
        color: "#DF6951"
    }

    const h1Style = {
        width:"40%", 
        fontFamily: "'Volkhov', serif", 
        color: "#181E4B"
    }

    const pStyle = {
        width: "40%",
        fontSize: "16px",
        fontFamily: "'Poppins', sans-serif"
    }

    const imgStyle = {
        position: "absolute",
        top:"-300px",
        right:"0px",
        zIndex:"-1",
        left:"50px",
        height:"550px"
    }

    const prices = {
        backgroundColor: "#DF6951",
        width: "40%",
        height: "15%",
        left: "50%",
        top:"9%"
}

    return(
       
    <div className="container p-5 mt-3">
    <div className="text-start promotion">
   <h6 className="text-uppercase fw-bold" style={h6Style}>Promotion</h6>
   <h1 className="fw-bold text-capitalize text-wrap promotionTitle" style={h1Style}>We Provide You Best Europe Sightseeing Tours</h1>
   <p className="text-wrap py-3 promotionText" style={pStyle}>
    Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
   </p>
   <Button text={"View Packages"}></Button>
  </div>
  <div className="row justify-content-start py-5 promotionImages">
        {tours.map((tour, index) => (
        <Tours key={index} img={tour.img} price={tour.price} />
      ))}
     <div className="col-md-5 col-lg-2 pt-3">
        <div className="d-flex position-relative z-1">
          <img src={img23} className="img-fluid" alt=""/>
          <div className="position-absolute text-center rounded-pill" style={prices}>
             <p>$400</p>
          </div>
            <img src={img25} alt="background" className="promotionBImg" style={imgStyle} />
        </div>
    </div>
    </div>
  </div>
    );

}

export default PromotionComponent;