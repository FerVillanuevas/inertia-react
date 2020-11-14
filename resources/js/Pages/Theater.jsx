import React from 'react'
import Layout from '../Layout'

import { useDispatch, useSelector } from 'react-redux';
import {setSound} from '../store/slices/playerSlice'

import '../../css/Theater.css'

export default function Theater({sounds, user}) {

    const dispatch = useDispatch();
    console.log(user)

    const { sound } = useSelector((state) => state.player)

    return (
        <Layout>
            <div className="top-banner fancy-sky embed-responsive embed-responsive-36by9">
                <img className="fit-cover embed-responsive-item" src="https://www.elamaku.com/wp-content/uploads/hablar-con-los-que-ya-no-estan.png" />
            </div>

            <div className="row no-gutters">
                <div className="col-12 col-md-9">
                    <div className="container">
                        <div className="row bg-light mt-3 mt-md-n5 no-gutters shadow-lg row">
                            <div className="col-12 col-md-5 shadow-lg">
                                <div className="embed-responsive embed-responsive-1by1">
                                    <img src="https://diwaramdanu.files.wordpress.com/2015/03/pink-floyd-dark-side-of-the-moon-cover-art-oil-water1.jpg?w=720" alt="Disk Cover" className="embed-responsive-item"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 d-flex flex-column justify-content-center p-3 p-md-5">
                                <div className="d-flex flex-column mb-3">
                                    <h1>Album title</h1>
                                    <h6>by Artista del album</h6>
                                </div>

                                <div className="d-flex mb-4">
                                    <button className="btn btn-primary rounded-pill">Este boton no hace nada</button>
                                </div>

                                <div className="d-flex">
                                    <div className="btn btn-outline-secondary btn-sm disabled"> 2020 </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 py-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem minus praesentium soluta molestiae necessitatibus aliquid error cumque commodi laboriosam, unde suscipit ea provident doloribus, ducimus nesciunt impedit excepturi, eligendi dolores.
                            </div>
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
