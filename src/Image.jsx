import React from "react";

const Image = (props) =>{
    return (
    <>
        <div>
            <img src={props.imglink} alt= "gameImage" className="image" />
        </div>
     </>   
    );
}

export default Image;