function Tours(props){

    const prices = {
            backgroundColor: "#DF6951",
            width: "40%",
            height: "15%",
            left: "50%",
            top:"9%"
    }

    return(
        <div className=" col-md-5 col-lg-2 pt-3">
        <div className="d-flex position-relative">
        <img src={props.img} className="img-fluid" alt="" />
        <div className="position-absolute text-center rounded-pill" style={prices}>
           <p>{`$ ${props.price}`}</p>
        </div>
      </div>
    </div>
    );

}

export default Tours;