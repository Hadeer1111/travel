function ThirdFooterComponent(){

    const pStyle = {
        fontFamily: "'Manrope', sans-serif'", 
        color: "#181E4B"
    }

    const inputStyle = {
        fontFamily: "'Manrope', sans-serif", 
        color: "#6363647b", 
        height: "40%", 
        width:"60%", 
        backgroundColor: "#EEEEFF"
    }

    const btnStyle = {
        height: "20%", 
        width: "40%", 
        color: "white", 
        backgroundColor: "#DF6951"
    }

    const p1Style = {
        fontFamily: "'Manrope', sans-serif", 
        color: "#6363647b"
    }

    return(
         <div className="col-lg-3 pt-4">
          <p className="fs-6 fw-bold"  style={pStyle}>Join Our Newsletter</p>
          <div className="input-group mb-3 email">
            <input type="text" className="form-control placeholder" style={inputStyle} placeholder="Your email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn rounded-3" style={btnStyle} type="button" id="button-addon2">Subscribe</button>
            <p className="fw-6 pt-3" style={p1Style} >*  Will send you weekly updates for your better
              tour packages.</p>
          </div>
        </div>
    );

}

export default ThirdFooterComponent;