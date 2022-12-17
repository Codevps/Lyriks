import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) =>
  isPlaying && activeSong?.title === song?.title ? (
    <div>
      <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      />
    </div>
  ) : (
    <div>
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
    </div>
  );

export default PlayPause;
