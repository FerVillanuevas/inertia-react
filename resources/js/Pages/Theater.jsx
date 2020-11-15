import React, {useState, useEffect} from 'react'
import Layout from '../Layout'
import Wave from "@foobar404/wave"


import { useDispatch, useSelector } from 'react-redux';
import {setSound} from '../store/slices/playerSlice'

import '../../css/Theater.css'

export default function Theater({sounds, user}) {

    const dispatch = useDispatch();
    let [wave] = useState(new Wave());

    useEffect(() => {
        wave.fromElement("audio","spectrum-waves", {
            type:"flower",
            stroke: 5,
            colors: ['#1d2124', '#1d2124', '#1d2124', '#1d2124']
        });
    }, [wave])

    const { sound } = useSelector((state) => state.player)

    return (
        <Layout>
            <div className="row no-gutters">
                <div className="col-12 col-md-9">
                    <div className="container">
                        <div className="align-content-center justify-content-center row spectrum">
                            <canvas id="spectrum-waves" height="400" className="spectrum-waves"></canvas>
                            <img className="spectrum-art" src="http://stack.test/storage//avatars/unnamed.jpg" />
                        </div>
                        <div className="row status">

                        </div>
                        <div className="row controls">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 position-relative mt-0 mt-md-n5 pr-md-3">
                    <div className="playlist pb-4 shadow-lg">
                        <div className="no-gutters p-4 played row">
                            <div className="col-4 embed-responsive embed-responsive-1by1">
                                <img src="https://diwaramdanu.files.wordpress.com/2015/03/pink-floyd-dark-side-of-the-moon-cover-art-oil-water1.jpg?w=720" alt="Disk Cover" className="embed-responsive-item"/>
                            </div>
                            <div className="col-8 d-flex flex-column justify-content-end pb-3 pl-3 text-white">
                                <strong>{sound?.name}</strong>
                                <small className="text-capitalize">album · artita · 2020</small>
                            </div>
                        </div>

                        <ul className="list-group list-group-flush">{
                            sounds.map((snd) => {
                                const isPlaying = Object.is(sound, snd);
                                return <li className={`list-group-item list-group-item-action ${isPlaying && 'playing' }`} onClick={(e) => {
                                    dispatch(setSound(snd))
                                }} key={snd.id}>
                                    <strong className="text-white">{snd.name} <small>{isPlaying && ' · Playing'}</small></strong>
                                    <div className="sound-info text-capitalize text-info">
                                        album · artita · 2020
                                    </div>
                                </li>
                            })
                        }</ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
