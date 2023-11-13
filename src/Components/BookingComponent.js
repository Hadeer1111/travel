function BookingComponent(props){

    const h6Style = {
        fontFamily:" 'Poppins', sans-serif",
        color: "#5E6282"
    }

    const pStyle = {
        fontFamily: "'Poppins', sans-serif",
        color: "var(--textclr, #5E6282)"
    }

    return(
        <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2">
          <img src={props.img} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-2 col-md-10 col-lg-8 fastAndEasy">
          <h6 className="text-capitalize fw-bolder" style={h6Style}>
            {props.title}
          </h6>
          <p style={pStyle} >
            {props.text} 
          </p>
        </div>
      </div>
    );

}

export default BookingComponent;