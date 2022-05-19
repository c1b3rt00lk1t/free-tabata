import React, {useContext} from "react";
import { BsFillVolumeUpFill } from "react-icons/bs";
import FreeTabataContext from "../context/FreeTabataContext";

const Volume = () => {
  const {handleVolume} = useContext(FreeTabataContext);
  return (
    <div onClick={handleVolume} className="misc">
      <BsFillVolumeUpFill color='grey' size={35}/>
    </div>
  );
};

export default Volume;
