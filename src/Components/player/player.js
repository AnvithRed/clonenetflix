import { ArrowBackOutlined } from "@mui/icons-material";
import "./player.css";
import { Link } from "react-router-dom";


export default function player() {
  return (
    <div className="player">
      <div className="back">
        <ArrowBackOutlined />
        <Link className="homelink" to="/home">Home</Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="trailer.mp4"
      />
    </div>
  );
}