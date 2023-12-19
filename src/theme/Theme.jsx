import "./theme.css";
import {themes} from "./data";
import ThemeItem from "./ThemeItem";
import StyleIcon from '@mui/icons-material/Style';
import { useEffect, useState } from "react";

const getColorPrimary=()=>{
  let color_primary = '#81c7fa';
  if(localStorage.getItem('--color-primary')){
    color_primary = localStorage.getItem('--color-primary');
  }
  return color_primary;
};

const getColorPrimaryVariant=()=>{
    let color_primary_variant ='rgba(77,181,255,0.4)';
    if(localStorage.getItem('--color-primary-variant')){
      color_primary_variant = localStorage.getItem('--color-primary-variant');
    }
    return color_primary_variant;
  }

const Theme = () => {
    const [showTheme, setShowTheme]=useState(false);

  const [color_primary, setColorPrimary] = useState(getColorPrimary());
  const [color_primary_variant, setColorPrimaryVariant] = useState(getColorPrimaryVariant());
  const changeColor = (color_primary, color_primary_variant) => {
    setColorPrimary(color_primary);
    setColorPrimaryVariant(color_primary_variant);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary',color_primary);
    document.documentElement.style.setProperty('--color-primary-variant',color_primary_variant);
    localStorage.setItem('--color-primary', color_primary);
    localStorage.setItem('--color-primary-variant', color_primary_variant);
  }, [color_primary, color_primary_variant]);

  return (
    <div className={`${showTheme ? 'showTheme': ''} themes`}>
      <div className="theme_toggler" onClick={()=>setShowTheme(!showTheme)}>
        <StyleIcon/>
      </div>
      <h3>Select color</h3>
      <div className="colors">
        {
            themes.map((theme, index)=>{
                return <ThemeItem key={index} {...theme} changeColor={changeColor}/>
            })
        }
      </div>

      <button className="close_style
      .0" onClick={()=>setShowTheme(!showTheme)}>&times;</button>
    </div>
  );
};

export default Theme;
