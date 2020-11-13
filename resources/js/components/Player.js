import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';

import '../../css/Player.css';
import { setSound } from '../store/slices/playerSlice';
import Slide from 'react-reveal/Slide';


export default function Player() {
    const {sound} = useSelector((state) => state.player)
    const dispatch = useDispatch()
    const audio = document.getElementById('audio')
    const [time, setTime] = useState({
        currentTime: '00:00',
        currentWidth: 0,
        duration: '00:00'
    })
    const [paused, setPaused] = useState(false);


    const toMinutes = (time) => {
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    return (
        <>
            <Slide bottom when={!_.isEmpty(sound)}>
                <div className="custom-player w-100 fixed-bottom">

                   <div className="cmp-range d-flex">
                    <input className="custom-range-bar w-100" value={time.currentWidth.toFixed(4).toString()} onChange={(e) => {
                            const {value} = e.target;
                            audio.currentTime = (audio.duration * value ) / 100
                        }} type="range" />
                   </div>

                    <div className="align-items-center custom-player-info d-flex h-100 text-white w-100">

                        <img src="https://diwaramdanu.files.wordpress.com/2015/03/pink-floyd-dark-side-of-the-moon-cover-art-oil-water1.jpg?w=720" alt="Disk Cover" className="img-fluid h-100"/>

                        <span onClick={() => {
                            audio?.paused ? audio.play() : audio?.pause()
                            setPaused(audio?.paused)
                        } }>
                            { paused ? <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg> : <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pause-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                            </svg> }
                        </span>
                        <span>
                            {sound?.name}
                        </span>
                        <span>
                            {time.duration} / {time.currentTime}
                        </span>
                    </div>
                </div>
            </Slide>
            <audio id="audio" className="d-none" onTimeUpdate={() => {
                setTime({
                    currentWidth: (audio.currentTime * 100) / audio.duration ,
                    duration:  toMinutes(audio.duration),
                    currentTime: toMinutes(audio.currentTime)
                })
            }} onEnded={() => {
                dispatch(setSound({}))
            }} autoPlay={true} src={sound?.src} controls/>
        </>
    )
}
