import React from "react";
import gamesData from "./gamesData";
import ShowGame from "./ShowGames";

const GamesHome = () => {
    return (
        <>
            <div className = 'gamespace'>
             { gamesData.map((val,index) => {
                  return(<ShowGame srclink = {val.srclink}
                              gamename = {val.gamename}
                              imglink = {val.imglink}
                   /> 
                  );
                })}
                
            </div>
        </>
    );
}
export default GamesHome;