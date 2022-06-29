import react from "react";

function BoxColor(props) {

    const pStyle = {
        color:'white',
        backgroundColor : `rgb(${props.r},${props.g},${props.b})`
    }

    return(
        <h4 style={pStyle}>
            rgb({props.r},{props.g},{props.b})
        </h4>
    )
}

export default BoxColor;