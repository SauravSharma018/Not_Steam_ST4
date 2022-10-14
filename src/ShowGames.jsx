import React from "react";
import Image from "./Image";
import Base from "./Base";

const ShowGames = (props) => {

    return (
        <>
        <div className="card">
        <a href={props.srclink} >
          <Image imglink = {props.imglink}/>
          <Base gamename = {props.gamename}
          />
        </a>  
         </div> 
        </>

    );
}

export default ShowGames;