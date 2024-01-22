import React from "react";
import ImageAlbum from './SecondDzImages/Stadiumarcadium.jpg'

export default function AlbumImageBlock () {
    return (
    <>
        <div className='flag'>
            <p>Обкладинка альбому:</p>
            <a href="https://music.youtube.com/playlist?list=OLAK5uy_mNXrSc9X8kS3dRXOSxcMY3f-wrVboj0wM&si=hSmcSM3t1COQukSw">
            <img src={ImageAlbum} alt='Album Stadium arcadium'></img>
            </a>
            
        </div>
    </>
    )
}