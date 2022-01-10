import React from "react";
import logoinvert from "../img/logo-future-eats-invert.png"
import {TelaContainer} from "./styled"

export const Header = () => {
    return(
        <TelaContainer>
            <div className="LogoContainer">
                <img src={logoinvert}/>
            </div>
        </TelaContainer>
    )
}