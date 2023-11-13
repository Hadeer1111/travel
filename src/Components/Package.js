function Package(props){

    const divStyle = {
        top: "35%", 
        left: "40%"
    }

    const pStyle = {
        fontSize: "30px"
    }

    const filter = {
        backGround: "rgba(30, 30, 30, 0.38)"
    }

   return(
     <div className="position-relative col-lg-6 p-0" style={filter}>
       <img src={props.img} className="img-fluid" alt="" width={960} height={399}/>
       <div className="position-absolute text-center imgPosition" style={divStyle}>
         <p className="text-uppercase text-white">Promotion</p>
         <p className="text-white imgPositionTitle" style={pStyle}>Explore Nature</p>
         <button className="btn btn-outline-secondary text-white">View Packages</button>
       </div>
     </div>
   );
}

export default Package;