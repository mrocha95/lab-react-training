import react from "react";

function Random(props) {
    let rand = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    return(
        <div>
            <p>{rand}</p>
        </div>
    )
}

export default Random