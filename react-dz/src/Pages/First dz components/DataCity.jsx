import React from "react";

export default function DataCity({data}) {

return (
    <ul>
    <li className='textLi'><span>Місто: </span>{data.titleCity};</li>
    <li className='textLi'><span>Країна: </span>{data.titleCountry};</li>
    <li className='textLi'><span>Область: </span>{data.area};</li>
    <li className='textLi'><span>Рік заснування: </span>{data.bases};</li>
    <li className='textLi'><span>Кількість населення: </span>{data.population} тис.;</li>
    <li className='textLi'><span>Опис: </span>{data.text};</li>
    </ul>
)
  
}