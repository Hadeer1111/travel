import img1 from '../images/second background.webP'
import img2 from '../images/51.webP'

function SecondBackgroundComponent(){

    const div1Style = {
        left: "18%", 
        top: "30%",
        width: "23%"
    }

    const pStyle = {
        fontFamily:" 'Volkhov', serif"
    }

    const div2Style = {
        left: "24%",
        top: "60%"
    }

    return(
      <div className="d-flex position-relative">
      <img src={img1} className="img-fluid" width={1920} height={399} alt="" />
      <div className="position-absolute" style={div1Style}>
         <p className="fw-bold text-capitalize text-wrap fs-2 text-white holidayText" style={pStyle}>Let’s make your 
          next holiday amazing</p>
        </div>
        <div className="position-absolute holidayImage" style={div2Style}>
          <img src={img2} className="img-fluid" alt="" />
        </div>
    </div>
    );

}

export default SecondBackgroundComponent;