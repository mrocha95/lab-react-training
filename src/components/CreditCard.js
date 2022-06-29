import react from "react";

function CreditCard(props) {

    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        margin: '100px'
    }

    let num = props.number.slice(-4);

    let year = props.expirationYear.toString().slice(-2);

    let month = props.expirationMonth
    if (month < 10) {
       month = '0' + month;
    }

    return(
        <div className="card" style={cardStyle}>
            <p>**** **** **** {num}</p>
            <p>Expires {month}/{year} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;