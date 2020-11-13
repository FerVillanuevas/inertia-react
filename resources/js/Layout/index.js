import React, { useEffect } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { useSelector } from 'react-redux'



export default function Layout({ title, children }) {

    const counter = useSelector((state) => state.counter);

    useEffect(() => {
        document.title = `Redux counter: ${counter.value}`;
    }, [counter.value])

    return (
        <main>
            <header>
                <InertiaLink href="/theater">Theater</InertiaLink>
                <InertiaLink href="/dashboard">Home</InertiaLink>
            </header>

            <article>{children}</article>
        </main>
    )
}
