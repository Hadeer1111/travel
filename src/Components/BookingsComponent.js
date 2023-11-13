import img3 from '../images/img3.webP'
import img4 from '../images/img4.webP'
import img5 from '../images/img 5.webP'
import img2 from '../images/img2.webP'
import Image from './Image'
import BookingComponent from './BookingComponent'


function BookingsComponent(){

    const bookings = [
        {
            img: img3,
            title: "Choose Destination",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        },
        {
            img: img4,
            title: "Check Availability",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        },
        {
            img: img5,
            title: "Let’s Go",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        }
    ]

    const pStyle = {
        fontFamily: " 'Poppins', sans-serif",
        color: "#DF6951"
    }

    const h2Style = {
        width: "60%", 
        fontFamily: "'Volkhov', serif", 
        color: "#181E4B"
    }

    return(
        <div className="container my-5">
     <div className="row justify-content-center align-items-center">
      <div className="col-lg-5 col-sm-6">
        <div>
        <p className="text-capitalize fw-bold" style={pStyle}>Fast & Easy</p>
        <h2 className="text-capitalize fw-bold text-wrap fastAndEasyText" style={h2Style}>
          Get Your Favourite Resort Bookings
        </h2>
        <div className="container-fluid mt-4 px-0">
        {bookings.map((booking, index) => (
        <BookingComponent key={index} img={booking.img} title={booking.text} text={booking.text} />
      ))}
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-sm-6">
        <Image img={img2}/>
      </div>
        </div>
        </div>
    );

}

export default BookingsComponent;