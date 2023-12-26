import React from 'react'
import {datas} from './data'
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Slide = ({id, image, name, profileName, rank, solve, date, desc, link, valueIndex, index}) => {

  let position ="nextSlide"
  if(valueIndex === index){
    position ="activeSlide"
  }
  if(valueIndex===index-1 || (index ===0 && valueIndex===datas.length-1)){
    position="lastSlide"
  }

  return (
    <article className={`codingSlide ${position}`} key={id}>
      <div className="codingLeft">
        <div className="codingImg">
          <img src={image} alt=""/>
        </div>
        <div className="codingProfileDetails">
          <span>{name}</span>
          <h2>{profileName}</h2>
          <label>{rank}</label>
        </div>
      </div>

      <div className="codingRight">
        <div className="codingDetails">
          <h1>{solve}</h1>
          <h3>{date}</h3>
          <p>{desc}</p>
          <a href={link} className='btn'>Profile <ArrowCircleRightIcon style={{position:"relative", top:"5px"}}/></a>
        </div>
      </div>
    </article>
  )
}

export default Slide