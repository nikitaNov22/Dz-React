import React from "react";
import imageFlagMrpl from './FirstDzImages/Flag_of_Mariupol.png';
import imageFlagUk from './FirstDzImages/Flag_of_Ukraine.svg.webp';

export default function FlagImagesBlock () {
    return (
    <>
        <div className='flag'>
            <p>Прапор міста:</p>
            <img src={imageFlagMrpl} alt='Flag of Mariupol'></img>
        </div>
        <div className='flag'>
            <p>Прапор країни:</p>
            <img src={imageFlagUk} alt='Flag of Ukraine'></img>
        </div>
    </>
    )
}