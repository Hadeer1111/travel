import logo from '../images/52.webP';
import './Styles/Service.css'

function Service(props){

    const h6Style = {
        fontFamily: " 'Poppins', sans-serif ",
        color: "#181E4B"
    }

    const pStyle = {
        fontWeight: '500', 
        fontSize: '14px', 
        fontFamily:" 'Volkhov', serif", 
        color: '#181E4B'
    }
 
    const imgStyle = {
        zIndex: '-1',
        right: '75%',
        top: '84%',
        display: 'none'
    }


    return(
        <div className="col-lg-2 col-md-2 shadow">
        <div className="position-relative z-1">
          <img src={props.img} className="img-fluid" alt="" />
          <h6 className="text-capitalize fw-bold py-0" style={h6Style}>{props.title}</h6>
          <p style={pStyle}>{props.text}</p>
          <img src={logo} className="position-absolute displayImg" style={imgStyle} alt="" />
        </div>
        </div>
    );
}

export default Service;