import React from 'react'
import './Streams.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import play_icon from '../../assets/play_icon_3.png'
import stream_1 from '../../assets/streams/stream_1.png'
import stream_2 from '../../assets/streams/stream_2.png'
import stream_3 from '../../assets/streams/stream_3.png'
import stream_4 from '../../assets/streams/stream_4.png'
import stream_5 from '../../assets/streams/stream_5.png'

const Streams = () => {
  return (
    <div className='streams'>
        <div className='streams-videos'>
            <img src={next_icon} alt='' className='next-btn' />
            <img src={back_icon} alt='' className='back-btn' />
            <div className='slider'>
                <ul>
                    <li>
                        <div className='stream'>
                            <img src={stream_1} alt='' className='stream-img' />
                            <img src={play_icon} alt='' className='play-icon' />
                        </div>
                    </li>
                    <li>
                        <div className='stream'>
                            <img src={stream_2} alt='' className='stream-img' />
                            <img src={play_icon} alt='' className='play-icon' />
                        </div>
                    </li>
                    <li>
                        <div className='stream'>
                            <img src={stream_3} alt='' className='stream-img' />
                            <img src={play_icon} alt='' className='play-icon' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='streams-more'>
            <p>Some description here</p>
            <button className='btn dark-btn'>See more</button>
        </div>
    </div>
  )
}

export default Streams