import React from "react";

const Greetings = (props) => {
    let greet;

    switch (props.lang){
        case "de":
            greet = "Hallo";
            break;
        case "en":
            greet = "Hello";
            break;
        case "es":
            greet = "Hola";
            break;
        case "fr":
            greet = "Bonjour";
            break;
        default:
            greet = "Hello";
    }

    return(
        <p>{greet} {props.children}</p>
    )
}


export default Greetings