import React, { useState } from 'react'

import wave0 from './../assets/images/wave0.png'
import wave1 from './../assets/images/wave1.png'
import wave2 from './../assets/images/wave2.png'
import trash from './../assets/images/trash.png'

const History = () => {
  const [selected, setSelected] = useState('stephen')
  const [waterLogs, setWaterLogs] = useState(['32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am', '32oz @ 11:29am'])

  const GOAL = 120

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
        <div className='water-stats'>Goal: {GOAL}oz 💧 | Streak: 3 🔥</div>
        <a href='/water' className='page-toggle'>Progress</a>
      </div>
    )
  }

  const deleteWaterLog = (index) => {
    console.log(index);
    const tempLogs = [...waterLogs]
    tempLogs.splice(index, 1)
    setWaterLogs(tempLogs)
  }

  const WaterLog = () => {
    return (
      <div className='water-log--container'>
        {waterLogs.map((log, index)=> {
          return (
            <div key={index} className={`water-log--item item-${index % 2}`}>
              <span className='water-log--text'>{log}</span>
              <button onClick={() => deleteWaterLog(index)}>
                <img className='water-log--trash' src={trash} alt="delete" />
              </button>
            </div>
          )
        })}
      </div>
    )
  }

  const Waves = () => {
    return (
      <div className='waves-box'>
        <img src={wave2} className='waves' style={{bottom: -340, left: 0, overflow: 'hidden'}}></img>
        <img src={wave1} className='waves' style={{bottom: -350,right: 0, overflow: 'hidden'}}></img>
        <img src={wave0} className='waves' style={{bottom: -400,left: 0, overflow: 'hidden'}}></img>
      </div>
    )
  }

  return (
    <div className='water-main'>
      {WaterNav()}
      {WaterStats()}
      {WaterLog()}
      {/* {Waves()} */}
    </div>
  )
}

export default History
