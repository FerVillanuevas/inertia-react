import React, { useEffect } from 'react'
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import { useSelector } from 'react-redux'
import Image from '../components/Image'


export default function Layout({ title, children }) {

    const {user} =  usePage().props;
    /* useEffect(() => {
        document.title = `Redux counter: ${1}`;
    }, [counter.value]) */

    return (
        <main>

            <nav className="fixed-top navbar navbar-dark navbar-expand-lg">
                <button className="border-0 navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand p-0 m-0" href="#">
                    <Image src={user.avatar} className="rounded" width="36" height="36" alt="" loading="lazy" />
                </a>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
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
            </nav>

            <article>{children}</article>
        </main>
    )
}
