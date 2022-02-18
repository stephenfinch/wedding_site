import React, { useState, useEffect } from 'react'

import wave0 from './../assets/images/wave0.png'
import wave1 from './../assets/images/wave1.png'
import wave2 from './../assets/images/wave2.png'

import cupImgPath from './../assets/images/cup.png'
import bottleImgPath from './../assets/images/bottle.png'
import jugImgPath from './../assets/images/jug.png'

const Water = () => {
  const [selected, setSelected] = useState('stephen')
  const [slider, setSlider] = useState(24)
  const [ozDrank, setOzDrank] = useState(0)
  const [percent, setPercent] = useState(0)
  const [imagePath, setImagePath] = useState(cupImgPath)

  const GOAL = 120
  const MAX_SLIDER_VALUE = 64

  const WaterNav = () => {
    return (
      <div className='water-nav'>
        <div onClick={() => setSelected('stephen')} className={`water-nav--name ${selected == 'stephen' ? 'selected-name' : null}`}>Stephen</div>
        <div onClick={() => setSelected('mary')} className={`water-nav--name ${selected == 'mary' ? 'selected-name' : null}`}>Mary</div>
      </div>
    )
  }

  const WaterStats = () => {
    return (
      <div className='water-stats-container'>
        <div className='water-stats'>Goal: 100 oz 💧 | Streak: 3 🔥</div>
        <div className='page-toggle'>History</div>
      </div>
    )
  }

  const WaterProgress = () => {
    return (
      <div className='water-progress-container'>
        <div className='water-progress'>{percent}%</div>
        {Waves()}
      </div>
    )
  }

  const Waves = () => {
    return (
      <div>
        <img src={wave2} className='waves' style={{
          bottom: `${(450 * percent / 100) - 450}px`,
          left: `${-1 * 2000 * percent / 100}px`,
          }}></img>
        <img src={wave1} className='waves' style={{
          bottom: `${(450 * percent / 100) - 475}px`,
          right: `-${2000 * percent / 100}px`,
        }}></img>
        <img src={wave0} className='waves' style={{
          bottom: `${(450 * percent / 100) - 500}px`,
          left: `${-0.8 * 2000 * percent / 100}px`,
        }}></img>
      </div>
    )
  }

  useEffect(() => {
    selectImage()
  }, [slider]);

  useEffect(() => {
    (ozDrank / GOAL * 100) < 100 ? setPercent(Math.round(ozDrank / GOAL * 100)) : setPercent(100) // TODO: change this 0 to 100 for final build
  }, [ozDrank]);

  function selectImage() {
    if (slider > 2 * MAX_SLIDER_VALUE / 3) {
      setImagePath(jugImgPath)
    } else if (slider > MAX_SLIDER_VALUE / 3) {
      setImagePath(bottleImgPath)
    } else {
      setImagePath(cupImgPath)
    }
  }

  const WaterControl = () => {
    return (
      <div className='water-control-container'>
        <div className='water-control--item'>
          <input onChange={({ target: { value } }) => setSlider(parseInt(value))} id='water-control--slider' type="range" min="6" max="64" step='2' value={slider} className='water-control--slider' />
          <div className='water-control--display'>
            <img src={imagePath} alt={imagePath} />
            <span>{slider} oz</span>
          </div>
        </div>
        <div className='water-control--item'>
          <button onClick={() => setOzDrank(ozDrank + slider)} className='water-control--button'>Drink</button>
        </div>
      </div>
    )
  }

  return (
    <div className='water-main'>
      {WaterNav()}
      {WaterStats()}
      {WaterProgress()}
      {WaterControl()}
    </div>
  )
}

export default Water
