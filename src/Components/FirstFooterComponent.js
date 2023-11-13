import img54 from '../images/54.webP'
import img40 from '../images/40.webP'
import img41 from '../images/41.webP'
import img42 from '../images/42.webP'
import img43 from '../images/43.webP'

function FirstFooterComponent(){

    const pStyle = {
        fontFamily: " 'Manrope', sans-serif", 
        color: "#757095"
    }

    return(
        <div className="col-lg-3">
        <img src={img54} className="img-fluid" alt="" />
         <p className="fs-6" style={pStyle}>Travel helps companies manage payments easily.</p>
         <img src={img40} className="img-fluid pe-2" alt="" />
         <img src={img41} className="img-fluid pe-2" alt="" />
         <img src={img42} className="img-fluid pe-2" alt="" />
         <img src={img43} className="img-fluid pe-2" alt="" />
       </div>
    )
   

}

export default FirstFooterComponent;