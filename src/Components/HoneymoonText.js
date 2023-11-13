import Button from "./Button";

function honeymoonText(){

    const p1Style = {
        fontFamily: " 'Poppins', sans-serif",
        color: "#DF6951"
    }

    const h2Style = {
        width: "70%",
        fontFamily: " 'Volkhov', serif", 
        color: "#181E4B"
    }

    const p2Style = {
        fontFamily:" 'Poppins', sans-serif"
    }



    return(
        <div className="col-lg-5">
        <div className="honeymoon">
         <p className="text-uppercase fw-bold py-0" style={p1Style}>Honeymoon Specials</p>
         <h2 className="text-capitalize fw-bold text-wrap py-0 honeymoonText" style={h2Style}>Our Romantic Tropical Destinations</h2>
         <p style={p2Style}>
          Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
         </p>
         <Button text={"View Packages"}></Button>
        </div>
        </div>
    );
}

export default honeymoonText;