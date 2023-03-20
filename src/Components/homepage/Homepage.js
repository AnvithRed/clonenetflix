import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./homepage.css";
import { Link } from "react-router-dom";

export default function Homepage({ type }) {
  return (
    <div className="homepage">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select className="select" name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      
      <img className="gety"
        src="https://c4.wallpaperflare.com/wallpaper/163/828/1011/kung-fu-panda-kung-fu-panda-3-panda-wallpaper-preview.jpg"
        alt=""
      />
      <div className="fadeout"/>
      <div className="info">
        <img
          src="pngegg.png"
          alt=""
        />
        <span className="desc">
        To everyone's surprise, including his own, Po, an overweight, clumsy panda, 
        is chosen as protector of the Valley of Peace. His suitability will soon be tested 
        as the valley's arch-enemy is on his way.
        </span>
        <div className="buttons">
          <button className="play">
          
            <PlayArrow />
            <Link className="playlink" to="/player">Play</Link>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}