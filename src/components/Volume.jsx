import React, {useContext} from "react";
import { BsFillVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";
import FreeTabataContext from "../context/FreeTabataContext";

const Volume = () => {
  const {handleVolume, mute} = useContext(FreeTabataContext);
  return (
    <div onClick={handleVolume} className="misc">
      {mute ? <BsVolumeMuteFill  color='grey' size={35}/> : <BsFillVolumeUpFill color='grey' size={35}/>}
    </div>
  );
};

export default Volume;
