function SecondFooterComponent(){

    const p1Style = {
        fontFamily: "'Manrope', sans-serif", 
        color: "#181E4B"
    }

    const p2Style = {
        fontSize: "14px", 
        fontFamily: "'Manrope', sans-serif", 
        color: "#181E4B"
    }



    return(
        <>
        <div className="col-lg-2 pt-4">
        <p className="fs-6 fw-bold"  style={p1Style}>Company</p>
        <p className=""  style={p2Style}>About Us</p>
        <p className=""  style={p2Style}>Careers</p>
        <p className=""  style={p2Style}>Blog</p>
        <p className=""  style={p2Style}>Pricing</p>
      </div>

<div className="col-lg-2 pt-4">
<p className="fs-6 fw-bold"  style={p1Style}>Destinations</p>
<p className=""  style={p2Style}>Maldives</p>
<p className=""  style={p2Style}>Los Angelas</p>
<p className=""  style={p2Style}>Torronto</p>
</div>
</>
    );

}

export default SecondFooterComponent;