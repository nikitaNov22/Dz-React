import React from "react";

export default function DataAlbum({ data }) {
  return (
    <ul>
      <li className="textLi">
        <span>Назва: </span>
        {data.title};
      </li>
      <li className="textLi">
        <span>Виконавець: </span>
        {data.performer};
      </li>
      <li className="textLi">
        <span>Дата випуску: </span>
        {data.releaseDate};
      </li>
      <li className="textLi">
        <span>Записаний: </span>
        {data.recorded};
      </li>
      <li className="textLi">
        <span>Жанр: </span>
        {data.genre};
      </li>
      <li className="textLi">
        <span>Тривалість: </span>
        {data.duration} хвилин;
      </li>
      <li className="textLi">
        <span>Мова: </span>
        {data.language};
      </li>
      <li className="textLi">
        <span>Лейбл: </span>
        {data.label};
      </li>
      <li className="textLi">
        <span>Продюсер: </span>
        {data.producer};
      </li>
      <li className="textLi">
        <span>Топ десять пісень: </span>
        {data.topTenSongs};
      </li>
    </ul>
  );
}
