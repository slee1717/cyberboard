import React from "react";

const Helpful = (props) => {
    return (<div className='column'><div className='card'><h2>{props.title}</h2><div>{props.description}</div> <br />
    <a href={props.url}>View Resource</a></div></div>)
}

export default Helpful;