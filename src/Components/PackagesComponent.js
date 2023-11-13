import img26 from '../images/26.webP'
import img27 from '../images/27.webP'
import Package from './Package';

function PackageComponent(){


    return(
        <div className="container-fluid p-0 m-0 py-5">
       <div className="row justify-content-center m-0">
           <Package img={img26}/>
           <Package img={img27}/>
       </div>
       </div>
    );

}

export default PackageComponent;