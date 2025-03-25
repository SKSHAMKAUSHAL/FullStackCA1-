import React from "react";

const testimonialCard =({name,review})=>{
    return(
<div className="bro">
<h2 className="l">{name}</h2>
<p className="p">{review}</p>
</div>
    );
}

export default testimonialCard;