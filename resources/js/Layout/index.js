import React, { useEffect, useState } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import Image from '../components/Image'
import Slide from 'react-reveal/Slide';


export default function Layout({ title, children }) {

    const {user} =  usePage().props;
    /* useEffect(() => {
        document.title = `Redux counter: ${1}`;
    }, [counter.value]) */
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Slide left when={toggle}>
                <div className={`side-nav ${toggle ? 'show' : 'hide'}`}>
                    <div className="navbar navbar-dark p-0 pb-3">
                        <button onClick={() => {
                            setToggle(!toggle);
                        }} className="border-0 navbar-toggler p-0" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <strong className="text-white text-capitalize text-truncate mw-50">{user.name}</strong>
                        <a className="navbar-brand p-0 m-0" href="#">
                            <Image src={user.avatar} className="rounded" width="36" height="36" alt="" loading="lazy" />
                        </a>
                    </div>
                    <ul className={`navbar-nav mr-auto`}>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </Slide>
            <main>
                <Slide top when={!toggle}>
                    <nav className={`fixed-top fixed-nav navbar navbar-dark navbar-expand-lg ${ !toggle ? 'd-flex' : 'hide'}`}>
                        <button onClick={() => {
                            setToggle(!toggle);
                        }} className="border-0 navbar-toggler p-0" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30"/>
                        <a className="navbar-brand p-0 m-0" href="#">
                            <Image src={user.avatar} className="rounded" width="36" height="36" alt="" loading="lazy" />
                        </a>

                    </nav>
                </Slide>

                <article className="pt-nav bg-dark">{children}</article>
            </main>
        </>
    )
}
