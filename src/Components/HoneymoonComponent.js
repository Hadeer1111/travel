import img1 from '../images/img1.webP'
import Image from './Image';
import HoneymoonText from './HoneymoonText';

function HoneymoonComponent(){
    return(
    <div className="container my-5">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-5">
        <Image img={img1} />
      </div>
      <HoneymoonText/>
    </div>
  </div>
    );
}

export default HoneymoonComponent;