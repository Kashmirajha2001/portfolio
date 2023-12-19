import "./mode.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";

const Mode = () => {
  const [mystyle, setMystyle] = useState("dark-theme");
  const changeMode = () => {
    if (mystyle === "dark-theme") {
      setMystyle("light-theme");
    } else {
      setMystyle("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = mystyle;
  }, [mystyle]);

  return (
    <div className="modes" onClick={changeMode}>
      {mystyle === "dark-theme" ? <WbSunnyIcon/> : <DarkModeIcon style={{color:"black",}}/>}
    </div>
  );
};

export default Mode;
