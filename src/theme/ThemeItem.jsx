import React from 'react'

const ThemeItem = ({color_primary, color_primary_variant, img, changeColor}) => {
    return <a className='color_image' onClick={()=>{changeColor(color_primary, color_primary_variant)}}>{img}</a>;
}

export default ThemeItem