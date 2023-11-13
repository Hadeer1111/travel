import img6 from '../images/6.webP';
import img7 from '../images/7.webP';
import img8 from '../images/8.webP';
import img9 from '../images/9.webP';
import Service from './Service';

function ServiceComponent(){

    const services = [
        {
            img: img6,
            title: "Guided Tours",
            text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
            img: img7,
            title: "Best Flights Options",
            text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
            img: img8,
            title: "Religious Tours",
            text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
            img: img9,
            title: "Medical Insurance",
            text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        }
    ]

    const pStyle = {
        fontFamily: "'Poppins', sans-serif",
        color: "#DF6951"
    }

    const h3Style = {
        fontFamily: " 'Volkhov',serif",
        color: "#181E4B"
    }

    return(
       <div className="text-center my-5">
       <p className="text-uppercase fw-bold py-0" style={pStyle} >CATEGORY</p>
       <h3 className="text-capitalize fw-bold py-0" style={h3Style}>We Offer Best Services</h3>
       <div className="container">
          <div className="row justify-content-around align-items-center">
                {services.map((service, index) => (
                    <Service key={index} img={service.img} title={service.title} text={service.text} />
                  ))}
          </div>
          </div>
          </div>

    );
}

export default ServiceComponent;