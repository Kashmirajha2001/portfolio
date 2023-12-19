import "./mode.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";

const getStyle=()=>{
  let style = 'dark-theme';
  if(localStorage.getItem('mystyle')){
    style = localStorage.getItem('mystyle');
  }
  return style;
}

const Mode = () => {
  const [mystyle, setMystyle] = useState(getStyle());
  const changeMode = () => {
    if (mystyle === "dark-theme") {
      setMystyle("light-theme");
    } else {
      setMystyle("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = mystyle;
    localStorage.setItem('mystyle', mystyle);
  }, [mystyle]);

  return (
    <div className="modes" onClick={changeMode}>
      {mystyle === "dark-theme" ? <WbSunnyIcon/> : <DarkModeIcon style={{color:"black",}}/>}
    </div>
  );
};

export default Mode;
