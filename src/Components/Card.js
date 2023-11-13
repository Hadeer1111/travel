import img16 from '../images/16.webP'
import img17 from '../images/17.webP'
import img18 from '../images/18.webP'
import img19 from '../images/19.webP'

function Card(props){

    const div1Style = {
        top: "80%", 
        left: "5%"
    }

    const pStyle = {
        fontFamily: " 'Poppins', sans-serif", 
        color: "#7D7D7D", 
        fontSize: "14px"
    }

    const h4Style = {
        fontFamily: " 'Poppins', sans-serif"
    }

    
    const p2Style = {
        fontFamily: " 'Poppins', sans-serif", 
        color: "#7D7D7D", 
        fontSize: "16.809px"
    }

    const p3Style = {
        fontFamily: "'Poppins', sans-serif", 
        color: "#DF6951"
    }

    const p4Style = {
        fontFamily: "'Poppins', sans-serif", 
        color: "#7D7D7D"
    }

    const p5Style = {
        fontFamily: "'Poppins', sans-serif", 
        fontSize: "12.224px"
    }

    const btnStyle = {
        fontFamily: "'Poppins', sans-serif", 
        backgroundColor: "#DF6951",
        fontSize: "12.771px"
    }

    
    return(
        <div className="col-lg-4 pt-3">
             
        <div className="d-flex position-relative ">
        <img src={props.img1} className="img-fluid" alt="" />
        <div className="position-absolute" style={div1Style}>
          <img src={props.img2} className="img-fluid" alt="" />
        </div>
      </div>

        <div className="pt-5 px-0">
            <div className="d-flex justify-content-start align-items-start px-0">
              <div>
                <img src={img16} className="img-fluid pe-2" alt="" />
              </div>
              <div>
                <p className="display-inline pe-5" style={pStyle}>
                  {`${props.days} days`}
                </p>
              </div>
              <div>
                <img src={img17} className="img-fluid pe-2" alt="" />  
              </div>
              <div>
                <p style={pStyle}>
                  {`${props.number} People going`}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-start">
                <h4 className="fw-bold city" style={h4Style}>{props.city}</h4>
             <div>
             {Array.from({ length: props.rate }, (_, index) => (
                               <img key={index} src={img19} alt="" />
                                     ))}
               </div>
          </div>
          <div className="d-flex align-items-start justify-content-start">
              <img src={img18} alt="" />
              <p style={p2Style}>{props.country}</p>
          </div>
          <div className="d-flex justify-content-start align-items-center px-0 mx-0">
           <div>
                <p className="pe-3 fs-3" style={p3Style}>{`${props.discount} $`}</p>
           </div>
           <div>
            <p className="text-decoration-line-through" style={p4Style}>{`${props.price} $`}</p>
       </div>
       <div className="col-4">

       </div>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <div>
              <p className="text-start" style={p5Style}>
                {props.des}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-start">
            <div>
              <button className="btn text-white buttons" style={btnStyle} > Explore Now </button>
            </div>
          </div>

        </div>

      </div>
    );

}

export default Card;