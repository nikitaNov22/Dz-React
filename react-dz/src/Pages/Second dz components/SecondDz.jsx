import React from "react";
import "./SecondDz.css";
import DataAlbum from "./DataAlbum";
import { albumData } from "./SecondDzData";
import AlbumImageBlock from "./AlbumImageComponent";

export default function SecondDz() {
  return (
    <main>
      <div className="container">
        <h2>Улюлений музичний альбом</h2>
        <div className="contentContainer">
          <div className="textContainer">
            <DataAlbum data={albumData} />
          </div>
          <div className="imagesContainer">
            <AlbumImageBlock />
          </div>
        </div>
      </div>
    </main>
  );
}
