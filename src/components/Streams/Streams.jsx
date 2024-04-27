import React, { useRef } from 'react'
import './Streams.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import play_icon from '../../assets/play_icon_3.png'
import stream_1 from '../../assets/streams/stream_1.png'
import stream_2 from '../../assets/streams/stream_2.png'
import stream_3 from '../../assets/streams/stream_3.png'
import stream_4 from '../../assets/streams/stream_4.png'
import stream_5 from '../../assets/streams/stream_5.png'
import stream_6 from '../../assets/streams/stream_6.png'
import stream_7 from '../../assets/streams/stream_7.png'

const Streams = () => {

    const slider = useRef();
    const next_btn = useRef();
    const back_btn = useRef();
    let tx = -28.5714;

    const slideForward = () => {
        if(tx > -49.99){
            tx -= 14.2857;
            slider.current.style.transform = `translateX(${tx}%)`;
            back_btn.current.style.background = `#181818`;

            if (tx < -49){
                next_btn.current.style.background = `#b9b9b9`;
            }
        }
    }

    const slideBackward = () => {
        if(tx < -0.01){
            tx += 14.2857;
            slider.current.style.transform = `translateX(${tx}%)`;
            next_btn.current.style.background = `#181818`;

            if (tx > -1){
                back_btn.current.style.background = `#b9b9b9`;
            }
        }
    }

    return (
        <div className='streams'>
            <div className='streams-videos'>
                <img src={next_icon} alt='' className='next-btn' onClick={slideForward} ref={next_btn} />
                <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} ref={back_btn} />
                <div className='slider'>
                    <ul ref={slider}>
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
                        <li>
                            <div className='stream'>
                                <img src={stream_4} alt='' className='stream-img' />
                                <img src={play_icon} alt='' className='play-icon' />
                            </div>
                        </li>
                        <li>
                            <div className='stream'>
                                <img src={stream_5} alt='' className='stream-img' />
                                <img src={play_icon} alt='' className='play-icon' />
                            </div>
                        </li>
                        <li>
                            <div className='stream'>
                                <img src={stream_6} alt='' className='stream-img' />
                                <img src={play_icon} alt='' className='play-icon' />
                            </div>
                        </li>
                        <li>
                            <div className='stream'>
                                <img src={stream_7} alt='' className='stream-img' />
                                <img src={play_icon} alt='' className='play-icon' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='streams-more'>
                <p className='description-text'>Watch top players strategize, analyze moves, and showcase their mastery. Learn new tactics, follow your favorite players, and experience the excitement of chess at its finest.</p>
                <button className='btn dark-btn big-btn'>See more</button>
            </div>
        </div>
    )
}

export default Streams