function Button(props){

    const btnStyle = {
        fontFamily: " 'Poppins', sans-serif",
        backgroundColor: "#DF6951"
    }

    return(
        <button className="btn text-white" style={btnStyle}>{props.text}</button>
    );
}

export default Button;