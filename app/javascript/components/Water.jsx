import React, { useState } from 'react'

import wave0 from './../assets/images/wave0.png'
import wave1 from './../assets/images/wave1.png'
import wave2 from './../assets/images/wave2.png'

import cupImgPath from './../assets/images/cup.png'
import bottleImgPath from './../assets/images/bottle.png'
import jugImgPath from './../assets/images/jug.png'

const Water = () => {
  const [selected, setSelected] = useState('stephen')
  const [slider, setSlider] = useState(20)
  const [percent, setPercent] = useState(0)

  const waterLevelTop = 333

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
        <div className='water-progress'>{percent} oz</div>
        {Waves()}
      </div>
    )
  }

  const Waves = () => {
    return (
      <div>
        <img src={wave2} className='waves wave2' style={{
            top: `${130 - (waterLevelTop * percent) / 100}px`,
            left: `${percent > 50 ? -(300 * (100 - percent)) / 100 : -(300 * percent) / 100}px`
          }}></img>
        <img src={wave1} className={`waves wave1`} style={{
          top: `${150 - (waterLevelTop * percent) / 100}px`,
          left: `${(percent > 50 ? (300 * (100 - percent)) / 100 : (300 * percent) / 100) * 1.1 - 200}px`
        }}></img>
        <img src={wave0} className={`waves wave0`} style={{
          top: `${190 - (waterLevelTop * percent) / 100}px`,
          left: `${(percent > 50 ? -(300 * (100 - percent)) / 100 : -(300 * percent) / 100) * 1.2}px`
        }}></img>
      </div>
    )
  }

  const WaterControl = () => {
    return (
      <div className='water-control-container'>
        <div className='water-control--item'>
          <label htmlFor='water-control--slider'>
            {/* <div>{percent} oz</div>
            <img src={cupImgPath} alt="cup image" /> */}
          </label>
          <input onChange={({ target: { value } }) => setSlider(value)} id='water-control--slider' type="range" min="10" max="30" step='5' value={slider} className='water-control--slider' />
        </div>
        <div className='water-control--item'>
          <button onClick={() => setPercent(percent + 10)} className='water-control--button'>Drink</button>
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
