import img1 from '../images/1.webP';
import img2 from '../images/2.webP';
import img3 from '../images/3.webP';
import img4 from '../images/4.webP';
import img5 from '../images/5.webP';
import Airline from './Airline';

function AirlinesComponent(){

    const airlineImgs = [img1, img2, img4, img3, img5];

    const bg = {
        background: '#F7F7F7',
        fontSize: 0
    }

    return(
        <div className="container-fluid" style={bg}>
        <div className="row justify-content-center align-items-center">
          {airlineImgs.map(img => <Airline logo={img} key={img} />)}
        </div>
      </div>
    );
}

export default AirlinesComponent;